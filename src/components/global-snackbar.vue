<template>
  <div class="global-snackbar-component">
    <v-snackbar
      v-model="show"
      :color="color"
      :transition="transition"
      content-class="text-center"
      >
      {{ message }}
    </v-snackbar>
  </div>
</template>

<script>
/**
 * @name globalSnackbar
 * @description global vuetify snackbar for showing messages
 * @version 1.0.0
 */
export default {
  data () {
    return {
      show: false,
      message: '',
      color: '',
      transition: ''
    }
  },
  created () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'snackbar/showMessage') {
        this.color = state.snackbar.color
        this.message = state.snackbar.content
        this.show = true
        this.transition = state.snackbar.transition
      }
    })
  }
}
</script>
