// Styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import 'mapbox-gl/dist/mapbox-gl.css';
// @ts-ignore
import colors from 'vuetify/lib/util/colors'
// @ts-ignore
import SourceHanSansSC from '@/assets/fonts/SourceHanSansSC-Normal.otf'

import {createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#f6f8fc',
    secondary: '#f6f8fc',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
  fonts: {
      body: 'Roboto',
      heading: 'Roboto',
      button: 'Roboto',
    },
}

// @ts-ignore
export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    }
  }
})

