export default {
  state: {
    menu: []
  },
  actions: {
    setMenu: ({ commit }, payload) => {
      commit('SET_MENU', payload)
    }
  },
  mutations: {
    SET_MENU: (state, payload) => (state.menu = [...payload])
  },
  getter: {
    menu: () => state.menu
  }
}
