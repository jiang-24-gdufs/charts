<script setup lang="ts">
// import { computed, ref } from 'vue';
// import GridWrapper from '@/lib/gridLayout/GridWrapper.vue';
// import mockLayout from '@/lib/gridLayout/helpers/mock';
// import { environment } from '@/evn.config';
// import type { reportingState } from '@/stores/reporting-edit';
import { computed } from 'vue';
import { useReportingEditStore } from '@/stores/reporting-edit';
import dataComponents from '../../componentsData';

console.log('%cWorkBenchLeft.vue line:9 dataComponents', 'color: #007acc;', dataComponents);
const { charts } = dataComponents;

const store = useReportingEditStore();

// const layout = ref(mockLayout);
const layout = computed(() => store.layoutItem);
// const colNum = ref(48);
// const rowHeight = ref(15);

/**
 * 添加新的布局组件
 */
function handleSelectWidget(data: any) {
  // TODO: 增加网格&渲染&更新store
  // 添加拖拽
  const grid = layout.value[layout.value.length - 1];
  // const { width } = grid.initOption;
  // const { height } = grid.initOption;
  layout.value.push({
    x: grid ? grid.x : 0, // x坐标
    y: grid ? grid.y + 1 : 0, // y坐标
    w: 15, // 宽
    h: 15, // 高
    // chartsType: chartsTypeEnum.REPORTING.status, // 图表类型 报告/大屏
    chartsType: 0, // 图表类型 报告/大屏
    ...data,
    i: Date.now(),
    initOption: {
      width: 350,
      height: 350,
    },
  });
}
</script>

<template>
  <div class="workbench-left">
    <div class="workbench-left">
      <ul>
        <li v-for="chartDir of charts.components" :key="chartDir.title">
          {{ chartDir.title }}
          <ul v-if="chartDir.components">
            <li
              v-for="chart of chartDir.components"
              :key="chart.title"
              @click="handleSelectWidget(chart.data)"
            >
              {{ chart.data.title }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
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
