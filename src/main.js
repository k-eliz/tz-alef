import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHashHistory } from 'vue-router';
import FormPage from './components/FormPage.vue';
import PreviewPage from './components/PreviewPage.vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const routes = [
  { path: '/', component: FormPage },
  { path: '/preview', component: PreviewPage },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const pinia = createPinia();

const options = {};

createApp(App).use(router).use(pinia).use(Toast, options).mount('#app');
