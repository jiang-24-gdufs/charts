<script setup lang="ts">
import axios from 'axios';
import { environment } from '@/evn.config';
import { useReportingEditStore } from '@/stores/reporting-edit';
import { PostmatesJS } from '@/lib/postmates/postmates-js.js';

PostmatesJS.debug = true;
const model = new PostmatesJS.Model({
  // demoFunction：提供给父页面的方法
  // options: 从父页面传入的参数信息
  demoFunction: (options) => {
    console.log('child3', options);
  },
});

const store = useReportingEditStore();
function save() {
  const reporting = JSON.parse(JSON.stringify(store.data));
  reporting.pageData = JSON.stringify(reporting.pageData);
  axios
    .post(`${environment.VITE_API_BASE_URL}/chartsView/updateChartViewInEdit`, reporting)
    .then((response: any) => {
      console.log('%cReportingEditHeader.vue line:16 response', 'color: #007acc;', response);

      // MESSAGE
      if (window.opener) {
        model.then((childAPI) => {
          console.log('%cReportingEditHeader.vue line:23 reporting', 'color: #007acc;', reporting);
          childAPI.emit('some-event', reporting);
        });
      }
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
