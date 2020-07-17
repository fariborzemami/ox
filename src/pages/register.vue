<route>
{
  "name": "register",
  "meta": {
    "order": 6,
    "isVisible": true,
    "iconName": "mdi-login"
    }
}
</route>
<template>
  <registration
    login-route="login"
    @register="onRegsiter"
  />
</template>
<script>
export default {
  layout: 'twoside',
  data () {
    return {

    }
  },
  methods: {
    onRegsiter (payload) {
      console.log('Do Regsiter ---------------- !!!!')
      console.log(payload.email)
      console.log(payload.name)
      console.log(payload.password)
      console.log(payload.phoneNumber)
    }
  }
}
</script>
