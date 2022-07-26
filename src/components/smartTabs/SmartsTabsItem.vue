<template>
    <div v-show="showTabsItem">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'SmartsTabsItem',
  data() {
    return {
      showTabsItem: false
    };
  },
  props: {
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false,
      default: ''
    }
  }
};
</script>

<style scoped>
</style>
