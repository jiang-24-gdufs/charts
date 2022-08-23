<script lang="ts" setup>
import { computed } from 'vue';
import { ElInput, ElInputNumber, ElSwitch, ElRow, ElCol } from 'element-plus';
import { useReportingEditStore } from '@/stores/reporting-edit';
import SmartCollapse from '@/components/smartCollapse/SmartCollapse.vue';
import SmartCollapseItem from '@/components/smartCollapse/SmartCollapseItem.vue';
import componentsMap from '../components';

const { ConfigItem } = componentsMap;
const store = useReportingEditStore();
const data = computed(() => store.data);
const containerConfig = computed(() => store.containerConfig);
</script>

<template>
  <div class="container-config__base">
    <smart-collapse>
      <smart-collapse-item title="报告详情" icon="el-icon-monitor" :async="false">
        <ConfigItem label="标题：">
          <ElInput v-model="data.name" />
        </ConfigItem>
        <ConfigItem label="描述：">
          <ElInput v-model="data.description" />
        </ConfigItem>
      </smart-collapse-item>
      <smart-collapse-item title="容器配置" icon="el-icon-monitor" :async="false">
        <ConfigItem label="栅栏格数量：">
          <el-input-number v-model="containerConfig.colNum" controls-position="right" />
        </ConfigItem>
        <ConfigItem label="栅栏格行高：">
          <el-input-number v-model="containerConfig.rowHeight" controls-position="right" />
        </ConfigItem>
        <ConfigItem label="左右边距：">
          <el-input-number v-model="containerConfig.margin[0]" controls-position="right" />
        </ConfigItem>
        <ConfigItem label="上下边距：">
          <el-input-number v-model="containerConfig.margin[1]" controls-position="right" />
        </ConfigItem>
        <ConfigItem label="开启紧凑布局：">
          <el-switch v-model="containerConfig.verticalCompact" label="开启紧凑布局：" />
        </ConfigItem>
      </smart-collapse-item>
    </smart-collapse>
  </div>
</template>

<style></style>
