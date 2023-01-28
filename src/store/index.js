import { createStore } from 'vuex'

export default createStore({
  state: {
    elements : []
  },
  getters: {
  },
  mutations: {
    createdElement(state, data) {
      state.elements.push(data)
      console.log(state)
    },

    changeValue(state, data) {
      const element = state.elements.find(element => element.id == data.id)
      element.value = data.value
    }

  },
  actions: {
  },
  modules: {
  }
})
