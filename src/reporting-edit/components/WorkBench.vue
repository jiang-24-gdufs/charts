<script setup lang="ts">
import { computed, ref } from 'vue';
import GridWrapper from '@/lib/gridLayout/GridWrapper.vue';
import WorkBenchLeft from './WorkBenchLeft.vue';
import WorkBenchRight from './WorkBenchRight.vue';
// import mockLayout from '@/lib/gridLayout/helpers/mock';
// import { environment } from '@/evn.config';
// import type { reportingState } from '@/stores/reporting-edit';
import SmartMenu from '@/components/smart-menu/SmartMenu.vue';
import { useReportingEditStore } from '@/stores/reporting-edit';
import useEditMenu from '../hooks/use-edit-menu';
// import { addItem } from '@/reporting-edit/hooks/use-change-layout';
// import { deepCopy } from '@/utils';

const store = useReportingEditStore();
console.log(store);
const {
  showMenu,
  /* showContainerMenu, */ menuTop,
  menuLeft,
  handleGridItemContextMenu,
  // handleContainerMenu,
  handleCloseMenu,
} = useEditMenu();
const { log } = console;

// const layout = ref(mockLayout);
const layout = computed(() => store.layoutItem || []);
const currBgcolor = computed(() => store.currBgcolor || 'none');
const containerConfig = computed(() => store.containerConfig);
const gridWrapperRef = ref();
const colNum = computed(() => containerConfig.value.colNum);
const rowHeight = computed(() => containerConfig.value.rowHeight);
const margin = computed(() => containerConfig.value.margin);
let index: number = 0;

/* vue-grid-wrapper & vue-grid-item */
function getDatasetByTarget(target: HTMLElement) {
  // 从目标元素上遍历祖先元素直到匹配.vue-grid-item
  // 然后返回这个item的自定义属性
  let x = target;
  while (!x.classList.contains('vue-grid-item')) {
    // result.push(x);
    x = x.parentNode;
  }

  return x.dataset;
}

function onContextmenu(event: MouseEvent) {
  log(event);
  const { target } = event;
  if (target) {
    const { classList } = target as HTMLInputElement;
    if (classList.contains('vue-grid-layout')) {
      onContextmenuLayout(event);
    } /* if (classList.contains('vue-grid-item')) */ else {
      onContextmenuGrid(event);
    }
  }
}
function onContextmenuLayout(event: MouseEvent) {
  const { target } = event;
  if (!target) return;
}
function onContextmenuGrid(event: MouseEvent) {
  // TODO: 通过挂载i到元素上进行匹配
  const { target } = event;
  if (!target) return;

  const { gridIndex } = getDatasetByTarget(target as HTMLElement);
  index = Number(gridIndex);
  handleGridItemContextMenu(event);
}

function onDblclick(event: MouseEvent) {
  log(event);
  const { target } = event;
  if (target) {
    const { classList } = target as HTMLInputElement;
    if (classList.contains('vue-grid-layout')) {
      onDblclickLayout(event);
    } else if (classList.contains('vue-grid-item')) {
      onDblclickGrid(event);
    }
  }
}
function onDblclickLayout(event: MouseEvent) {
  const { target } = event;
  if (!target) return;
}
function onDblclickGrid(event: MouseEvent) {
  // TODO: 通过挂载i到元素上进行匹配
  const { target } = event;
  if (!target) return;
  const { gridIndex } = getDatasetByTarget(target as HTMLElement);
  // record grid index
  index = Number(gridIndex);
}

function onClick(event: MouseEvent) {
  log(event);
}

/* --- 右键菜单 --- */
/**
 * 添加新的布局组件
 */
function handleSelectWidget(grid: any) {
  layout.value.push({
    ...grid,
    x: grid ? grid.x : 0, // x坐标
    y: grid ? grid.y + 1 : 0, // y坐标
    // chartsType: chartsTypeEnum.REPORTING.status, // 图表类型 报告/大屏
    chartsType: 0, // 图表类型 报告/大屏
    i: Date.now(),
  });
}
function handleMenuCopy() {
  handleCloseMenu();
  const item = layout.value.find((item) => item.i === index);
  if (item) {
    handleSelectWidget(item);
  }
}
function handleMenuDelete() {
  debugger;
  handleCloseMenu();
  const itemIndex = layout.value.findIndex((item) => item.i === index);
  if (itemIndex > -1) {
    layout.value.splice(itemIndex, 1);
  }
}

function handleVerticalCompactLayout() {
  handleCloseMenu();

  gridWrapperRef.value.campactLayout();
}
/*  */
</script>

<template>
  <div class="workbench-body">
    <div class="workbench-left">图表类型区域<WorkBenchLeft /></div>
    <div class="workbench-center">
      <GridWrapper
        v-if="layout.length > 0"
        ref="gridWrapperRef"
        :style="{
          'background-color': currBgcolor,
        }"
        :layout="layout"
        :col-num="colNum"
        :margin="margin"
        :row-height="rowHeight"
        @contextmenu.prevent="onContextmenu"
        @dblclick="onDblclick"
        @click="onClick"
      />
      <!--组件上下文菜单栏-->
      <smart-menu v-show="showMenu" :top="menuTop" :left="menuLeft">
        <!-- @click="handleMenuConfig"
        @click="handleContainerConfig" @click="handleVerticalCompactLayout" -->
        <div><i class="fa fa-cog"></i>配置组件</div>
        <div @click="handleMenuCopy"><i class="fa fa-copy"></i>复制组件</div>
        <div @click="handleMenuDelete"><i class="fa fa-trash"></i>删除组件</div>
        <div><i class="fa fa-gear"></i>容器配置</div>
        <!-- v-show="!reporting.pageData.containerConfig.verticalCompact" -->
        <div @click="handleVerticalCompactLayout"><i class="fa fa-gear"></i>紧凑布局</div>
      </smart-menu>
    </div>
    <div class="workbench-right" style="width: 200px">配置区域<WorkBenchRight /></div>
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
