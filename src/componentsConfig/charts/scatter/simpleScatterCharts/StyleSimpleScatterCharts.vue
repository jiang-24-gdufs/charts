<script>
// import chartsConfigMixins from '../../../../mixins/chartsConfigMixins';
import { h } from 'vue';
import BaseChartsStyleComponents from '../../../baseComponents/BaseChartsStyleComponents.vue';
import BaseCoordinatesStyleComponent from '../../../baseComponents/BaseCoordinatesStyleComponent.vue';

export default {
  name: 'StyleSimpleScatterCharts',
  components: {
    BaseCoordinatesStyleComponent /* BaseChartsStyleComponents */,
  },
  // mixins: [ chartsConfigMixins],
  render() {
    return h(BaseCoordinatesStyleComponent /* BaseChartsStyleComponents */, {
      props: this.$props,
    });
  },
};
</script>
