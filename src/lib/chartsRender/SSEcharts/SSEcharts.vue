<script lang="ts">
import * as echarts from 'echarts';
import { defineComponent, h, computed } from 'vue';
import { debounce } from 'lodash';
import { useReportingEditStore } from '@/stores/reporting-edit';

export default defineComponent({
  name: 'SSECharts',
  props: {
    options: Object,
    theme: [String, Object],
    initOption: {
      type: Object,
      required: true,
    },
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
    const store = useReportingEditStore();
    const currThemeName = computed(() => store.currThemeName);

    return { currThemeName };
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
    currThemeName: {
      handler(value) {
        // console.log('%cSSEcharts.vue line:46 currThemeName', 'color: #007acc;', value);
        // 重置主题
        if (this.chart) {
          this.chart.dispose();
          const chart = echarts.init(this.$el, value, this.initOption);

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
    initOption: {
      handler(value) {
        if (this.chart) {
          this.chart.resize(value);
          console.log('%cSSEcharts.vue line:49 resize', 'color: #007acc;', this);
        } else {
          console.error(this, value);
        }
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

      const chart = echarts.init(this.$el, this.currThemeName, this.initOption);
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
    return h('div');
  },
});
</script>
