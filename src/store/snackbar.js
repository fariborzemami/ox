export default {
  namespaced: true,
  state: {
    content: '',
    color: '',
    show: '',
    transition: ''
  },
  mutations: {
    showMessage (state, payload) {
      state.content = payload.content
      state.color = payload.color
      state.show = true
      state.transition = payload.transition
    }
  },
  actions: {
    showToastMessage (context, payload) {
      context.commit('showMessage', payload)
    }
  }
}
