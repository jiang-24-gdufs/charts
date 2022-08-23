<template>
  <!-- <base-grid-item v-bind="$props" class="ql-container render-rich-text ql-snow"> -->
  <div v-html="option.content" class="ql-editor"></div>
  <!-- </base-grid-item> -->
</template>

<script>
// import BaseGridItem from '../baseComponents/BaseGridItem';
// import renderComponentMixin from '../../mixins/renderComponentMixin';

export default {
  name: 'RenderNormalText',
  props: {
    option: { type: Object, default: () =>( { }) }
  },
  // mixins: [ renderComponentMixin ],
  components: {
    // BaseGridItem
  }
};
</script>

<style scoped>
.render-rich-text {
  overflow: hidden;
}
</style>
