<script>
import { h, defineComponent, resolveComponent } from 'vue';
import chartsSeries from '../chartsSeries';
import chartsSeriesData, { chartTypeOptions } from '@/componentsData/commonData/series';
import componentsMap from '../index';

const { ConfigItem } = componentsMap;

export default defineComponent({
  name: 'Series',
  components: {
    ConfigItem,
  },
  props: {
    series: {
      type: Object,
      required: true,
    },
    yAxis: {
      type: Object,
      required: true,
    },
  },
  computed: {
    renderComponent() {
      if (chartsSeries[this.series.type]) {
        return chartsSeries[this.series.type];
      } else {
        if (process.env.NODE_ENV === 'development') {
          throw new Error(`在/configComponents/chartsSeries目录未定义图表系列${this.series.type}`);
        }
        return undefined;
      }
    },
  },
  render() {
    // NOTE: 渲染函数兼容性调整
    return h('div', undefined, [
      h(ConfigItem, { label: '系列类型：' }, [
        h(
          resolveComponent('el-select'),
          {
            modelValue: this.series.type,
            size: 'mini',
            disabled: this.series.type !== 'bar' && this.series.type !== 'line',
            style: {
              width: '100%',
            },
            onChange: (value) => {
              const series = chartsSeriesData[value];
              if (series) {
                series.data = this.series.data;
                series.id = this.series.id;
                series.name = this.series.name;
                this.$emit('switch-charts', {
                  chartsType: value,
                  series,
                });
              } else {
                if (process.env.NODE_ENV !== 'production') {
                  throw new Error(`未定义图标series${value}`);
                }
              }
            },
          },
          [chartTypeOptions.map((options) => h(resolveComponent('el-option'), options))]
        ),
      ]),

      h(this.renderComponent, {
        // TODO: CHECK PROPS DATA
        series: this.series,
        yAxis: this.yAxis,
      }),
    ]);
  },
});
</script>

<style scoped></style>
