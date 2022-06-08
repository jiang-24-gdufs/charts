import { computed } from 'vue';
import { useReportingEditStore } from '@/stores/reporting-edit';
import type { LayoutItem } from '@/utils';
import { deepCopy } from '@/utils';

const store = useReportingEditStore();

const layout = computed(() => store.layoutItem);

/**
 * 添加新的布局组件
 */
export function addItem(item: LayoutItem) {
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
    ...item,
    i: Date.now(),
    initOption: {
      width: 350,
      height: 350,
    },
  });
  // store.setLayoutItem(deepCopy(layout.value));
}
