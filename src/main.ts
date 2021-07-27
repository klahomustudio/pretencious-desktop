import { createApp } from "vue";
import App from "@/layouts/default.vue";
import router from "./router";
import store from "./store";
import mdiVue from 'mdi-vue';
import * as mdijs from '@mdi/js';

createApp(App).use(store).use(router).use(mdiVue, { icons: mdijs }).mount("#app");
