<template>
    <div style="width: 100%;">
        <reporting-item-location :render-data="renderData"></reporting-item-location>
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
  mixins: [componentsConfigMixins],
  components: {
    ReportingItemLocation
  }
};
</script>

<style scoped>

</style>
