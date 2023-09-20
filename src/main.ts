import App from './App.vue'


import {createApp} from 'vue'

import "mapbox-gl/dist/mapbox-gl.css"

import {registerPlugins} from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
