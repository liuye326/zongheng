import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected:"1"
  },
  getters:{  
    getSelected: state => state.selected
  },
  mutations: {
    setSelected(state,selected){
      state.selected = selected;
    }
  },
  actions: {

  }
})
