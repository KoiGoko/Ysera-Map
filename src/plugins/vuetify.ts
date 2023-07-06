// Styles
import 'vuetify/styles'
import 'mapbox-gl/dist/mapbox-gl.css';
import '@fortawesome/fontawesome-free/css/all.css'
// @ts-ignore
import colors from 'vuetify/lib/util/colors'
// @ts-ignore

import {createVuetify} from 'vuetify'
import {aliases, fa} from 'vuetify/iconsets/fa'
import {md3} from 'vuetify/blueprints'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


// @ts-ignore
export default createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
  blueprint: md3,
  components,
  directives,
})

