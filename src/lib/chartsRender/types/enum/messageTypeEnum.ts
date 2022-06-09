// 页面通信
// class MessageTypeEnum {
//   static count = 0;

//   constructor(name) {
//     this.status = MessageTypeEnum.count++;
//     this.name = name;
//   }
// }

export enum MessageType {
  FOCUS, // ('获取焦点'),
  UPDATE, // ('更新'),
  RELOAD, // ('重新加载')
}
