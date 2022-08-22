<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  theme: {
    type: Object,
    required: true,
  },
});
const { theme, themeName } = props.theme;
const { backgroundColor } = theme;
const colors = computed(() => theme.color.slice(0, 7));
</script>
<template>
  <a class="theme-plan-group" :title="themeName" :style="{ 'background-color': backgroundColor }">
    <div
      v-for="color of colors"
      :key="color"
      class="theme-plan-color"
      :style="{ 'background-color': color }"
    ></div>
  </a>
</template>

<style scoped>
.theme-plan-group {
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: auto;
  /* height: 32px; */
  overflow: hidden;
  border: 1px solid #eee;
  padding: 5px;
  border-radius: 4px;
  /* margin-bottom: 8px; */
}

.theme-plan-color {
  width: 20px;
  height: 20px;
  /* margin-bottom: 10px; */
  margin-left: 2px;
  margin-right: 2px;
  display: inline-block;
  border-radius: 4px;
}
</style>
