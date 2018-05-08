import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import routes from '@/routes'
// custom directives
import blur from '@/directives/blur'
// filtros
import msToMm from '@/filters/ms-to-mm'
// instalacion del plugin EventBus
import EventBus from '@/plugins/event-bus'

import store from '@/store'
// sirve para instalar plugins o third party libraries
Vue.use(VueRouter)
Vue.use(EventBus)
// se debe pasar una instancia al componente global de Vue -> App
Vue.use(msToMm)
Vue.use(blur)

const router = new VueRouter({
  routes
  // mode: 'history' -> este ultimo sirve para quitar el hashbang de la ruta
})
// recibe por parametro (objeto con las rutas) ->  rutas
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
  // esto es un shorthand
})
