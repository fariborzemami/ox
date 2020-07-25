<route>
{
  "name": "server",
  "meta": {
    "order": 7,
    "isVisible": true,
    "iconName": "mdi-arrow-left"
  }
}
</route>
<template>
  <div>
    <page-title
      :title="$t('pages.server.title')"
    ></page-title>
  </div>
</template>
<script>
export default {
  layout: 'panel-full-height-side',
  mounted () {
    window.SERVER.ChangePassword({})
  }
}
</script>
