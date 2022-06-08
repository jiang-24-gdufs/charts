import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import componentsRender from '@/lib/chartsRender/componentsRender';
import '@/themes/registerThenes';
import './style';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(componentsRender);
app.mount('#app');
