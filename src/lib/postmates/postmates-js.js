/* eslint-disable */
/**
 * The type of messages our frames our sending
 * @type {String}
 */
export const messageType = 'application/x-postmates-js-v1+json'

/**
 * The maximum number of attempts to send a handshake request to the parent
 * @type {Number}
 */
export const maxHandshakeRequests = 5

/**
 * A unique message ID that is used to ensure responses are sent to the correct requests
 * @type {Number}
 */
let _messageId = 0

/**
 * Increments and returns a message ID
 * @return {Number} A unique ID for a message
 */
export const generateNewMessageId = () => ++_messageId

/**
 * PostmatesJS logging function that enables/disables via config
 * @param  {Object} ...args Rest Arguments
 */
export const log = (...args) => PostmatesJS.debug ? console.log(...args) : null // eslint-disable-line no-console

/**
 * Takes a URL and returns the origin
 * @param  {String} url The full URL being requested
 * @return {String}     The URLs origin
 */
export const resolveOrigin = (url) => {
  const a = document.createElement('a')
  a.href = url
  const protocol = a.protocol.length > 4 ? a.protocol : window.location.protocol
  const host = a.host.length ? ((a.port === '80' || a.port === '443') ? a.hostname : a.host) : window.location.host
  return a.origin || `${protocol}//${host}`
}

const messageTypes = {
  handshake: 1,
  'handshake-reply': 1,
  call: 1,
  emit: 1,
  reply: 1,
  request: 1,
}

/**
 * Ensures that a message is safe to interpret
 * @param  {Object} message The PostmatesJS message being sent
 * @param  {String|Boolean} allowedOrigin The whitelisted origin or false to skip origin check
 * @return {Boolean}
 */
export const sanitize = (message, allowedOrigin) => {
  if (
    typeof allowedOrigin === 'string' &&
    message.origin !== allowedOrigin
  ) return false
  if (!message.data) return false
  if (
    typeof message.data === 'object' &&
    !('PostmatesJS' in message.data)
  ) return false
  if (message.data.type !== messageType) return false
  if (!messageTypes[message.data.PostmatesJS]) return false
  return true
}

/**
 * Takes a model, and searches for a value by the property
 * @param  {Object} model     The dictionary to search against
 * @param  {String} property  A path within a dictionary (i.e. 'window.location.href')
 * @param  {Object} data      Additional information from the get request that is
 *                            passed to functions in the child model
 * @return {Promise}
 */
export const resolveValue = (model, property, data) => {
  const unwrappedContext = typeof model[property] === 'function'
    ? model[property](data) : model[property]
  return PostmatesJS.Promise.resolve(unwrappedContext)
}

/**
 * Composes an API to be used by the parent
 * @param {Object} info Information on the consumer
 */
export class ParentAPI {
  constructor (info) {
    this.parent = info.parent
    this.frame = info.frame
    this.child = info.child
    this.childOrigin = info.childOrigin

    this.events = {}

    if (process.env.NODE_ENV !== 'production') {
      log('Parent: Registering API')
      log('Parent: Awaiting messages...')
    }

    this.listener = (e) => {
      if (!sanitize(e, this.childOrigin)) return false

      /**
       * the assignments below ensures that e, data, and value are all defined
       */
      const { data, name } = (((e || {}).data || {}).value || {})

      if (e.data.PostmatesJS === 'emit') {
        if (process.env.NODE_ENV !== 'production') {
          log(`Parent: Received event emission: ${name}`)
        }
        if (name in this.events) {
          this.events[name].call(this, data)
        }
      }
    }

    this.parent.addEventListener('message', this.listener, false)
    if (process.env.NODE_ENV !== 'production') {
      log(`Parent: Awaiting event emissions from Child ${this.childOrigin}`)
    }
  }

  get (property, data) {
    return new PostmatesJS.Promise((resolve) => {
      // Extract data from response and kill listeners
      const uid = generateNewMessageId()
      const transact = (e) => {
        if (e.data.uid === uid && e.data.PostmatesJS === 'reply') {
          this.parent.removeEventListener('message', transact, false)
          resolve(e.data.value)
        }
      }

      // Prepare for response from Child...
      this.parent.addEventListener('message', transact, false)

      // Then ask child for information
      this.child.postMessage({
        PostmatesJS: 'request',
        type: messageType,
        property,
        uid,
        data
      }, this.childOrigin)
    })
  }

