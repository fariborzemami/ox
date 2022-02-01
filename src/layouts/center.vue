<template>
  <v-app id="inspire">
    <v-main
      :style="!isMobile ? { 'background': 'url(' + APP_CONFIG.defaultPagesArtwork +') center center no-repeat','background-size': 'cover' } : '' "
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
            md="6"
            lg="4"
            :class="isMobile ? '' : 'pl-0 pr-10 mr-auto'"
          >
             <v-card
               color="#fff"
               raised
               :flat="isMobile"
               :min-height="!isMobile ? '580px' : 'auto'"
               :max-height="!isMobile ? '580px' : 'auto'"
               :class="isMobile ? '' : 'pt-1'"
               class="loginMessage rounded-l-0 rounded-r-lg"
              >
          <router-link :to="APP_CONFIG.homeURL" >
            <portal-target
              name="center_layout_top">
                <!--
              This component can be located anywhere in your App.
              The slot content of the above portal component will be rendered here.
            -->
            </portal-target>
            <v-img
              :src="APP_CONFIG.brandLogo"
              class="my-8 mx-auto"
              height="auto"
              :width="APP_CONFIG.brandLogoWidth"
              >
            </v-img>
          </router-link>
          <router-view />
             </v-card>
          </v-col>
          <v-col
            cols="12"
            md="6"
            lg="4"
            :class="isMobile ? 'mx-auto' : 'ml-auto pr-0'"
            >
            <portal-target
              name="center_layout_side">
                <!--
              This component can be located anywhere in your App.
              The slot content of the above portal component will be rendered here.
            -->
            </portal-target>
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
      isMobile: window.innerWidth < 959
    }
  }
}
</script>
