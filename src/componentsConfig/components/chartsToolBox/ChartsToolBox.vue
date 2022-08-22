<template>
  <div v-show="toolbox.show" class="charts-toolbox">
    <config-item label="布局朝向：">
      <el-radio-group v-model="toolbox.orient" size="small">
        <el-radio-button label="horizontal">水平</el-radio-button>
        <el-radio-button label="vertical">垂直</el-radio-button>
      </el-radio-group>
    </config-item>

    <config-item label="图标大小：">
      <el-input-number
        v-model="toolbox.itemSize"
        controls-position="right"
        size="small"
        control-position="right"
        label="图标大小："
      />
    </config-item>
    <config-item label="图标间隔：">
      <el-input-number
        v-model="toolbox.itemGap"
        controls-position="right"
        size="small"
        control-position="right"
        label="图标间隔："
      />
    </config-item>
    <config-item label="数据视图：">
      <el-switch v-model="feature.dataView.show" label="数据视图：" />
    </config-item>
    <config-item label="数据只读：">
      <el-switch
        v-show="feature.dataView.show"
        v-model="feature.dataView.readOnly"
        label="数据只读："
      />
    </config-item>
    <config-item label="重置数据：">
      <el-switch v-model="feature.restore.show" label="重置数据：" />
    </config-item>
    <config-item label="切换类型：">
      <el-switch v-model="feature.magicType.show" label="切换类型：" />
    </config-item>
    <config-item label="保存图片：">
      <el-switch v-model="feature.saveAsImage.show" label="保存图片：" />
    </config-item>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import componentsMap from '../index';

const { ConfigItem } = componentsMap;

export default defineComponent({
  name: 'ChartsToolBox',
  components: {
    ConfigItem,
  },
  props: {
    toolbox: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const feature = computed(() => props.toolbox.feature);

    return { feature };
  },
});
</script>

<style scoped>
.charts-toolbox {
  font-size: 13px;
  margin: 10px 0;
}
</style>
