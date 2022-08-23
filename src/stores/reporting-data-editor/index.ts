import { cloneDeep } from 'lodash';
import { defineStore } from 'pinia';

interface CodeEditorOptions {
  title: string;
  content: string;
  language: string;
}

export const useReportingDataEditorStore = defineStore('reporting-data-editor', {
  state: () => ({
    data: {
      title: '',
      content: '',
      language: 'json',
    } as CodeEditorOptions,
    origin: {},
    isCreated: false,
    isShowEditor: false,
  }),
  actions: {
    setData(payload: CodeEditorOptions) {
      this.data = { ...cloneDeep(this.data), ...payload };
    },
    setTag(payload: object) {
      // 追踪用于修改的数据
      /* editorStore.tag.origin.data = newContent */
      this.origin = payload;
    },

    created() {
      this.isCreated = true;
    },
    showEditor() {
      this.isShowEditor = true;
    },
    closeEditor() {
      this.isShowEditor = false;
    },
  },
});
