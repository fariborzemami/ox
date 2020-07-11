<template>
  <v-app id="inspire">
    <v-navigation-drawer
      clipped
      app
      right
      :dark="APP_CONFIG.layout.panel.isSidebarDark"
      :mini-variant="drawerIsMini"
      class="sidebarContent"
      >
      <sidebar-list />
        <template v-slot:append>
          <v-list
            class="mt-auto"
            dense>
            <v-list-item
              @click.stop="drawerIsMini = !drawerIsMini">
              <v-icon
                >
                mdi-menu
              </v-icon>
            </v-list-item>
          </v-list>
        </template>
    </v-navigation-drawer>
    <v-app-bar
      :dark="APP_CONFIG.layout.panel.isHeaderDark"
      color="headerColor"
      clipped-right
      app
      >
      <router-link :to="APP_CONFIG.homeURL" >
        <v-img
          src="/img/brand-logo.png"
          height="auto"
          width="120"
          >
        </v-img>
      </router-link>
      <v-spacer></v-spacer>
      <v-switch
        dense
        inset
        class="mt-5 ml-2"
        @change="changeTheme"
      ></v-switch>
      <v-menu
        offset-y >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            :elevation="0"
            color="transparent"
            class="px-0 pr-2"
            v-bind="attrs"
            v-on="on"
            >
            <span>
              {{ profile.name }}
            </span>
            <v-avatar
            width="32"
            height="32">
              <img
                :src="profile.avatarImage"
                alt="profile.name"
                >
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
            <v-list-item-action
              class="mx-0">
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

    <v-main
      class="mainContent"
      >
      <v-container
        fluid
        >
        <v-row >
          <v-col class="pt-0">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import sidebarList from '../components/sidebar-list'
export default {
  name: 'LayoutsPanel',
  components: {
    'sidebar-list': sidebarList
  },
  props: {
    source: String
  },
  computed: {
    profile () {
      console.log(this.$store.state.layout.profile)
      return this.$store.state.layout.profile
    },
    memberTerritoryMenus () {
      return this.$store.state.layout.memberTerritoryMenus
    }
  },
  data: () => ({
    drawerIsMini: null
  }),
  methods: {
    changeTheme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>
