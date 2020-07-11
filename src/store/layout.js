import faker from 'faker'
faker.locale = 'fa'
export default {
  state: {
    profile: {
      name: faker.name.firstName() + ' ' + faker.name.lastName(),
      avatarImage: faker.image.avatar()
    },
    memberTerritoryMenus: [
      {
        title: 'pages.profile.title',
        path: '/profile',
        iconName: 'mdi-cog'
      },
      {
        title: 'pages.logout.title',
        path: '/login',
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
