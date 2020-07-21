<template>
  <v-app
    id="inspire"
    class="layout-twoside">
    <v-main>
      <v-container
        class="fill-height py-0"
        fluid
        >
        <v-row
          class="fill-height my-auto h-100 dark"
        >
        <v-col
          cols="12"
          sm="12"
          md="4"
          class="layout-twoside--content-area my-auto"
          >
          <router-link :to="APP_CONFIG.homeURL" >
            <v-img
              :src="APP_CONFIG.brandLogo"
              class="mb-15 mx-auto"
              height="auto"
              width="230"
              >
            </v-img>
          </router-link>
          <div class="px-5 mx-5">
              <router-view />
          </div>
        </v-col>
          <v-col
            cols="12"
            class="layout-twoside--artwork-area fill-height blue-grey lighten-5 d-flex justify-center align-center"
            sm="12"
            md="8"
            >
            <portal-target name="layoutTwoside">
              <!--
                This component can be located anywhere in your App.
                The slot content of the above portal component will be rendered here.
              -->
            </portal-target>
            <img
            v-if="artworkURL"
            :src="artworkURL" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  computed: {
    artworkURL () {
      const routeArtwork = this.$route.meta.artwork
      return routeArtwork || false
    }
  }
}
</script>
