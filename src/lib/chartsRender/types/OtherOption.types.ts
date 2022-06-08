export enum DataObtainType {
  STATIC_DATA = 0, // '静态数据'
  DATA_SOURCE = 1, // '数据源'
  API_SOURCE = 2, // 'API'
}

export interface OtherOption {
  dataObtainType: DataObtainType;
  dataSetId: null;
  dimensionList: Array<any>;
  measureList: Array<any>;
  whereList: Array<any>;
  selected: boolean;
  refresh: number;
  showLoading: boolean;
}