  call (property, data) {
    // Send information to the child
    this.child.postMessage({
      PostmatesJS: 'call',
      type: messageType,
      property,
      data,
    }, this.childOrigin)
  }

  on (eventName, callback) {
    this.events[eventName] = callback
  }

  destroy () {
    if (process.env.NODE_ENV !== 'production') {
      log('Parent: Destroying PostmatesJS instance')
    }
    window.removeEventListener('message', this.listener, false)
    if (this.frame.opener && this.frame.close) {
      this.frame.close()
    } else {
      this.frame.parentNode.removeChild(this.frame)
    }
  }
}

/**
 * Composes an API to be used by the child
 * @param {Object} info Information on the consumer
 */
export class ChildAPI {
  constructor (info) {
    this.model = info.model
    this.parent = info.parent
    this.parentOrigin = info.parentOrigin
    this.child = info.child

    if (process.env.NODE_ENV !== 'production') {
      log('Child: Registering API')
      log('Child: Awaiting messages...')
    }

    this.child.addEventListener('message', (e) => {
      if (!sanitize(e, this.parentOrigin)) return

      if (process.env.NODE_ENV !== 'production') {
        log('Child: Received request', e.data)
      }

      const { property, uid, data } = e.data

      if (e.data.PostmatesJS === 'call') {
        if (property in this.model && typeof this.model[property] === 'function') {
          this.model[property](data)
        }
        return
      }

      // Reply to Parent
      resolveValue(this.model, property, data)
        .then(value => e.source.postMessage({
          property,
          PostmatesJS: 'reply',
          type: messageType,
          uid,
          value,
        }, e.origin))
    })
  }

  emit (name, data) {
    if (process.env.NODE_ENV !== 'production') {
      log(`Child: Emitting Event "${name}"`, data)
    }
    this.parent.postMessage({
      PostmatesJS: 'emit',
      type: messageType,
      value: {
        name,
        data,
      },
    }, this.parentOrigin)
  }
}

/**
  * The entry point of the Parent.
 * @type {Class}
 */
class PostmatesJS {
  static debug = false // eslint-disable-line no-undef

  // Internet Explorer craps itself
  static Promise = (() => {
    try {
      return window ? window.Promise : Promise
    } catch (e) {
      return null
    }
  })()

  /**
   * Sets options related to the Parent
   * @param {Object} object The element to inject the frame into, and the url
   * @return {Promise}
   */
  constructor (param) { // eslint-disable-line no-undef
    this.parent = window
    this.frames = {}
    param = Array.isArray(param) ? param : [param]
    param.forEach(p => {
      let {
        container = typeof container !== 'undefined' ? container : document.body, // eslint-disable-line no-use-before-define
        model,
        url,
        name,
        classListArray = [],
      } = p
      const containerIsIframe = !container.opener && container.toString() === '[object HTMLIFrameElement]'
      let tempFrame
      if (containerIsIframe) {
        url = container.src
        container.name = name || ''
        container.classList.add.apply(container.classList, classListArray)
        tempFrame = container
      } else if (container.opener) {
        // 使用window.open方式打开
        tempFrame = container
      } else {
        tempFrame = document.createElement('iframe')
        tempFrame.name = name || ''
        tempFrame.src = url
        tempFrame.classList.add.apply(tempFrame.classList, classListArray)
        container.appendChild(tempFrame)
      }
      const o = resolveOrigin(url)
      this.frames[o] = {
        url,
        origin: o,
        frame: tempFrame,
        model: model || {},
        containerIsIframe,
        child: tempFrame.window || tempFrame.contentWindow || tempFrame.contentDocument.parentWindow
      }
    })

    return this.sendHandshake(Object.keys(this.frames))
  }

