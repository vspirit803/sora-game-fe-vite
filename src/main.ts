import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/lib/styles/main.sass";
// @ts-ignore
import { createVuetify } from "vuetify";
// @ts-ignore
import * as components from "vuetify/lib/components";
import * as directives from "vuetify/lib/directives";

const vuetify = createVuetify({
  components,
  directives,
});


createApp(App).use(router).use(vuetify).mount('#app')
