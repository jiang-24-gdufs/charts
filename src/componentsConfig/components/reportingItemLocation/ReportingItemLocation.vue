<template>
    <div class="rep-loc-wrapper">
        <!-- <el-row :gutter="10" style="padding-top: 5px;">
            <el-col :span="12" class="rep-loc-item">
                <p>高:</p>
                <el-input style="width:80%;" :model-value="initOption.height" controls-position="right" size="small" disabled></el-input>
            </el-col>
            <el-col :span="12" class="rep-loc-item">
                <p>宽:</p>
                <el-input style="width:80%;" :model-value="initOption.width" controls-position="right"  size="small" disabled></el-input>
            </el-col>
        </el-row> -->
        <el-row :gutter="10" style="margin-top: 10px;">
            <el-col :span="12" class="rep-loc-item">
                <p>x:</p>
                <el-input style="width:80%;" :model-value="renderData.x" controls-position="right" size="small" disabled></el-input>
            </el-col>
            <el-col :span="12" class="rep-loc-item">
                <p>y:</p>
                <el-input style="width:80%;" :model-value="renderData.y" controls-position="right" size="small" disabled></el-input>
            </el-col>
        </el-row>
        <el-row :gutter="10" style="margin-top: 10px;">
            <el-col :span="12" class="rep-loc-item">
                <p>h:</p>
                <el-input style="width:80%;" :model-value="renderData.h" controls-position="right" size="small" disabled></el-input>
            </el-col>
            <el-col :span="12" class="rep-loc-item">
                <p>w:</p>
                <el-input style="width:80%;" :model-value="renderData.w" size="small" disabled></el-input>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { defineComponent, inject, computed} from 'vue';
import { useReportingEditStore } from '@/stores/reporting-edit';

export default defineComponent({
  name: 'ReportingItemLocation',
  setup() {
    const store = useReportingEditStore();
    const currConfigItem = computed(() => store.currConfigItem);
    const {x,y,w,h} = currConfigItem.value;
    const renderData = {x,y,w,h}

    return {renderData}
  }
  // props: {
  //   renderData: {
  //     type: Object,
  //     required: true
  //   }
  // },
  // computed: {
  //   initOption() {
  //     console.log('%cReportingItemLocation.vue line:47 ww', 'color: #007acc;');
  //     return {}
  //     // return this.renderData.initOption;
  //   }
  // }
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
