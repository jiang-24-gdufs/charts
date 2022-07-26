<script lang="ts" setup>
import { computed } from 'vue';
import { ElInput, ElInputNumber, ElSwitch, ElRow, ElCol } from 'element-plus';
import { useReportingEditStore } from '@/stores/reporting-edit';

const store = useReportingEditStore();
const data = computed(() => store.data);
const containerConfig = computed(() => data.value.pageData.containerConfig);
</script>

<template>
  <div class="container-config__base">
    <div>标题:
      <ElInput v-model="data.name" />
    </div>
    <div>
      描述:
      <ElInput v-model="data.description" />
    </div>
    <div>
      <el-row justify="space-between">
        <el-col :span="14">栅栏格数量：</el-col>
        <el-col :span="10">
          <el-input-number controls-position="right" v-model="containerConfig.colNum" label="栅栏格数量：" />
        </el-col>
      </el-row>
    </div>
    <div>
      <el-row justify="space-between">
        <el-col :span="14">栅栏格行高：</el-col>
        <el-col :span="10">
          <el-input-number controls-position="right" v-model="containerConfig.rowHeight" label="栅栏格行高：" />
        </el-col>
      </el-row>
    </div>
    <div>
      <el-row justify="space-between">
        <el-col :span="14">左右边距：</el-col>
        <el-col :span="10">
          <el-input-number controls-position="right" v-model="containerConfig.margin[0]" label="左右边距：" :min="0" />
        </el-col>
      </el-row>
    </div>
    <div>
      <el-row justify="space-between">
        <el-col :span="14">上下边距：</el-col>
        <el-col :span="10">
          <el-input-number controls-position="right" v-model="containerConfig.margin[1]" label="上下边距：" :min="0" />
        </el-col>
      </el-row>
    </div>
    <div>
      <el-row justify="space-between">
        <el-col :span="14">开启紧凑布局：</el-col>
        <el-col :span="10">
          <el-switch v-model="containerConfig.verticalCompact" label="开启紧凑布局：" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style>
</style>
