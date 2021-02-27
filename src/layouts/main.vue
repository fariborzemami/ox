<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
      right
      :dark="APP_CONFIG.layout.panel.isSidebarDark"
      class="sidebarContent"
    >
      <template v-slot:prepend>
        <v-list-item two-line>

          <v-list-item-content>
            <v-switch dense inset class="mt-5 ml-2" @change="changeTheme"></v-switch>
          </v-list-item-content>
        </v-list-item>
      </template>
      <sidebar-list />
    </v-navigation-drawer>

    <v-app-bar
      clipped-right
      app
      elevation=2
      :dark="APP_CONFIG.layout.panel.isHeaderDark"
      color="headerColor"
      >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link :to="APP_CONFIG.homeURL">
        <v-img :src="APP_CONFIG.brandLogo" 
                height="auto" 
                width="80"> 
        </v-img>
      </router-link>
      <v-spacer></v-spacer>
      <portal-target
        class="w-100"
        name="layoutPanel_headerCenter"
      >
        <!--
          This component can be located anywhere in your App.
          The slot content of the above portal component will be rendered here.
        -->
      </portal-target>

      <router-link :to="APP_CONFIG.homeURL"> </router-link>
      <v-spacer></v-spacer>
      <v-btn 
        color="transparent"
        small
        fab
        :elevation="0"
        to="/basket">
        <v-icon title="" class="">
          mdi-basket-outline
        </v-icon>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            :elevation="0"
            fab
            small
            color="transparent"
            class="px-0 mr-3"
            v-bind="attrs"
            v-on="on"
          >
            <span>
              {{ profile.name }}
            </span>
            <v-avatar class="mx-2" width="32" height="32">
              <img
                v-if="profile.avatarImage"
                :src="profile.avatarImage"
                :alt="profile.name"
              />
              <img v-else src="/img/default-avatar.jpg" :alt="profile.name" />
            </v-avatar>
          </v-btn>
        </template>
        <v-list dense>
          <v-list-item
            v-for="(item, index) in memberTerritoryMenus"
            :key="'member-territory-list-item-' + index"
            link
            :to="item.path"
          >
            <v-list-item-action class="mx-0">
              <v-icon small>
                {{ item.iconName }}
              </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ $t(item.title) }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main class="mainContent">
      <v-container fluid>
        <v-row>
          <v-col>
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <GlobalSnackbar />
  </v-app>
</template>

<script>
import sidebarList from "../components/sidebar-list";
export default {
  name: "LayoutsDemosBaselineFlipped",
  components: {
    "sidebar-list": sidebarList
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  computed: {
    profile() {
      console.log(this.$store.state.layout.profile);
      return this.$store.state.layout.profile;
    },
    memberTerritoryMenus() {
      return this.$store.state.layout.memberTerritoryMenus;
    }
  },
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>
