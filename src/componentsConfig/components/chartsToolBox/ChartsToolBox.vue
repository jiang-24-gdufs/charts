<template>
  <div v-show="toolbox.show" class="charts-toolbox">
    <config-item label="布局朝向：">
      <el-radio-group size="small" v-model="toolbox.orient">
        <el-radio-button label="horizontal">水平</el-radio-button>
        <el-radio-button label="vertical">垂直</el-radio-button>
      </el-radio-group>
    </config-item>

    <config-item label="图标大小：">
      <el-input-number controls-position="right" size="small" control-position="right" label="图标大小："
        v-model="toolbox.itemSize">
      </el-input-number>

    </config-item>
    <config-item label="图标间隔：">
      <el-input-number controls-position="right" size="small" control-position="right" label="图标间隔："
        v-model="toolbox.itemGap">
      </el-input-number>

    </config-item>
    <config-item label="数据视图：">
      <el-switch label="数据视图：" v-model="feature.dataView.show"></el-switch>

    </config-item>
    <config-item label="数据只读：">
      <el-switch label="数据只读：" v-model="feature.dataView.readOnly" v-show="feature.dataView.show"></el-switch>
    </config-item>
    <config-item label="重置数据：">
      <el-switch label="重置数据：" v-model="feature.restore.show"></el-switch>

    </config-item>
    <config-item label="切换类型：">
      <el-switch label="切换类型：" v-model="feature.magicType.show"></el-switch>
    </config-item>
    <config-item label="保存图片：">
      <el-switch label="保存图片：" v-model="feature.saveAsImage.show"></el-switch>

    </config-item>

  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import componentsMap from '../index'

const { ConfigItem } = componentsMap;

export default defineComponent({
  name: 'ChartsToolBox',
  components: {
    ConfigItem
  },
  setup(props) {
    const feature = computed(() => props.toolbox.feature);

    return { feature }
  },
  props: {
    toolbox: {
      type: Object,
      required: true
    }
  }
});
</script>

<style scoped>
.charts-toolbox {
  font-size: 13px;
  margin: 10px 0;
}
</style>
