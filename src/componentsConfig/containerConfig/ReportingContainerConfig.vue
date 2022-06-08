<script lang="ts" setup>
import { computed } from 'vue';
import { ElInput, ElInputNumber, ElSwitch } from 'element-plus';
import { useReportingEditStore } from '@/stores/reporting-edit';

const store = useReportingEditStore();
const data = computed(() => store.data);
const containerConfig = computed(() => data.value.pageData.containerConfig);
// const containerConfig = computed(() => store.containerConfig);
</script>
<template>
  标题: <ElInput v-model="data.name" /> 描述: <ElInput v-model="data.description" />
  <el-input-number v-model="containerConfig.colNum" label="栅栏格数量：" />
  <el-input-number v-model="containerConfig.rowHeight" label="栅栏格行高：" />
  <el-input-number v-model="containerConfig.margin[0]" label="左右边距：" :min="0" />
  <el-input-number v-model="containerConfig.margin[1]" label="上下边距：" :min="0" />
  <el-switch v-model="containerConfig.verticalCompact" label="开启紧凑布局：" />
  <el-switch v-model="containerConfig.isMirrored" label="布局反转：" />
  <el-switch v-model="containerConfig.isDraggable" label="是否拖拽：" />
  <ElInputNumber />
</template>

<style></style>
