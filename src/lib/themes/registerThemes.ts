import * as echarts from 'echarts';
import type { Theme } from './index';
import themes from './index';

(themes as Theme[]).forEach(({ themeName, theme }) => {
  echarts.registerTheme(themeName, theme);
});
