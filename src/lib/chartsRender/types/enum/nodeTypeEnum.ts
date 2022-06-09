// 树形控件类型
// class NodeTypeEnum {
//   static count = 0;

//   constructor(name) {
//     this.status = NodeTypeEnum.count++;
//     this.name = name;
//   }
// }

export enum NodeType {
  FILE, // ('文件'),
  FOLDER, // ('文件夹')
}
