<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { cloneDeep } from 'lodash';
import { ElMessage } from 'element-plus';
import GridWrapper from '@/lib/gridLayout/GridWrapper.vue';
import { PostmatesJS } from '@/lib/postmates/postmates-js.js';
import { environment } from '@/evn.config';
import type { reportingState } from '@/stores/reporting-edit';
import { useReportingEditStore } from '@/stores/reporting-edit';
import WorkBenchLeft from './WorkBenchLeft.vue';

const store = useReportingEditStore();

const layout = computed(() => store.layoutItem || []);
const currThemeName = computed(() => store.currThemeName);
const containerConfig = computed(() => store.containerConfig);

const colNum = computed(() => containerConfig.value.colNum);
const rowHeight = computed(() => containerConfig.value.rowHeight);
const margin = computed(() => containerConfig.value.margin);

// const rid = location.search.slice(1);

// use for both http and postmates
function updateChartView(reporting) {
  if (!reporting.pageData) {
    return ElMessage.warning('识别错误');
  }
  reporting.pageData = JSON.parse(reporting.pageData);
  store.set(reporting as reportingState);
}

onMounted(() => {
  // getChartViewByRid(rid);
});

let opener;
let handshake;

const smartchartsUrl = `${environment.VITE_REPORTING_EDIT_URL}?${environment.VITE_SEARCH_PREFIX}=c3352578-67a0-4723-9480-03e92da564f7`;

const onSelect = (reporting) => {
  if (store.data.rid === reporting.rid) {
    console.log('%cWorkBench.vue line:43 same', 'color: #007acc;', reporting.rid);
    return;
  }
  updateChartView(cloneDeep(reporting));
};

//
// const edit = () => {
//   opener = window.open(smartchartsUrl);

//   opener.onload = console.error; // not effect cuz cross domain
//   handshake = new PostmatesJS([
//     {
//       container: opener, // document.getElementById("cid2"), // third way, open a new page with `window.open`
//       url: smartchartsUrl,
//       name: 'smartcharts',
//     },
//   ]);

//   // When parent <-> child handshake is complete, data may be requested from the child
//   handshake.then((parentAPIs) => {
//     parentAPIs.forEach((parentAPI) => {
//       parentAPI.on('some-event', (reporting) => {
//         // NOTE: DEBUGGER
//         console.log('%cWorkBench.vue line:88 reporting', 'color: #007acc;', reporting);
//         updateChartView(reporting);
//       }); // Logs "Hello, World!"
//       parentAPI.call('demoFunction', { options: 'Hello, PostmatesJS!' });
//     });
//   });
// };
</script>

<template>
  <div class="workbench-body">
    <div class="workbench-left">
      <WorkBenchLeft @select="onSelect" />
      <!-- <button @click="edit">edit</button> -->
    </div>
    <div class="workbench-center">
      <GridWrapper
        :theme-name="currThemeName"
        :is-static="true"
        :layout="layout"
        :col-num="colNum"
        :margin="margin"
        :row-height="rowHeight"
      />
    </div>
  </div>
</template>

<style scoped>
.workbench-body {
  display: flex;
  min-height: 0;
  position: relative;
  height: 100%;
}

[class^='workbench-'] {
  border: 1px solid black;
  /* margin: 40px; */
}
.workbench-left {
  /* height: 877px; */
  width: 200px;
}
.workbench-center {
  /* display: flex; */
  flex: 1;
  height: 877px;
}
</style>
