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
  props: ['client_id', 'scope'],
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
        client_id: this.client_id,
        scope: this.scope
      })
      .then(function (auth_token) {
        sessionStorage.auth_token = auth_token
        self.auth_token = auth_token
        self.$emit('login', auth_token)
      })
      .catch(function () {
        self.$emit('error')
      })
    },
    logout () {
      self.auth_token = null
      delete sessionStorage.auth_token
    },
  },
  beforeMount () {
    if (sessionStorage && sessionStorage.hasOwnProperty('auth_token')) {
      this.auth_token = sessionStorage.auth_token
      this.$emit('login', this.auth_token)
    }
  },
}
</script>
