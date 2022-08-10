<template>
    <base-style-config-component v-bind="$props">
        <smart-collapse style="border-top: 1px solid #dcdee2;margin-top: 10px;">
            <smart-collapse-item title="网格样式配置" icon="fa fa-columns">
                <!-- <grid-item-style v-bind="$props"></grid-item-style> -->
            </smart-collapse-item>
            <slot></slot>
        </smart-collapse>
    </base-style-config-component>
</template>

<script>
import SmartCollapse from '../../components/smartCollapse/SmartCollapse.vue';
import BaseStyleConfigComponent from './BaseStyleConfigComponent.vue';
import SmartCollapseItem from '../../components/smartCollapse/SmartCollapseItem.vue';
// import componentsConfigMixins from '../../mixins/componentsConfigMixins';
/**
     * 基础折叠面板样式配置
	 */
export default {
  name: 'BaseCollapseStyleComponent',
  components: {
    SmartCollapse,
    BaseStyleConfigComponent,
    SmartCollapseItem,
    // GridItemStyle: () => import('../components/gridItemStyle/GridItemStyle')
  },
  // mixins: [componentsConfigMixins]
};
</script>

<style scoped>

</style>
