<route>
{
  "name": "login",
  "meta": {
    "order": 5,
    "isVisible": true,
    "iconName": "mdi-email"
  }
}
</route>
<template>
  <login
    :isDark="true"
    forgot-password-route="forgotpass"
    register-route="register"
    @login="onLogin" />
</template>
<script>
export default {
  layout: 'twoside',
  methods: {
    onLogin (payload) {
      console.log('Do Login ---------------- !!!!')
      console.log(payload.email)
      console.log(payload.password)
      console.log(payload.rememberMe)
    }
  }
}
</script>
