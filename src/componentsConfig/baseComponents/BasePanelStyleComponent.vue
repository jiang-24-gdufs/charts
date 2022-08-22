<template>
  <base-style-config-component v-bind="$props">
    <div style="padding: 5px; border-top: 1px solid #dcdee2; margin-top: 10px">
      <slot name="top"></slot>
      <grid-item-style v-bind="$props" />
      <slot></slot>
    </div>
  </base-style-config-component>
</template>

<script>
import BaseStyleConfigComponent from './BaseStyleConfigComponent';
import componentsConfigMixins from '../../mixins/componentsConfigMixins';
/**
 * 基础面板样式配置
 */
export default {
  name: 'BasePanelStyleComponent',
  components: {
    BaseStyleConfigComponent,
    GridItemStyle: () => import('../components/gridItemStyle/GridItemStyle'),
  },
  mixins: [componentsConfigMixins],
};
</script>

<style scoped></style>
