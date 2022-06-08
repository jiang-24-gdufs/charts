// import { cloneDeep } from 'lodash';
// NOTE: 使用多页面,暂时用不到store
import { defineStore } from 'pinia';
import type { Layout } from '@/lib/gridLayout/helpers/utils';

export interface ContainerConfigState {
  colNum: number;
  isDraggable: boolean;
  // isMirrored: boolean;
  // isResizable: boolean;
  margin: [number, number];
  rowHeight: number;
  // useCssTransforms: boolean;
  // verticalCompact: boolean;
}

export interface globalStyleState {
  themeName: string | null;
  bgcolor: string;
}

export interface reportingState {
  createTime?: string;
  dataSetIds?: string; // '{}'
  description?: string;
  draftId?: string | null; // 草稿
  folderId?: string;
  imgUrl?: string;
  name?: string;
  rid?: string;
  type?: number; // 0: 报告
  userId?: string;
  pageData: {
    containerConfig: ContainerConfigState;
    globalStyle: globalStyleState;
    layoutItem: Layout;
  };
}

export const useReportingEditStore = defineStore('reporting-edit', {
  state: () => ({
    data: {
      pageData: {
        containerConfig: {
          colNum: 48,
          isDraggable: true,
          margin: [10, 10],
          rowHeight: 15,
          verticalCompact: true,
        },
        globalStyle: {
          themeName: null,
          bgcolor: 'none',
        },
        layoutItem: [],
      },
    } as reportingState,
  }),
  actions: {
    set(payload: reportingState) {
      this.data = payload;
    },
    setPageData(payload: any) {
      this.data.pageData = payload;
    },
    setContainerConfig(payload: ContainerConfigState) {
      this.data.pageData.containerConfig = payload;
    },
    setGlobalStyle(payload: globalStyleState) {
      this.data.pageData.globalStyle = payload;
    },
    setThemeName(payload: string | null) {
      this.data.pageData.globalStyle.themeName = payload;
    },
    setThemeBgcolor(payload: string) {
      this.data.pageData.globalStyle.bgcolor = payload;
    },
    setLayoutItem(payload: Layout) {
      this.data.pageData.layoutItem = payload;
    },
  },
  getters: {
    layoutItem(state) {
      if (state.data.pageData) {
        return state.data.pageData.layoutItem;
      } else {
        return [];
      }
    },
    containerConfig(state) {
      return state.data.pageData.containerConfig;
    },
    currThemeName(state) {
      if (state.data.pageData) {
        return state.data.pageData.globalStyle.themeName;
      } else {
        return null;
      }
    },
    currBgcolor(state) {
      if (state.data.pageData) {
        return state.data.pageData.globalStyle.bgcolor;
      } else {
        return 'none';
      }
    },
  },
});
