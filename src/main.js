import { createApp } from 'vue'
import App from './App.vue'

import '@/assets/css/reset.css';
import '@/assets/css/main.css';
import store from '../src/store/index.js';

createApp(App).use(store).mount('#app')