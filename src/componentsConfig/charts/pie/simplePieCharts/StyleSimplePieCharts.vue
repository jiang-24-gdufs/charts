<script>
import { h } from 'vue';
import BaseChartsStyleComponents from '../../../baseComponents/BaseChartsStyleComponents.vue';

export default {
  name: 'StyleSimplePieCharts',
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

<style scoped>
</style>
