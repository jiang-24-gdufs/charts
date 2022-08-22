<template>
  <div>
    <config-item :label="label">
      <el-radio-group v-model="horizontalAlign" size="small">
        <el-radio-button label="auto">
          <el-tooltip effect="dark" content="自动" placement="bottom">
            <i class="fa fa-align-justify"></i>
          </el-tooltip>
        </el-radio-button>
        <el-radio-button label="left">
          <el-tooltip effect="dark" content="左边" placement="bottom">
            <i class="fa fa-align-left"></i>
          </el-tooltip>
        </el-radio-button>
        <el-radio-button label="center">
          <el-tooltip effect="dark" content="中间" placement="bottom">
            <i class="fa fa-align-center"></i>
          </el-tooltip>
        </el-radio-button>
        <el-radio-button label="right">
          <el-tooltip effect="dark" content="右边" placement="bottom">
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
  name: 'HorizontalAlign',
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
      horizontalAlign: this.modelValue,
    };
  },
  watch: {
    modelValue(value) {
      this.horizontalAlign = value;
    },
    horizontalAlign(value) {
      this.$emit('update:modelValue', value);
    },
  },
});
</script>

<style scoped></style>
