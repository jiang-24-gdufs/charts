/**
 * 排序类型
 */
class SortTypeEnum {
  static count = 0;

  constructor(name) {
    this.status = SortTypeEnum.count++;
    this.name = name;
  }
}

export enum SortType {
  TIME_ASC, // ('按时间升序'),
  TIME_DESC, // ('按时间降序'),
  NAME_ASC, // ('按名称升序'),
  NAME_DESC, // ('按名称降序')
}
