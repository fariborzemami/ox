<route>
{
  "name": "portal",
  "meta": {
    "order": 7,
    "isVisible": true,
    "iconName": "mdi-arrow-left",
    "artwork": null
  }
}
</route>
<template>
  <div>
    <page-title
      :title="$t('pages.portal.title')"
      >
    </page-title>
    <portal to="layoutTwoside">
      <img
        src="/img/samples/auth-artwork.png" />
    </portal>
  </div>
</template>
<script>
export default {
  layout: 'twoside'
}
</script>
