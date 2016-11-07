;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loginWithGithubClient = require('@wmhilton/login-with-github-client');

var _loginWithGithubClient2 = _interopRequireDefault(_loginWithGithubClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'login-with-github',
  data: function data() {
    return {
      auth_token: null
    };
  },

  props: ['client_id', 'button_class', 'icon_class'],
  computed: {
    text: function text() {
      if (this.has_error) {
        return this.error_string;
      }
      return this.auth_token ? 'Logout' : 'Logout';
    }
  },
  methods: {
    toggle: function toggle() {
      this.auth_token ? this.logout() : this.login();
    },
    login: function login() {
      self = this;
      (0, _loginWithGithubClient2.default)({
        client_id: this.client_id
      }).then(function (auth_token) {
        self.auth_token = auth_token;
        self.$emit('login');
      }).catch(function () {
        self.$emit('error');
      });
    },
    logout: function logout() {
      self.auth_token = null;
    }
  },
  ready: function ready() {}
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function(){with(this){return _h('button',{class:button_class,on:{"click":login}},[_h('i',{class:icon_class}),"\n  "+_s(text)+"\n"])}}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1", __vue__options__)
  } else {
    hotAPI.reload("data-v-1", __vue__options__)
  }
})()}