  /**
   * Begins the handshake strategy
   * @param  {String} url The URL to send a handshake request to
   * @return {Promise}     Promise that resolves when the handshake is complete
   */
  sendHandshake (origins = []) {
    const handsMap = {}
    origins.forEach(o => {
      handsMap[o] = {
        childOrigin: o,
        attempt: 0,
        responseInterval: undefined
      }
    })
    return new PostmatesJS.Promise((resolve, reject) => {
      let receivedChildrenCount = 0
      const reply = (origins) => (e) => {
        const childOrigin = e.origin
        if (!sanitize(e, childOrigin)) return false
        if (e.data.PostmatesJS === 'handshake-reply') {
          clearInterval(handsMap[childOrigin].responseInterval)
          if (process.env.NODE_ENV !== 'production') {
            log(`Parent: Received handshake reply from Child ${childOrigin}`)
          }
          ++receivedChildrenCount
          if (receivedChildrenCount === origins.length) {
            this.parent.removeEventListener('message', reply, false)
            resolve(origins.map(childOrigin => new ParentAPI({parent: this.parent, frame: this.frames[childOrigin].frame, child: this.frames[childOrigin].child, childOrigin})))
          }
          if (process.env.NODE_ENV !== 'production') {
            log('Parent: Saving Child origin', childOrigin)
          }
        }

        // Might need to remove since parent might be receiving different messages from different hosts
        // if (process.env.NODE_ENV !== 'production') {
        //   log('Parent: Invalid handshake reply')
        // }
        // return reject('Failed handshake')
      }

      this.parent.addEventListener('message', reply(origins), false)

      const doSend = (childOrigin) => () => {
        const currentFrame = this.frames[childOrigin]
        const currentHand = handsMap[childOrigin]
        const {responseInterval} = currentHand
        const {child, model} = currentFrame
        const attempt = ++handsMap[childOrigin].attempt
        if (process.env.NODE_ENV !== 'production') {
          log(`Parent: Sending handshake attempt ${attempt}`, { childOrigin })
        }
        child.postMessage({
          PostmatesJS: 'handshake',
          type: messageType,
          model: model,
        }, childOrigin)

        if (attempt === maxHandshakeRequests) {
          clearInterval(responseInterval)
        }
      }

      const loaded = (childOrigin) => () => {
        doSend(childOrigin)()
        handsMap[childOrigin].responseInterval = setInterval(doSend(childOrigin), 500)
      }

      origins.forEach(o => {
        const {frame, containerIsIframe} = this.frames[o]
        if (frame.opener || containerIsIframe) {
          loaded(o)()
        } else if (frame.attachEvent) {
          frame.attachEvent('onload', loaded(o))
        } else {
          frame.onload = loaded(o)
        }
      })

      if (process.env.NODE_ENV !== 'production') {
        log('Parent: Loading frame', { origins })
      }
    })
  }
}

/**
 * The entry point of the Child
 * @type {Class}
 */
PostmatesJS.Model = class Model {
  /**
   * Initializes the child, model, parent, and responds to the Parents handshake
   * @param {Object} model Hash of values, functions, or promises
   * @return {Promise}       The Promise that resolves when the handshake has been received
   */
  constructor (model) {
    this.child = window
    this.model = model
    this.parent = window.opener || this.child.parent // 支持window.open或iframe方式
    return this.sendHandshakeReply()
  }

  /**
   * Responds to a handshake initiated by the Parent
   * @return {Promise} Resolves an object that exposes an API for the Child
   */
  sendHandshakeReply () {
    return new PostmatesJS.Promise((resolve, reject) => {
      const shake = (e) => {
        if (!e.data.PostmatesJS) {
          return
        }
        if (e.data.PostmatesJS === 'handshake') {
          if (process.env.NODE_ENV !== 'production') {
            log('Child: Received handshake from Parent')
          }
          this.child.removeEventListener('message', shake, false)
          if (process.env.NODE_ENV !== 'production') {
            log('Child: Sending handshake reply to Parent')
          }
          e.source.postMessage({
            PostmatesJS: 'handshake-reply',
            type: messageType,
          }, e.origin)
          this.parentOrigin = e.origin

          // Extend model with the one provided by the parent
          const defaults = e.data.model
          if (defaults) {
            Object.keys(defaults).forEach(key => {
              this.model[key] = defaults[key]
            })
            if (process.env.NODE_ENV !== 'production') {
              log('Child: Inherited and extended model from Parent')
            }
          }

          if (process.env.NODE_ENV !== 'production') {
            log('Child: Saving Parent origin', this.parentOrigin)
          }
          return resolve(new ChildAPI(this))
        }
        return reject('Handshake Reply Failed')
      }
      this.child.addEventListener('message', shake, false)
    })
  }
}

export { PostmatesJS }
