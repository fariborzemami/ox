<route>
{
  "name": "changePassword",
  "meta": {
    "title": "change password",
    "order": 9,
    "isVisible": true,
    "iconName": "mdi-login"
  }
}
</route>
<template>
  <changePassword
    :solo=true
    :outlined=false
    :icon-enabled=true
    @changepassword="onChangepassword" />
</template>
<script>
export default {
  layout: 'twoside',
  methods: {
    onChangepassword (payload) {
      console.log('Do Change Password ---------------- !!!!')
      console.log(payload.password)
    }
  }
}
</script>
