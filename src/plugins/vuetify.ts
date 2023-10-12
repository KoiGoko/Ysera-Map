// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import {createVuetify} from 'vuetify'

export default createVuetify({
    theme: {
        themes: {
            light: {
                colors: {
                    primary: '#F5F5F5',
                    secondary: '#212121',
                    third: '#C5CAE9',
                },
            },
        },
    },
})
