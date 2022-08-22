<template>
  <div>
    <config-item :label="label">
      <el-radio-group v-model="verticalAlign" size="small">
        <el-radio-button label="auto">
          <el-tooltip effect="dark" content="自动" placement="bottom">
            <i class="fa fa-align-justify"></i>
          </el-tooltip>
        </el-radio-button>
        <el-radio-button label="top">
          <el-tooltip effect="dark" content="上" placement="bottom">
            <i class="fa fa-align-left"></i>
          </el-tooltip>
        </el-radio-button>
        <el-radio-button label="middle">
          <el-tooltip effect="dark" content="中间" placement="bottom">
            <i class="fa fa-align-center"></i>
          </el-tooltip>
        </el-radio-button>
        <el-radio-button label="bottom">
          <el-tooltip effect="dark" content="底部" placement="bottom">
            <i class="fa fa-align-right"></i>
          </el-tooltip>
        </el-radio-button>
      </el-radio-group>
    </config-item>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import componentsMap from '../index';

const { ConfigItem } = componentsMap;

export default defineComponent({
  name: 'VerticalAlign',
  components: { ConfigItem },
  props: {
    modelValue: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      verticalAlign: this.modelValue,
    };
  },
  watch: {
    modelValue(value) {
      this.verticalAlign = value;
    },
    verticalAlign(value) {
      this.$emit('update:modelValue', value);
    },
  },
});
</script>

<style scoped></style>
