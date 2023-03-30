import {createApp} from 'vue'
import App from './App.vue'

import MapVue from "mapvue";
import "mapbox-gl/dist/mapbox-gl.css";
// Vuetify
import 'vuetify/styles'
import vuetify from "@/plugins/vuetify"

import router from "@/router"


createApp(App)
  .use(router)
  .use(vuetify)
  .use(MapVue)
  .mount('#app')
