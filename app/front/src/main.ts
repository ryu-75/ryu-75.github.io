import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VueRecaptchaPlugin } from 'vue-recaptcha/head'

const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
})

app.use(router)
app.use(VueRecaptchaPlugin, {
  v2SiteKey: '6LcU7b0pAAAAAPC6vAoR7EV_-bC9Q1pgTYYRq5cR',
})

app.use(vuetify).mount('#app')
