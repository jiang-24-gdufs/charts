import { createApp } from 'vue';
import { createPinia } from 'pinia';
import componentsRender from '@/lib/chartsRender/componentsRender';
import componentsConfig from '@/componentsConfig/charts';
import '@/componentsConfig/components';
import App from './App.vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入 font-awesome 字体图标
import 'font-awesome/scss/font-awesome.scss';
import '@/lib/themes/registerThemes';
import './styles';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(componentsRender);
app.use(componentsConfig);
// TODO: 改为按需引入
app.use(ElementPlus);
app.mount('#reporting-edit');
