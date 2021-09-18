<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
      temporary
      right
      :dark="APP_CONFIG.layout.panel.isSidebarDark"
      class="sidebarContent"
    >
      <template v-slot:prepend>
        <v-list-item>
          <!-- <v-list-item-content>
            <v-switch dense inset class="mt-5 ml-2" @change="changeTheme"></v-switch>
          </v-list-item-content> -->
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
                width="100">
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
      <portal-target
        class="float-left"
        name="layoutPanel_headerLeft"
        >
        <!--
          This component can be located anywhere in your App.
          The slot content of the above portal component will be rendered here.
        -->
      </portal-target>
      <router-link :to="APP_CONFIG.homeURL"> </router-link>
      <v-menu open-on-hover offset-y>
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
            <v-list-item v-if="profile.name != ' '">
            <v-list-item-content>
              <v-list-item-subtitle>
                {{ profile.name }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
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
import sidebarList from '../components/sidebar-list'
export default {
  name: 'LayoutsDemosBaselineFlipped',
  components: {
    'sidebar-list': sidebarList
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  computed: {
    profile () {
      return this.$store.state.layout.profile
    },
    memberTerritoryMenus () {
      let memberTerritoryMenus = this.$store.state.layout.memberTerritoryMenus
      const userRoles = this.$store.getters['layout/userInfo'].role
      memberTerritoryMenus = memberTerritoryMenus.filter(item => item.role.includes('All') || item.role.indexOf(userRoles) > -1)
      return memberTerritoryMenus
    }
  },
  methods: {
    changeTheme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>
