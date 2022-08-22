<script setup lang="ts">
// import { computed, ref } from 'vue';
import { computed, ref } from 'vue';
import { useReportingEditStore } from '@/stores/reporting-edit';
import dataComponents from '@/componentsData';
import createRandomId from '@/utils/createRandomId';
// import { ElMenu, ElSubMenu, ElMenuItemGroup } from 'element-plus';
// import {Location} from '@element-plus/icons-vue';
import ChartBar from '@/assets/chart-icon/chart-bar.svg';

console.log('%cReportingEditWorkBenchLeft.vue line:10 ChartBar', 'color: #007acc;', ChartBar);

const { charts } = dataComponents;

const store = useReportingEditStore();
const layout = computed(() => store.layoutItem);
const isCollapse = ref(false);

/**
 * 添加新的布局组件
 */
function handleSelectWidget(data: any) {
  const grid = layout.value[layout.value.length - 1];
  layout.value.push({
    x: grid ? grid.x : 0, // x坐标
    y: grid ? grid.y + 1 : 0, // y坐标
    w: 15, // 宽
    h: 15, // 高
    // chartsType: chartsTypeEnum.REPORTING.status, // 图表类型 报告/大屏
    chartsType: 0, // 图表类型 报告/大屏
    ...data,
    i: createRandomId(),
  });
}
</script>

<template>
  <div class="charts-menu">
    <el-menu class="vertical-menu" :collapse="isCollapse">
      <el-sub-menu
        v-for="(chartDir, dirIndex) of charts.components"
        :key="chartDir.title"
        :index="`${dirIndex}`"
      >
        <template #title>
          <p>
            <img class="icon" :src="chartDir.icon" :alt="chartDir.title" :title="chartDir.title" />
          </p>
          <span> {{ chartDir.title }} </span>
        </template>
        <template v-if="chartDir.components">
          <el-menu-item
            v-for="(chart, chartIndex) of chartDir.components"
            :key="chart.title"
            :index="`${dirIndex}-${chartIndex}`"
            @click="handleSelectWidget(chart.data)"
            >{{ chart.data.title }}</el-menu-item
          >
        </template>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
@use '@/style/mixins/mixins' as *;

.charts-menu {
  height: 100%;
}

.icon {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

.vertical-menu {
  height: 100%;
  width: 160px;
  overflow: auto;

  @include scroll-bar;

  :deep(.el-menu-item) {
    min-width: auto;
  }
}
</style>
