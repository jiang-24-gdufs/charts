<template>
  <div class="code-edit animated bounceInUp">
    <div :style="containerSize" class="code-container">
      <div class="code-edit-header">
        <div class="code-edit-item">
          <span>主题</span>
          <el-select v-model="editorTheme" placeholder="请选择" size="small">
            <el-option label="Visual Studio" :value="editorThemeOptions.VS" />
            <el-option label="Visual Studio Dark" :value="editorThemeOptions.VS_DARK" />
            <el-option label="High Contrast Dark" :value="editorThemeOptions.HC_BLACK" />
          </el-select>
        </div>
        <div class="code-edit-item">
          <span>{{ title }}</span>
        </div>
        <el-button type="primary" size="small" style="margin-left: 10px" @click="handleSave">保存</el-button>
        <div class="code-edit-status code-edit-full" style="margin-left: auto" @click="handleFullScreen">
          <i class="fa fa-window-restore"></i>
        </div>
        <div class="code-edit-status code-edit-close" @click="handleClose">
          <i class="fa fa-times"></i>
        </div>
      </div>
      <div ref="container" style="height: calc(100% - 40px); width: 100%"></div>
    </div>
  </div>
</template>

<script>
import * as monaco from 'monaco-editor';
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import { useReportingDataEditorStore } from '@/stores/reporting-data-editor';

import { defineComponent, ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue';

self.MonacoEnvironment = {
  getWorker(workerId, label) {
    if (label === 'json') {
      return new JsonWorker();
    }
    return new EditorWorker();
  },
};

export default defineComponent({
  name: 'CodeEditor',

  setup(props) {
    const editorThemeOptions = {
      VS: 'vs',
      VS_DARK: 'vs-dark',
      HC_BLACK: 'hc-black',
    };
    const editorTheme = ref(editorThemeOptions.VS_DARK);
    const container = ref(null);
    const editorStore = useReportingDataEditorStore();
    const editorData = computed(() => editorStore.data)
    const editorOptions = computed(() => ({
      value: JSON.stringify(editorData.value.content),
      language: editorData.value.language,
    }))
    const title = computed(() => editorData.value.title)
    const full = ref(false);
    const containerSize = computed(() => ({
      width: full.value ? '100%' : '60%',
      height: full.value ? '100%' : '60%',
    }))

    let monacoInstance = null

    function handleReCreate() {
      if (monacoInstance) {
        monacoInstance.dispose();
      }
      handleCreateEdit();
    }

    function handleFullScreen() {
      full.value = !full.value;
      handleReCreate();
    }
    function handleClose() {
      editorStore.closeEditor();
    }

    function handleSave() {
      // 获取编辑器的字符串
      let newContent = monacoInstance.getValue();
      const oldContent = JSON.stringify(editorData.value.content)
      if (!Object.is(newContent, oldContent)) {
        newContent = JSON.parse(newContent)
        // TODO: 更新store
        editorStore.setData({ content: newContent })
        // TODO: 更新tag
        editorStore.origin.data = newContent
      }
    }

    function handleCreateEdit() {
      nextTick(() => {
        monacoInstance = monaco.editor.create(container.value, {
          ...editorOptions.value,
          theme: editorTheme.value || editorThemeOptions.VS_DARK,
          // formatOnPaste: true,
          // scrollbar: {
          //   verticalScrollbarSize: 5,
          // },
        });
      });
    }



    onMounted(() => {
      handleCreateEdit();
    });

    onBeforeUnmount(() => {
      if (monacoInstance) {
        // 执行关闭编辑器
        monacoInstance.dispose();
      }
    });

    watch(() => editorData.value.content, (val) => {
      monacoInstance.setValue(JSON.stringify(val))
    })
    watch(editorTheme, (value) => {
      handleReCreate(value);
    });

    return {
      editorTheme,
      editorThemeOptions,
      container,
      containerSize,
      title,

      handleFullScreen,
      handleClose,
      handleSave,
    };
  },
});
</script>

<style scoped>
.code-edit {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.code-edit-header {
  height: 35px;
  background-color: white;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #808695;
}

.code-edit-item {
  display: flex;
  align-items: center;
}

.code-edit-item>span {
  font-size: 13px;
  margin: 0 10px;
}

.code-edit-status {
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
}

.code-edit-status:hover {
  background-color: #ed4014;
  color: white;
}

.code-container {
  border: 2px solid #515a6e;
}
</style>
