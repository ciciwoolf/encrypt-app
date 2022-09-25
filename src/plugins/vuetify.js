// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {      
            primary: '#3f51b5',
            secondary: '#e91e63',
            accent: '#ff9800',
            error: '#f44336',
            warning: '#795548',
            info: '#03a9f4',
            success: '#2196f3'        
        }
  }
})

export default vuetify;