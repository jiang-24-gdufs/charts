export enum DataObtainType {
  STATIC_DATA = 0,
  DATA_SOURCE = 1,
  API_SOURCE = 2,
}

export interface RenderData {
  dataObtainType: DataObtainType;
  dataSetId: null;
  dimensionList: Array<any>;
  measureList: Array<any>;
  whereList: Array<any>;
  selected: boolean;
  refresh: number;
  showLoading: boolean;
}
