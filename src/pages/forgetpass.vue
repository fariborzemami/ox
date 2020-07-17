<route>
{
  "name": "forgotpass",
  "meta": {
    "order": 7,
    "isVisible": true,
    "iconName": "mdi-lock-open"
  }
}
</route>
<template>
  <forgotpass
    register-route="register"
    @forgotpass="forgotpass" />
</template>
<script>
export default {
  layout: 'twoside',
  methods: {
    forgotpass (payload) {
      console.log('Do Forgot Password ---------------- !!!!')
      console.log(payload.email)
    }
  }
}
</script>
