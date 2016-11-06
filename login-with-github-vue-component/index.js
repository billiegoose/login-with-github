// Borrowing heavily from https://medium.com/@heatherbooker/how-to-publish-an-vue-js-directive-to-npm-e98600fb5d2f#.xssbsywp4
try {
  let Vue = require('vue')
} catch (e) {
  // It's all good, Vue should already be available globally.
}

let LoginWithGithubButton = require('./login-with-github-button.vue')

// Finally, check if you should export it:
try {
  module.exports = LoginWithGithubButton
} catch (e) {
  // Can't export it, so assume in a script and should install it globally.
  Vue.component('login-with-github', LoginWithGithubButton)
}
