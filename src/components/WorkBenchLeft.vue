<script lang="ts" setup>
import { ref, onMounted } from 'vue';

import { environment } from '@/evn.config';

const reportingList = ref<any[]>([]);

const emits = defineEmits(['select'])
const smartchartsUrl = `${environment.VITE_REPORTING_EDIT_URL}?reportingId=`;

//
const edit = (rid: string) => {
  debugger;
  opener = window.open(`${smartchartsUrl}${rid}`);
}

// 获取图表列表
function getChartViewList() {
  fetch(
    `${environment.VITE_API_BASE_URL}/chartsView/getFolderAndViewByFolderId?folderId=-1&type=0`
  ).then((response: Response) => {
    if (response.status === 200) {
      response.json().then((res) => {
        if (res.status === 0) {
          reportingList.value = res.data.viewList;
        }
      });
    } else {
    }
  });
}

const select = (reporting) => {
  console.log('%cWorkBenchLeft.vue line:24 reporting', 'color: #007acc;', reporting);
  emits('select', reporting)
}
const showDialog = (reporting) => {
  console.log('%cWorkBenchLeft.vue line:24 reporting', 'color: #007acc;', reporting);
}

const editReporting = (reporting) => {
  debugger;
  edit(reporting.rid)
}

onMounted(() => {
  getChartViewList();
});
</script>

<template>
  <div>

    <p v-for="r of reportingList" :key="r.rid" class="reporting" @click="select(r)">
      <el-dropdown trigger="contextmenu">
        <span class="el-dropdown-link">
          {{ r.name }}
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item><span @click="editReporting(r)">编辑报告</span></el-dropdown-item>
            <el-dropdown-item><span @click="editReporting(r)">预览</span></el-dropdown-item>
            <el-dropdown-item><span @click="editReporting(r)">重命名</span></el-dropdown-item>
            <el-dropdown-item><span @click="editReporting(r)">删除</span></el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </p>
  </div>

</template>

<style>
.reporting {
  cursor: pointer;
}

.reporting:hover {
  color: var(--primary-color);
}
</style>
