<script setup lang="ts">
import ReportingEditHeader from './ReportingEditHeader.vue';
import ReportingEditContent from './ReportingEditContent.vue';
import { environment } from '@/evn.config';
import type { reportingState } from '@/stores/reporting-edit';
import { useReportingEditStore } from '@/stores/reporting-edit';
import { nextTick, onMounted, ref } from 'vue';
import { PostmatesJS } from '@/lib/postmates/postmates-js.js';
import {cloneDeep} from 'lodash'
// import axios from 'axios';


const store = useReportingEditStore();
const inIframe = ref(false); // 是否在iframe中打开, iframe中会自动隐去头部



function save() {
  const reporting = JSON.parse(JSON.stringify(store.data));
  reporting.pageData = JSON.stringify(reporting.pageData);
  if (inIframe.value) {
    // MESSAGE
    if (window.opener || window.parent !== window) {
      //TODO: 建立全局变量和文档进行说明
      model.then((childAPI) => {
        console.log(`PostmatesJS.Model emit some-event`)
        childAPI.emit('some-event', reporting);
      });
    }
  } else {
    // HTTP SAVE
    const data = cloneDeep(store.data);
    data.pageData = JSON.stringify(data.pageData);
    fetch(`${environment.VITE_API_BASE_URL}/chartsView/updateChartViewInEdit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify(data)
    }).then(console.log)
  }
}

function getReporingData() {
  if (inIframe.value) {
    // From Parent
    // 用于iframe嵌套打开时传入配置对象
    PostmatesJS.debug = true;
    const model = new PostmatesJS.Model({
      // demoFunction：提供给父页面的方法
      // options: 从父页面传入的参数信息
      demoFunction: (options) => {
        console.log('child3', options);
      },
      init: (reporting: reportingState) => {
        // 初始化图表配置
        console.log('%cReportingEdit.vue line:46 init = reporting', 'color: #007acc;', reporting);
        store.set(reporting)
      },
      save: () => {
        // save & emit event send to parent
        save();
      },
    });
  } else {
    // FETCH from HTTP
    const urlSearch = new URLSearchParams(location.search);
    const rid = urlSearch.get(environment.VITE_SEARCH_PREFIX)
    if (!rid) return;
    fetch(
      `${environment.VITE_API_BASE_URL}/chartsView/getChartViewById?rid=${rid}`
    ).then((response: Response) => {
      if (response.status === 200) {
        response.json().then((res) => {
          if (res.status === 0) {
            const reporting = res.data;
            const defeultPageData = store.data.pageData;
            const pageData = JSON.parse(reporting.pageData)
            reporting.pageData = {...defeultPageData,...pageData};

            store.set(reporting as reportingState);
            console.log('%cReportingEdit.vue line:21 reporting', 'color: #007acc;', reporting);
            // layout.value = pageData.layoutItem;
          }
          // reporting.value = response.json().data;
        });
      } else {
      }
    });

  }


}

onMounted(() => {
  inIframe.value = window.parent !== window;

  nextTick(() => {
    getReporingData();
  })
})

</script>

<template>
  <ReportingEditHeader v-if="!inIframe" @save="save" />
  <ReportingEditContent />
</template>
