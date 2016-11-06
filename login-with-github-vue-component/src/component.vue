<template>
  <button @click="login" :class="button_class">
    <i :class="icon_class"></i>
    {{ text }}
  </button>
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
    text () {
      if (this.has_error) {
        return this.error_string
      }
      return (this.auth_token) ? 'Logout' :'Logout'
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
