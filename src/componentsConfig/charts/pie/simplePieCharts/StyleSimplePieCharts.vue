<script>
import { h } from 'vue';
import BaseChartsStyleComponents from '../../../baseComponents/BaseChartsStyleComponents.vue';

export default {
  name: 'StyleSimplePieCharts',
  components: {
    BaseChartsStyleComponents,
  },
  render() {
    return h(BaseChartsStyleComponents, {
      props: this.$props,
    });
  },
};
</script>

<style scoped></style>
