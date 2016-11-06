window.Vue = require('vue')
Vue.component('app', require('./app.vue'))
window.app = new Vue({
  el: 'body',
  components: {
    // 'app': require('./app.vue')
  }
})
