// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import {createVuetify} from 'vuetify'

export default createVuetify({
    theme: {
        themes: {
            light: {
                colors: {
                    primary: '#212121',
                    secondary: '#F5F5F5',
                    third: '#FFFFFF',
                },
            },
        },
    },
})
