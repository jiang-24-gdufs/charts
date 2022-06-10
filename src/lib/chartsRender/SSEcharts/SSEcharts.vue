<script lang="ts">
import * as echarts from 'echarts';
import { defineComponent, h, computed, inject } from 'vue';
import { debounce } from 'lodash';
import { useReportingEditStore } from '@/stores/reporting-edit';

export default defineComponent({
  name: 'SSECharts',
  props: {
    options: Object,
    theme: [String, Object],

    otherOption: {
      type: Object,
      required: true,
    },
    group: String,
    autoresize: {
      type: Boolean,
      required: false,
      default: true,
    },
    watchShallow: Boolean,
    manualUpdate: Boolean,
  },

  setup() {
    const themeName = inject('themeName');

    return { themeName };
  },
  data() {
    return {
      // lastArea: 0,
      chart: null,
    } as {
      chart: echarts.EChartsType | null;
    };
  },
  watch: {
    themeName: {
      handler(value) {
        // 重置主题
        if (this.chart) {
          this.chart.dispose();
          const chart = echarts.init(this.$el, value);

          chart.setOption(this.options || {}, true);
          this.chart = chart;
        }
      },
    },
    options: {
      handler(value) {
        this.chart?.setOption(value, true);
        console.log('%cSSEcharts.vue line:49 setOption', 'color: #007acc;', this);

        // this.chart?.setOption(value);
      },
      deep: true,
    },

    'otherOption.showLoading'(value) {
      if (value) {
        this.showLoading();
      } else {
        this.hideLoading();
      }
    },
    'otherOption.refresh'() {
      this.refresh();
    },
  },

  created() {},
  mounted() {
    if (this.options) {
      this.initData();
    }
  },
  beforeUnmount() {
    if (!this.chart) {
      return;
    }
    this.destroy();
  },
  methods: {
    initData() {
      if (this.chart) {
        return;
      }

      const chart = echarts.init(this.$el, this.themeName);
      chart.setOption(this.options || {}, true);
      console.log('%cSSEcharts.vue line:114 this.options', 'color: #007acc;', this.options);
      this.chart = chart;
    },
    destroy() {
      this.chart?.dispose();
      this.chart = null;
    },
    refresh() {
      if (this.chart) {
        this.chart.clear();
        this.destroy();
        this.initData();
      }
    },
    // 显示加载中
    showLoading() {
      this.chart?.showLoading();
    },
    // 关闭
    hideLoading() {
      this.chart?.hideLoading();
    },
  },
  render() {
    return h('div', {style: {
      width: '100%',
      height: '100%'
    }});
  },
});
</script>

<style scoped>
div{
  width: 100%;
  height: 100%;
}
</style>
