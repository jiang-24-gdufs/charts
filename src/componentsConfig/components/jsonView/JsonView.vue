<template>
  <div class="json-view">
    <div class="json-view-title">
      <!-- <img src="../../assets/icon/json.svg"> -->
      <div class="json-view-des">{{ title }}</div>
    </div>
    <json-viewer :value="value" copyable sort />
    <el-button type="primary" icon="el-icon-edit" size="small" style="
        margin: 10px;
        width: calc(100% - 20px);
        background: linear-gradient(90deg, rgb(29, 98, 240), rgb(25, 213, 253));
      " @click="handleEditCode">
      编辑
    </el-button>

  </div>
</template>

<script>
import JsonViewer from 'vue-json-viewer';
import { defineComponent, ref, computed, watch } from 'vue';
import { useReportingDataEditorStore } from '@/stores/reporting-data-editor';

import componentsMap from '../index';

const { CodeEditor } = componentsMap;

export default defineComponent({
  name: 'JSONView',
  components: {
    JsonViewer,
    CodeEditor,
  },
  props: {
    origin: {
      type: [Object, Array],
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
    value: {
      type: [Object, Array],
      required: false,
      default: function () {
        return '';
      },
    },
  },
  emits: ['input', 'change'],
  setup(props, { emit }) {
    const editorStore = useReportingDataEditorStore();
    const title = computed(() => props.title);

    function handleEditCode() {
      editorStore.created();
      editorStore.showEditor();
      // 开始编辑
      editorStore.setData({
        title: title.value,
        content: props.value,
      })
      // 追加标签
      editorStore.setTag(
        props.origin,
      )
    }


    return { title, handleEditCode, };
  },
});
</script>

<style>
.json-view {
  margin: 10px 0;
  background-color: white;
  box-shadow: 1px 1px 1px #ccc;
}

.json-view-title {
  font-size: 13px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #13227a;
}

.json-view-des {
  flex: 1;
  text-align: center;
}

.json-view-wrapper {
  width: 50%;
}
</style>
