/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'


// Composables
import {createApp} from 'vue'
import MapVue from "mapvue"
import "mapbox-gl/dist/mapbox-gl.css"

// Plugins
import {registerPlugins} from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.use(MapVue).mount('#app')
