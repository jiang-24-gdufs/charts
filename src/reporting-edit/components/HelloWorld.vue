<script setup lang="ts">
import * as echarts from 'echarts';
import { ElInput } from 'element-plus';
import { ref, onMounted } from 'vue';
import { environment } from '@/evn.config';
import { qs } from '../../qs';
import { usePathRoamStore } from '@/stores/reporting-edit';

const store = usePathRoamStore();
console.log('%cHelloWorld.vue line:10 store', 'color: #007acc;', store);
console.warn(JSON.stringify(environment));
defineProps<{ msg: string }>();

const count = ref(qs);

onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  const c = document.getElementById('main');
  const myChart = echarts.init(c!);

  // 指定图表的配置项和数据
  const option = {
    title: {
      text: 'ECharts 入门示例',
    },
    tooltip: {},
    legend: {
      data: ['销量'],
    },
    xAxis: {
      data: ['count', '衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [count.value, 5, 20, 36, 10, 10, 20],
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
});

/* 打开新窗口 */
function edit() {
  // window.open(`${process.env.VUE_APP_URL}/index.html`)
  window.open(`${environment.VITE_APP_URL}/reporting-edit/reporting-edit.html`);
}
</script>

<template>
  <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
  <div id="main" style="width: 600px; height: 400px"></div>
  <button @click="edit">edit & open</button>
  <el-input />
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
