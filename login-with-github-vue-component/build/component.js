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
    logged_in: function logged_in() {
      return this.auth_token ? true : false;
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
__vue__options__.render = function(){with(this){return _h('span',{staticClass:"login-with-github",on:{"click":toggle}},[(!logged_in)?_t("login",[_m(0)]):_t("logout",[_h('button',{staticClass:"btn btn-default"},[_h('i',{staticClass:"fa fa-github"}),"\n      Log Out\n    "])])," "])}}
__vue__options__.staticRenderFns = [function(){with(this){return _h('button',{staticClass:"btn btn-primary"},[_h('i',{staticClass:"fa fa-github"}),"\n      Log In With Github\n    "])}}]
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