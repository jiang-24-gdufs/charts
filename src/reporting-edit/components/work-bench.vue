<script setup lang="ts">
import { ref } from 'vue';
import GridWrapper from '../../lib/gridLayout/GridWrapper.vue';
import mockLayout from '@/lib/gridLayout/helpers/mock';

const layout = ref(mockLayout);
const colNum = ref(48);
const rowHeight = ref(15);
</script>

<template>
  <div class="workbench-body">
    <div class="workbench-left">left</div>
    <div class="workbench-center">
      <GridWrapper :layout="layout" :col-num="colNum" :row-height="rowHeight" />
    </div>
    <div class="workbench-right">right</div>
  </div>
</template>

<style scoped>
.workbench-body {
  display: flex;
  min-height: 0;
  position: relative;
}

[class^='workbench-'] {
  border: 1px solid black;
  /* margin: 40px; */
}

.workbench-center {
  /* display: flex; */
  flex: 1;
  height: 877px;
}
</style>
