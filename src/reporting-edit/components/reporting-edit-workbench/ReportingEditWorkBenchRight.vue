<script setup lang="ts">
import { computed } from 'vue';
import ReportingContainerConfig from '@/componentsConfig/containerConfig/ReportingContainerConfig.vue';
import ReportingStyleConfig from '@/components/reporting/ReportingStyleConfig.vue';
import SmartCollapse from '@/components/smartCollapse/SmartCollapse.vue';
import SmartCollapseItem from '@/components/smartCollapse/SmartCollapseItem.vue';
import BaseCollapseStyleComponent from './BaseCollapseStyleComponent.vue';
import ThemePlanGroup from '../theme-plan/ThemePlanGroup.vue';
import { useReportingEditStore, CONTAINER_CONFIG_INDEX } from '@/stores/reporting-edit';
import themes from '@/lib/themes';

const store = useReportingEditStore();
const currConfigItemId = computed(() => store.currConfigItemId); // 当前选中的配置对象
const currlayout = computed(() =>
  (store.layoutItem || []).find((l) => l.i == currConfigItemId.value)
);

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

// from https://echarts.apache.org/zh/option.html#color
const defaultTheme = {
  theme: {
    color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
  },
  themeName: 'default'
};
// from https://github.com/apache/echarts/blob/master/src/theme/light.ts#L20
const lightTheme = {
  theme: {
    color: [
      '#37A2DA',
      '#32C5E9',
      '#67E0E3',
      '#9FE6B8',
      '#FFDB5C',
      '#ff9f7f',
      '#fb7293',
      '#E062AE',
      '#E690D1',
      '#e7bcf3',
      '#9d96f5',
      '#8378EA',
      '#96BFFF',
    ],
  },
  themeName: 'light',
};
// from https://github.com/apache/echarts/blob/master/src/theme/dark.ts#L47
const darkTheme = {
  theme: {
    color: [
      '#4992ff',
      '#7cffb2',
      '#fddd60',
      '#ff6e76',
      '#58d9f9',
      '#05c091',
      '#ff8a45',
      '#8d48e3',
      '#dd79ff',
    ],
    backgroundColor: '#100C2A',
  },
  themeName: 'dark',
};
</script>

<template>
  <div class="config">
    <div class="container-config">
      <template v-if="currConfigItemId === CONTAINER_CONFIG_INDEX">
        <ReportingContainerConfig />
        <smart-collapse>
          <smart-collapse-item title="主题设置" icon="el-icon-monitor" :async="false">
            <div class="container-config__theme">
              <p @click="handleSelectTheme('default')">
                <ThemePlanGroup :theme="defaultTheme" />
              </p>
              <p @click="handleSelectTheme('light')">
                <ThemePlanGroup :theme="lightTheme" />
              </p>
              <p @click="handleSelectTheme('dark')">
                <ThemePlanGroup :theme="darkTheme" />
              </p>
              <p v-for="theme of themes" :key="theme.themeName" @click="handleSelectTheme(theme)">
                <ThemePlanGroup :theme="theme" />
              </p>
            </div>
          </smart-collapse-item>
        </smart-collapse>

      </template>
      <template v-else>
        <!-- 组件类型识别 -->
        <!-- {{ currConfigItemId }}
        {{ currlayout }} -->
        <!--样式配置-->
        <reporting-style-config class="reporting-edit-config" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.config {
  padding: 6px;
}

.container-config {
  /* overflow: auto; */
  display: flex;
  flex-direction: column;
}

.container-config__theme {
  overflow: auto;
  flex-basis: 500px;
  flex: 1;
}
</style>
