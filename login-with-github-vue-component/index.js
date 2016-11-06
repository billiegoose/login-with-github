"use strict"
const LoginWithGithubButton = require('./src/component.vue')
module.exports = {
  'LoginWithGithub': LoginWithGithubButton,
  install: function(Vue) {
    Vue.component('login-with-github', LoginWithGithubButton)
  }
}
