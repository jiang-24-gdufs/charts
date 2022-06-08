import store from '../store';
/**
 * 当前是否是全屏
 * @returns {default.methods.isFullScreen|*}
 */
export function isFullScreen() {
  return document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen;
}

/**
 * 监听window窗口的大小是否有变化
 */
window.addEventListener('resize', (event) => {
  if (!isFullScreen()) {
    store.dispatch('handleFullScreen', false);
  }
});

/**
 * 进入全屏
 */
export function handleFullScreen() {
  const el = document.documentElement;
  const rfs =
    el.requestFullScreen ||
    el.webkitRequestFullScreen ||
    el.mozRequestFullScreen ||
    el.msRequestFullscreen;
  if (typeof rfs !== 'undefined' && rfs) {
    rfs.call(el);
    store.dispatch('handleFullScreen', true);
  }
}

/**
 * 退出全屏
 */
export function handleExitScreen() {
  // 判断是否支持 退出全屏API
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
  store.dispatch('handleFullScreen', false);
}
