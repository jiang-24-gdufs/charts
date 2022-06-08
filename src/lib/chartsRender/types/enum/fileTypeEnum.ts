/**
 * 树型控件类型
 */
class FileTypeEnum {
  static count = 0;

  constructor(name, icon) {
    this.status = FileTypeEnum.count;
    this.name = name;
    this.icon = icon;
  }
}

export default {
  EDIT_AREA: new FileTypeEnum('编辑区', 'fa-edit'),
  PUBLISH_AREA: new FileTypeEnum('发布区', 'fa-paper-plane'),
};
