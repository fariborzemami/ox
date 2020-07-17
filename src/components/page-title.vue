<template>
  <div class="page-title-component d-flex flex-xxs-column flex-xs-row justify-content-between align-items-center w-100">
    <h2
      class="h4 py-3 pt-0 mb-0"
    >
      {{ title }}
    </h2>
    <v-spacer></v-spacer>
    <slot></slot>
  </div>
</template>

<script>
/**
 * @name pageTitle
 * @description Page title component for pages
 * @version 1.0.0
 * @property {string} [title] - title of page.
 */
export default {
  name: 'PageTitle',
  props: {
    title: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>
