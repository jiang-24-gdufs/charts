<script setup lang="ts">
import { computed, ref } from 'vue';
import GridWrapper from '@/lib/gridLayout/GridWrapper.vue';
import ReportingEditWorkBenchLeft from './ReportingEditWorkBenchLeft.vue';
import ReportingEditWorkBenchRight from './ReportingEditWorkBenchRight.vue';
// import mockLayout from '@/lib/gridLayout/helpers/mock';
import SmartMenu from '@/components/smart-menu/SmartMenu.vue';
import { useReportingEditStore, CONTAINER_CONFIG_INDEX } from '@/stores/reporting-edit';
import useEditMenu from '@/reporting-edit/hooks/use-edit-menu';
import createRandomId from '@/utils/createRandomId';

const store = useReportingEditStore();

const {
  showMenu,
  /* showContainerMenu, */ menuTop,
  menuLeft,
  handleGridItemContextMenu,
  // handleContainerMenu,
  handleCloseMenu,
} = useEditMenu();
const { log } = console;

const layout = computed(() => store.layoutItem || []);
const currThemeName = computed(() => store.currThemeName);
const containerConfig = computed(() => store.containerConfig);

const gridWrapperRef = ref();
const debugConsole = ref(true);
const colNum = computed(() => containerConfig.value.colNum);
const rowHeight = computed(() => containerConfig.value.rowHeight);
const margin = computed(() => containerConfig.value.margin);
const verticalCompact = computed(() => containerConfig.value.verticalCompact);
let index: string = '';

/* vue-grid-wrapper & vue-grid-item */
function getDatasetByTarget(target: HTMLElement) {
  // 从目标元素上遍历祖先元素直到匹配.vue-grid-item
  // 然后返回这个item的自定义属性
  let x = target;
  while (!x.classList.contains('vue-grid-item')) {
    // result.push(x);
    x = x.parentNode as HTMLElement;
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
  if (!target) return 'TODO';
}
function onContextmenuGrid(event: MouseEvent) {
  const { target } = event;
  if (!target) return;

  const { gridIndex } = getDatasetByTarget(target as HTMLElement);
  index = gridIndex || '';
  handleGridItemContextMenu(event);
}

function onDblclick(event: MouseEvent) {
  log(event);
  const { target } = event;
  if (target) {
    const { classList } = target as HTMLInputElement;
    if (classList.contains('vue-grid-layout')) {
      onDblclickLayout(event);
    } else/*  if (classList.contains('vue-grid-item')) */ {
      onDblclickGrid(event);
    }
  }
}
function onDblclickLayout(event: MouseEvent) {
  // TODO: config
  const { target } = event;
  if (!target) return 'TODO';
  // 设置配置类型
  store.setCurrConfigItemId(CONTAINER_CONFIG_INDEX)
}
function onDblclickGrid(event: MouseEvent) {
  const { target } = event;
  if (!target) return;
  const { gridIndex } = getDatasetByTarget(target as HTMLElement);
  // record grid index
  index = gridIndex || '';
  // 设置配置类型
  store.setCurrConfigItemId(index)
}

function onClick(event: MouseEvent) {
  log(event);
}

/* --- 右键菜单 --- */
function handleSelectWidget(grid: any) {
  layout.value.push({
    ...grid,
    x: grid ? grid.x : 0, // x坐标
    y: grid ? grid.y + 1 : 0, // y坐标
    // chartsType: chartsTypeEnum.REPORTING.status, // 图表类型 报告/大屏
    chartsType: 0, // 图表类型 报告/大屏
    i: createRandomId(),
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
  handleCloseMenu();
  const itemIndex = layout.value.findIndex((item) => String(item.i) === index);
  if (itemIndex > -1) {
    layout.value.splice(itemIndex, 1);
  }
}
function handleMenuConfigContainer() {
  handleCloseMenu();

  // 设置配置类型
  store.setCurrConfigItemId(CONTAINER_CONFIG_INDEX)
}

function handleVerticalCompactLayout() {
  handleCloseMenu();

  gridWrapperRef.value.campactLayout();
}
/*  */
</script>

<template>
  <div class="workbench-body">
    <div class="workbench-left">
      <ReportingEditWorkBenchLeft />
    </div>
    <div class="workbench-center">
      <GridWrapper ref="gridWrapperRef" :layout="layout" :col-num="colNum" :margin="margin" :row-height="rowHeight"
        :theme-name="currThemeName" :debug-console="debugConsole" :vertical-compact="verticalCompact"
        @contextmenu.prevent="onContextmenu" @dblclick="onDblclick" @click="onClick" />
      <!--组件上下文菜单栏-->
      <smart-menu v-show="showMenu" :top="menuTop" :left="menuLeft">
        <!-- @click="handleMenuConfig"
        @click="handleContainerConfig" @click="handleVerticalCompactLayout" -->
        <div><i class="fa fa-cog"></i>配置组件</div>
        <div @click="handleMenuCopy"><i class="fa fa-copy"></i>复制组件</div>
        <div @click="handleMenuDelete"><i class="fa fa-trash"></i>删除组件</div>
        <div @click="handleMenuConfigContainer"><i class="fa fa-gear"></i>容器配置</div>
        <!-- v-show="!reporting.pageData.containerConfig.verticalCompact" -->
        <div @click="handleVerticalCompactLayout"><i class="fa fa-gear"></i>紧凑布局</div>
      </smart-menu>
    </div>
    <div class="workbench-right" style="width: 250px">配置区域
      <ReportingEditWorkBenchRight />
    </div>
  </div>
</template>

<style scoped>
.workbench-body {
  display: flex;
  min-height: 0;
  position: relative;
  height: 100%;
}

.workbench-right, .workbench-center {
  border: 0.5px dashed black;
  /* margin: 40px; */
}

.workbench-center {
  /* display: flex; */
  flex: 1;
  /* height: 877px; */
}
</style>
