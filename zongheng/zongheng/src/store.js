import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected:"1",
    url_head:"http://freely.applinzi.com"
  },
  getters:{  
    getSelected: state => state.selected,
    getUrlHeader: state => state.url_head
  },
  mutations: {
    setSelected(state,selected){
      state.selected = selected;
    }
  },
  actions: {

  }
})
