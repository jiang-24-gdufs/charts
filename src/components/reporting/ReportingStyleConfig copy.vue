<template>
  <!-- <empty-config v-if="!reportItemRenderData"></empty-config> -->
  <div style="box-sizing: border-box;">
    <!--标题-->
    <div class="style-config-header">
      <!-- <img src="../../assets/icon/charts-config.svg" alt="" draggable="false"> -->
      <!-- {{ reportItemRenderData.renderData.title }} -->
    </div>
    <!--如果配置为数组-->
    <smart-tabs v-if="Array.isArray(configComponent)" style="height: calc(100% - 52px);">
      <smart-tabs-item :icon="item.icon" :label="item.name" v-for="(item, index) in configComponent" :key="index"
        style="height: 100%;overflow: hidden;box-sizing: border-box;">
        <!-- <render-components :component="item.component" :prop="{
          props: {
            ...reportItemRenderData
          },
          style: { boxSizing: 'border-box', height: '100%', overflowY: 'auto', overflowX: 'hidden' }
        }">
        </render-components> -->
      </smart-tabs-item>
    </smart-tabs>
    <!--如果是字符串-->
    <!-- <render-components v-else :component="configComponent" :prop="{
      props: {
        ...reportItemRenderData
      },
      style: { height: 'calc(100% - 51px)', boxSizing: 'border-box', overflowY: 'auto', overflowX: 'hidden' }
    }">
    </render-components> -->
  </div>
</template>

<script>
// import { mapState } from 'vuex';
// import EmptyConfig from '../../components/emptyConfig/EmptyConfig';
// import RenderComponents from '@/components/renderFunComponents/RenderComponents';
import SmartTabs from '@/components/smartTabs/SmartTabs.vue';
import SmartTabsItem from '@/components/smartTabs/SmartsTabsItem.vue';

export default {
  name: 'ReportingStyleConfig',
  components: {
    // EmptyConfig,
    // RenderComponents,
    SmartTabs,
    SmartTabsItem
  },
  // TODO: GET FROM STORE BY INDEX.
  computed: {
    // ...mapState({
    //   reportItemRenderData: (state) => state.reportItemRenderData
    // }),
    reportItemRenderData: () => { },
    // 获取配置组件
    configComponent() {
      return [];
    }
  }
};
</script>

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
</style>
