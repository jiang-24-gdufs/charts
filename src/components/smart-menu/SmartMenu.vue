<template>
  <div
    class="smart-menu"
    :style="{ top: `${top}px`, left: `${left}px` }"
    @click.prevent.stop="showMenu = false"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SmartMenu',
  props: {
    top: {
      type: Number,
      required: false,
      default: 0,
    },
    left: {
      type: Number,
      required: false,
      default: 0,
    },
  },
};
</script>

<style scoped>
.smart-menu {
  position: fixed;
  z-index: 1100;
  width: 180px;
  border: 1px solid #808695;
  background-color: white;
  box-shadow: 3px 4px 2px rgba(54, 61, 63, 0.5);
}

.smart-menu > div {
  height: 28px;
  line-height: 28px;
  font-size: 12px;
  padding: 0 20px;
  cursor: pointer;
}

.smart-menu > div > i {
  width: 20px;
  text-align: center;
}

.smart-menu > div:hover {
  background-color: #e0e0e0;
}
</style>
