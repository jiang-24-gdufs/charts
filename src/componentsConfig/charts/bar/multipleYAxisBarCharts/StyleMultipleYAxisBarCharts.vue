<script>
import { h } from 'vue';
import BaseCoordinatesStyleComponent from '../../../baseComponents/BaseCoordinatesStyleComponent.vue';

export default {
  name: 'StyleMultipleYBarCharts.vue',
  render() {
    return h(BaseCoordinatesStyleComponent, {
      props: this.$props,
    });
  },
};
</script>
