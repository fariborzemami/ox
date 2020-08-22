import APP_CONFIG from '@/config.js'
import faker from 'faker'
faker.locale = APP_CONFIG.locale
export default {
  namespaced: true,
  state: {
    profile: {
      name: faker.name.firstName() + ' ' + faker.name.lastName(),
      role: 'USER',
      avatar: '/img/default-avatar.jpg',
      email: faker.internet.email()
    },
    memberTerritoryMenus: [
      {
        title: 'pages.profile.title',
        path: '/profile',
        iconName: 'mdi-cog'
      },
      {
        title: 'pages.logout.title',
        path: '/logout',
        iconName: 'mdi-logout'
      }
    ]
  },
  mutations: {
    updateProfile (state, payload) {
      state.profile = payload
    },
    updateMemberTerritoryMenus (state, payload) {
      state.memberTerritoryMenus = payload
    }
  },
  actions: {
    updateProfile (context, payload) {
      context.commit('updateProfile', payload)
    },
    updateMemberTerritoryMenus (context, payload) {
      context.commit('updateMemberTerritoryMenus', payload)
    }
  }
}
