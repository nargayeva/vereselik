import { createApp } from 'vue';

// Styles & Scripts
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './assets/css/index.css'
import global from "./utils/plugins/global";

// Store, Mixins & Plugins
import i18n from "./utils/plugins/i18n";

import router from "./router";
import App from './App.vue';

const app = createApp(App);

// Plugins
app.use(i18n);
app.use(global);

// Router
app.use(router);

app.mount('#app');
