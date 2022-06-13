import { createApp } from 'vue';
import { createPinia } from 'pinia';
import componentsRender from '@/lib/chartsRender/componentsRender';
import App from './App.vue';
import '@/themes/registerThemes';
import './styles';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(componentsRender);
app.mount('#reporting-edit');
