<script setup lang="ts">
// import { computed, ref } from 'vue';
import { computed, ref } from 'vue';
import { useReportingEditStore } from '@/stores/reporting-edit';
import dataComponents from '@/componentsData';
import createRandomId from '@/utils/createRandomId';
// import { ElMenu, ElSubMenu, ElMenuItemGroup } from 'element-plus';
// import {Location} from '@element-plus/icons-vue';
import ChartBar from '@/assets/chart-icon/chart-bar.svg'
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
  <div class="workbench-left">
    <div class="workbench-left">
      <!-- <ul>
        <li v-for="chartDir of charts.components" :key="chartDir.title">
          {{ chartDir.title }}
          <ul v-if="chartDir.components">
            <li v-for="chart of chartDir.components" :key="chart.title" @click="handleSelectWidget(chart.data)">
              {{ chart.data.title }}
            </li>
          </ul>
        </li>
      </ul> -->

      <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
        <el-sub-menu :index="`${dirIndex}`" v-for="(chartDir, dirIndex) of charts.components" :key="chartDir.title">
          <template #title>
            <p><img class="icon" :src="chartDir.icon" :alt="chartDir.title" :title="chartDir.title"></p>
            <span> {{ chartDir.title }} </span>
          </template>
          <template v-if="chartDir.components">
            <el-menu-item :index="`${dirIndex}-${chartIndex}`" v-for="(chart, chartIndex) of chartDir.components"
              :key="chart.title" @click="handleSelectWidget(chart.data)">{{ chart.data.title }}</el-menu-item>
          </template>

        </el-sub-menu>

      </el-menu>
    </div>
  </div>
</template>

<style scoped>
/* ul {
  padding-left: 24px;
} */
.icon {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
</style>
