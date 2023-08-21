// Styles
import 'vuetify/styles'
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mdi/font/css/materialdesignicons.css'
// @ts-ignore
import colors from 'vuetify/lib/util/colors'
// @ts-ignore
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
  },
  components,
  directives,
})

