<template>
  <v-app id="inspire">
    <v-main
      :style=" !isMobile ? { 'background': 'url(' + APP_CONFIG.defaultPagesArtwork +') center center no-repeat' } : '' "
    >
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
            :class="!isMobile ? 'white rounded-lg elevation-18'  : ''"
          >
          <router-link :to="APP_CONFIG.homeURL" >
            <v-img
              :src="APP_CONFIG.brandLogo"
              class="mb-15 mx-auto"
              height="auto"
              :width="APP_CONFIG.brandLogoWidth"
              >
            </v-img>
          </router-link>
          <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <GlobalSnackbar />
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data () {
    return {
      isMobile: this.$vuetify.breakpoint.mobile
    }
  }
}
</script>
