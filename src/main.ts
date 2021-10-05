import 'reflect-metadata';

import { createApp } from 'vue';
import App from './App.vue';

import {
    store,
    storeKey
} from './store';

createApp(App).use(store, storeKey).mount('#app');
