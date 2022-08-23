<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import SmartTabs from '@/components/smartTabs/SmartTabs.vue';
import SmartTabsItem from '@/components/smartTabs/SmartsTabsItem.vue';
import { useReportingEditStore } from '@/stores/reporting-edit';
import { useReportingDataEditorStore } from '@/stores/reporting-data-editor';
import componentsMap from '@/componentsConfig/components';

const { CodeEditor } = componentsMap;

export default defineComponent({
  name: 'ReportingStyleConfig',
  components: {
    SmartTabs,
    SmartTabsItem,
    CodeEditor,
  },
  setup() {
    const store = useReportingEditStore();
    const editorStore = useReportingDataEditorStore();
    const currConfigItem = computed(() => store.currConfigItem);
    const configComponent = computed(() =>
      currConfigItem.value ? currConfigItem.value.configComponent : []
    );
    const activeName = ref(configComponent.value[0].name);
    const isShowEditor = computed(() => editorStore.isShowEditor);
    const isCreated = computed(() => editorStore.isCreated);

    return {
      currConfigItem,
      configComponent,
      activeName,
      isShowEditor,
      isCreated,
    };
  },
});
</script>

<template>
  <div v-if="currConfigItem" style="box-sizing: border-box">
    <!--标题-->
    <div class="style-config-header">
      <!-- <img src="../../assets/icon/charts-config.svg" alt="" draggable="false"> -->
      {{ currConfigItem.title }}
    </div>
    <!-- @tab-click="handleClick" -->
    <el-tabs v-model="activeName" class="demo-tabs" stretch>
      <el-tab-pane
        v-for="component of configComponent"
        :key="component.component"
        :label="component.name"
        :name="component.name"
      >
        <component :is="component.component" />
      </el-tab-pane>
    </el-tabs>
    <Teleport to="#reporting-edit">
      <CodeEditor v-if="isCreated" v-show="isShowEditor" />
    </Teleport>
  </div>
  <!-- <empty-config v-else></empty-config> -->
</template>

<style lang="scss" scoped>
@use '@/style/mixins/mixins' as *;

.style-config-header {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  background-color: white;
  border-bottom: 1px solid #dcdee2;
}

:deep(.el-tabs .el-tabs__content) {
  overflow: hidden auto;
  max-height: 700px;

  @include scroll-bar;
}
</style>
