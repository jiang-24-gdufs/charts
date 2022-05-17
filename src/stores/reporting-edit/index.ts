// import { cloneDeep } from 'lodash';
// NOTE: 使用多页面,暂时用不到store
import { defineStore } from 'pinia';

export const usePathRoamStore = defineStore('reporting-edit', {
  state: () => ({
    data: null,
  }),
  actions: {
    set(payload: any) {
      this.data = payload;
    },
  },
});
