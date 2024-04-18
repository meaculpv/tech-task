import './sass/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from '@/app/providers/router';

const pinia = createPinia();
export const app = createApp(App).use(pinia).use(router);
