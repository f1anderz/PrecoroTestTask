import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router/index.js';
import App from './App.vue';
// @ts-ignore
import ClickOutside from './directives/ClickOutsideDirective';
const pinia = createPinia();

createApp(App)
  .directive('click-outside', ClickOutside)
  .use(pinia)
  .use(router)
  .mount('#app');
