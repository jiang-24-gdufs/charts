<script setup lang="ts">
import ReportingEditHeader from './ReportingEditHeader.vue';
import ReportingEditContent from './ReportingEditContent.vue';
import { environment } from '@/evn.config';
import type { reportingState } from '@/stores/reporting-edit';
import { useReportingEditStore } from '@/stores/reporting-edit';

const store = useReportingEditStore();

fetch(
  `${environment.VITE_API_BASE_URL}/chartsView/getChartViewById?rid=5807b621-d04d-4561-867f-1354b365cf84`
).then((response: Response) => {
  if (response.status === 200) {
    response.json().then((res) => {
      if (res.status === 0) {
        const reporting = res.data;
        reporting.pageData = JSON.parse(reporting.pageData);
        store.set(reporting as reportingState);
        // layout.value = pageData.layoutItem;
      }
      // reporting.value = response.json().data;
    });
  } else {
  }
});
</script>

<template>
  <ReportingEditHeader />
  <ReportingEditContent />
</template>
