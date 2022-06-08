<script setup lang="ts">
import ReportingContainerConfig from '@/componentsConfig/containerConfig/ReportingContainerConfig.vue';
import { useReportingEditStore } from '@/stores/reporting-edit';
import themes from '@/themes';

const store = useReportingEditStore();

function handleSelectTheme(theme: any) {
  if (typeof theme === 'string') {
    // 内置的主题
    store.setThemeName(theme);
    store.setThemeBgcolor('none');
  } else {
    store.setThemeName(theme.themeName);
    // change bgc
    store.setThemeBgcolor(theme.theme.backgroundColor);
  }
}
</script>

<template>
  <div class="workbench-right">
    容器配置
    <ReportingContainerConfig />
    <div class="workbench-right">
      <p @click="handleSelectTheme('light')">默认主题1</p>
      <p @click="handleSelectTheme('dark')">主题1</p>
      <p v-for="theme of themes" :key="theme.themeName" @click="handleSelectTheme(theme)">
        主题{{ theme.themeName }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.workbench-body {
  display: flex;
  min-height: 0;
  position: relative;
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
