<script setup lang="ts">
import axios from 'axios';
import { environment } from '@/evn.config';
import { useReportingEditStore } from '@/stores/reporting-edit';
// import { useReportingEditThemeStore } from '@/stores/reporting-edit-theme';

const store = useReportingEditStore();
// const themeStore = useReportingEditThemeStore();
function save() {
  const reporting = JSON.parse(JSON.stringify(store.data));

  // SET THEME
  // reporting.pageData.globalStyle.theme = themeStore.currThemeName;

  reporting.pageData = JSON.stringify(reporting.pageData);
  axios
    .post(`${environment.VITE_API_BASE_URL}/chartsView/updateChartViewInEdit`, reporting)
    .then((response: any) => {
      console.log('%cReportingEditHeader.vue line:16 response', 'color: #007acc;', response);
    });
}
</script>

<template>
  <header>header <button @click="save">ss</button></header>
</template>

<style scoped>
header {
  height: 60px;
  background-color: #363d3f;
}
</style>
