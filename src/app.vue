<template>
  <router-view />
</template>

<script>
export default {
  name: 'LayoutsDemosBaselineFlipped',
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
}
</script>

<style lang="scss">
@import '@/style/main';
</style>
