<template>
  <div id="app" style="height: 100%">
    Click here to log in
    <login-with-github client_id="2e65f688150e32999dad" button_class="ui button" icon_class="github icon"></login-with-github>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {
    'login-with-github': require('@wmhilton/login-with-github-vue-component')
  }
}
</script>
