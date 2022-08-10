<script>
// import chartsConfigMixins from '../../../../mixins/chartsConfigMixins';
import { h } from 'vue';
import BaseChartsStyleComponents from '../../../baseComponents/BaseChartsStyleComponents.vue';
export default {
  name: 'StyleSimpleScatterCharts',
  // mixins: [ chartsConfigMixins],
  render() {
    return h(BaseChartsStyleComponents, {
      props: this.$props
    });
  },
  components: {
    BaseChartsStyleComponents
  }
};
</script>
