// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import {VDatePicker} from 'vuetify/labs/VDatePicker'

import {createVuetify} from 'vuetify'

export default createVuetify({
    components: {
        VDatePicker,
    },
    theme: {
        themes: {
            light: {
                colors: {
                    background: '#FFFFFF',
                    surface: '#E0E0E0',
                    primary: '#EEEEEE',
                    secondary: '#212121',
                    success: '#4CAF50',
                    error: '#FF5252',
                    warning: '#FFC107',
                },
            },
            dark: {
                colors: {
                    background: '#000000',
                    surface: '#F5F5F5',
                    primary: '#F5F5F5',
                    secondary: '#212121',
                    success: '#4CAF50',
                    error: '#FF5252',
                    warning: '#FFC107',
                },
            },
        },
    },
})
