

<script lang="ts" >
import { computed, defineComponent, ref } from 'vue';
// import EmptyConfig from '../../components/emptyConfig/EmptyConfig';
// import RenderComponents from '@/components/renderFunComponents/RenderComponents';
import SmartTabs from '@/components/smartTabs/SmartTabs.vue';
import SmartTabsItem from '@/components/smartTabs/SmartsTabsItem.vue';
import { useReportingEditStore } from '@/stores/reporting-edit';

export default defineComponent({
  name: 'ReportingStyleConfig',
  components: {
    // EmptyConfig,
    // RenderComponents,
    SmartTabs,
    SmartTabsItem
  },
  setup(props) {
    const store = useReportingEditStore();
    const currConfigItem = computed(() => store.currConfigItem);
    const configComponent = computed(() => currConfigItem.value ? currConfigItem.value.configComponent : [])
    const activeName = ref(configComponent.value[0].name)

    const handleClick = console.log



    return {
      currConfigItem, configComponent, activeName, handleClick
    }
  },
  // TODO: GET FROM STORE BY INDEX.
  computed: {
    // ...mapState({
    //   reportItemRenderData: (state) => state.reportItemRenderData
    // }),
    reportItemRenderData: () => { },
    // 获取配置组件
    // configComponent() {
    //   return [];
    // }
  }
});
</script>


<template>
  ReportingStyleConfig.vue
  <div v-if="currConfigItem" style="box-sizing: border-box;">
    <!--标题-->
    <div class="style-config-header">
      <!-- <img src="../../assets/icon/charts-config.svg" alt="" draggable="false"> -->
      {{ currConfigItem.title }}
    </div>
    <!--如果配置为数组-->
    <!-- <smart-tabs v-if="Array.isArray(configComponent)" style="height: calc(100% - 52px);">
      <smart-tabs-item :icon="item.icon" :label="item.name" v-for="(item, index) in configComponent" :key="index"
        style="height: 100%;overflow: hidden;box-sizing: border-box;">
        <render-components :component="item.component" :prop="{
          props: {
            ...reportItemRenderData
          },
          style: { boxSizing: 'border-box', height: '100%', overflowY: 'auto', overflowX: 'hidden' }
        }">
        </render-components>

      </smart-tabs-item>
    </smart-tabs> -->
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <!-- <el-tab-pane label="User" v-for="component of configComponent" :key="component.component" name="first">
        <component :is="component.component"></component>
      </el-tab-pane> -->
      <el-tab-pane :label="component.name" v-for="component of configComponent" :key="component.component"
        :name="component.name">
        <component :is="component.component"></component>
      </el-tab-pane>
    </el-tabs>
    <!--如果是字符串-->
    <!-- <render-components v-else :component="configComponent" :prop="{
      props: {
        ...reportItemRenderData
      },
      style: { height: 'calc(100% - 51px)', boxSizing: 'border-box', overflowY: 'auto', overflowX: 'hidden' }
    }">
    </render-components> -->
  </div>
  <!-- <empty-config v-else></empty-config> -->

</template>

<style scoped>
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
}
</style>
