<template>
  <div class="rep-loc-wrapper">
    <config-item label="离容器左侧的距离：">
      <el-input-number
        controls-position="right"
        :model-value="Number.parseInt(grid.left)"
        @change="
          (value) => {
            grid.left = `${value}%`;
          }
        "
      />
    </config-item>
    <config-item label="离容器右侧的距离：">
      <el-input-number
        controls-position="right"
        :model-value="Number.parseInt(grid.right)"
        @change="
          (value) => {
            grid.right = `${value}%`;
          }
        "
      />
    </config-item>
    <config-item label="离容器上侧的距离：">
      <el-input-number
        controls-position="right"
        :model-value="Number.parseInt(grid.top)"
        @change="
          (value) => {
            grid.top = `${value}%`;
          }
        "
      />
    </config-item>
    <config-item label="离容器下侧的距离：">
      <el-input-number
        controls-position="right"
        :model-value="Number.parseInt(grid.bottom)"
        @change="
          (value) => {
            grid.bottom = `${value}%`;
          }
        "
      />
    </config-item>
  </div>
</template>

<script>
import { defineComponent, inject, computed } from 'vue';
import { useReportingEditStore } from '@/stores/reporting-edit';
import componentsMap from '../index';

const { ConfigItem } = componentsMap;
export default defineComponent({
  name: 'ReportingItemLocation',
  components: { ConfigItem },
  setup() {
    const store = useReportingEditStore();
    const currConfigItem = computed(() => store.currConfigItem);
    const grid = computed(() => currConfigItem.value.option.grid);

    return { grid };
  },
});
</script>

<style scoped>
.rep-loc-item {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 500;
}

.rep-loc-item > p {
  width: 15%;
  text-align: center;
}
</style>
