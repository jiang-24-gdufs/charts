import { createApp } from 'vue';
import { createPinia } from 'pinia';
import componentsRender from '@/lib/chartsRender/componentsRender';
import App from './App.vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/lib/themes/registerThemes';
import './styles';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(componentsRender);
// TODO: 改为按需引入
app.use(ElementPlus);
app.mount('#reporting-edit');
