<template>
  <div style="width: 100%">
    <reporting-item-location :render-data="renderData" />
    <slot></slot>
  </div>
</template>

<script>
import ReportingItemLocation from '../components/reportingItemLocation/ReportingItemLocation';
import componentsConfigMixins from '../../mixins/componentsConfigMixins';
/**
 * 基础的样式配置组件
 */
export default {
  name: 'BaseStyleConfigComponent',
  components: {
    ReportingItemLocation,
  },
  mixins: [componentsConfigMixins],
};
</script>

<style scoped></style>
