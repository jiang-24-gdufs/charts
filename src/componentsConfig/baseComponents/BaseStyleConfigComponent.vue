<template>
  <div style="width: 100%">
    <reporting-item-location />
    <slot></slot>
  </div>
</template>

<script>
// import ReportingItemLocation from '../components/reportingItemLocation/ReportingItemLocation.vue';
// import componentsConfigMixins from '../../mixins/componentsConfigMixins';
import componentsMap from '../components';

const { ReportingItemLocation } = componentsMap;

/**
 * 基础的样式配置组件
 */
export default {
  name: 'BaseStyleConfigComponent',
  // mixins: [componentsConfigMixins],
  components: {
    ReportingItemLocation,
  },
};
</script>

<style scoped></style>
