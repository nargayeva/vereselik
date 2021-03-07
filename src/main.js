import { createApp } from 'vue';

// Styles & Scripts
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './assets/css/style.css'

// Store, Mixins & Plugins
import i18n from "./utils/plugins/i18n";

import router from "./router";
import App from './App.vue';

const app = createApp(App);

// Plugins
app.use(i18n);

// Router
app.use(router);

app.mount('#app');
