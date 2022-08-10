
<script>
// import RenderComponents from '../../../components/renderFunComponents/RenderComponents';
import chartsSeries from '../chartsSeries';
import chartsSeriesData from '../../../componentsData/commonData/series';
import { h } from 'vue';

export default {
  name: 'Series',
  components: {
    // RenderComponents
  },
  render() {
    return h('div', undefined, [
      h('el-select', {
        props: {
          value: this.series.type,
          size: 'mini',
          disabled: this.series.type !== 'bar' && this.series.type !== 'line'
        },
        style: {
          width: '100%'
        },
        on: {
          'change': (value) => {
            const series = chartsSeriesData[value];
            if (series) {
              series.data = this.series.data;
              series.id = this.series.id;
              series.name = this.series.name;
              this.$emit('switch-charts', {
                chartsType: value,
                series
              });
            } else {
              if (process.env.NODE_ENV !== 'production') {
                throw new Error(`未定义图标series${value}`);
              }
            }
          }
        }
      }, [
        h('el-option', {
          props: {
            key: 'bar',
            label: '柱形图',
            value: 'bar'
          }
        }),
        h('el-option', {
          props: {
            key: 'pie',
            label: '饼状图',
            value: 'pie',
            disabled: true
          }
        }),
        h('el-option', {
          props: {
            key: 'line',
            label: '折线图',
            value: 'line'
          }
        }),
        h('el-option', {
          props: {
            key: 'scatter',
            label: '散点图',
            value: 'scatter',
            disabled: true
          }
        })
      ]),
      h(this.renderComponent, {
        // TODO: CHECK PROPS DATA
        series: this.series
      })
    ]);
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
    }
  },
  props: {
    series: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
</style>
