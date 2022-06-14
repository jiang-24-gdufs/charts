<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const reportingList = ref<any[]>([]);

function getChartViewList() {
  fetch(
    'http://www.southsmart.com/smartwebservice/charts/chartsView/getFolderAndViewByFolderId?folderId=-1&type=0'
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

onMounted(() => {
  getChartViewList();
});
</script>

<template>
  <p v-for="r of reportingList" :key="r.rid">{{ r.name }}</p>
</template>

<style></style>
