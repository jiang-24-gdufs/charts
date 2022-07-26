import * as echarts from 'echarts';
import type { Theme } from './index';
import themes from './index';

console.log('%cregisterThemes.ts line:5 echarts-lib/themes', 'color: #007acc;', echarts);
(themes as Theme[]).forEach(({ themeName, theme }) => {
  echarts.registerTheme(themeName, theme);
});
