<template>
  <span @click="toggle" class="login-with-github">
    <slot name="login" v-if="!logged_in">
      <button class="btn btn-primary">
        <i class="fa fa-github"></i>
        Log In With Github
      </button>
    </slot>
    <slot name="logout" v-else>
      <button class="btn btn-default">
        <i class="fa fa-github"></i>
        Log Out
      </button>
    </slot>
  </span>
</template>

<script>
import LoginWithGithub from '@wmhilton/login-with-github-client'

export default {
  name: 'login-with-github',
  data () {
    return {
      auth_token: null
    }
  },
  props: ['client_id', 'button_class', 'icon_class'],
  computed: {
    logged_in () {
      return (this.auth_token ? true : false)
    }
  },
  methods: {
    toggle () {
      (this.auth_token) ? this.logout() : this.login()
    },
    login () {
      self = this
      LoginWithGithub({
        client_id: this.client_id
      })
      .then(function (auth_token) {
        // localStorage.auth_token = auth_token
        self.auth_token = auth_token
        self.$emit('login')
      })
      .catch(function () {
        self.$emit('error')
      })
    },
    logout () {
      self.auth_token = null
      // delete localStorage.auth_token
    },
  },
  ready () {
    // this.auth_token = localStorage.auth_token
  },
}
</script>
