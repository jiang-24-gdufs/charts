<template>
  <div v-show="showTabsItem">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'SmartsTabsItem',
  props: {
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      showTabsItem: false,
    };
  },
};
</script>

<style scoped></style>
