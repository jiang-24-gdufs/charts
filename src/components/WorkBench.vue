<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
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

function getChartView() {
  fetch(
    `${environment.VITE_API_BASE_URL}/chartsView/getChartViewById?rid=5807b621-d04d-4561-867f-1354b365cf84`
  ).then((response: Response) => {
    if (response.status === 200) {
      response.json().then((res) => {
        if (res.status === 0) {
          const reporting = res.data;

          updateChartView(reporting);
        }
      });
    } else {
    }
  });
}

// use for both http and postmates
function updateChartView(reporting) {
  reporting.pageData = JSON.parse(reporting.pageData);
  store.set(reporting as reportingState);

  // const { pageData } = reporting;
  // const { containerConfig } = pageData;

  // layout.value = pageData.layoutItem;
  // colNum.value = containerConfig.colNum;
  // rowHeight.value = containerConfig.rowHeight;
}

onMounted(() => {
  getChartView();
});

let opener;
let handshake;
// const smartchartsUrl =
//   'http://localhost:8020/reporting-edit.html?reportingId=c3352578-67a0-4723-9480-03e92da564f7';

const smartchartsUrl = `${environment.VITE_REPORTING_EDIT_URL}?reportingId=c3352578-67a0-4723-9480-03e92da564f7`;

const edit = () => {
  opener = window.open(smartchartsUrl);

  opener.onload = console.error; // not effect cuz cross domain
  handshake = new PostmatesJS([
    {
      container: opener, // document.getElementById("cid2"), // third way, open a new page with `window.open`
      url: smartchartsUrl,
      name: 'smartcharts',
    },
  ]);

  // When parent <-> child handshake is complete, data may be requested from the child
  handshake.then((parentAPIs) => {
    parentAPIs.forEach((parentAPI) => {
      parentAPI.on('some-event', (reporting) => {
        // NOTE: DEBUGGER
        console.log('%cWorkBench.vue line:88 reporting', 'color: #007acc;', reporting);
        updateChartView(reporting);
      }); // Logs "Hello, World!"
      parentAPI.call('demoFunction', { options: 'Hello, PostmatesJS!' });
    });
  });
};
</script>

<template>
  <div class="workbench-body">
    <div class="workbench-left">
      <WorkBenchLeft />
      <button @click="edit">edit</button>
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

.workbench-center {
  /* display: flex; */
  flex: 1;
  height: 877px;
}
</style>
