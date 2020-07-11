<template>
  <v-app id="inspire">
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
          class="my-auto"
          >
          <router-link :to="APP_CONFIG.homeURL" >
            <v-img
              src="/img/brand-logo.png"
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
            class="fill-height blue-grey lighten-5 d-flex justify-center align-center"
            sm="12"
            md="8"
            >
            <img src="/img/samples/auth-artwork.png" />
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
  }
}
</script>
