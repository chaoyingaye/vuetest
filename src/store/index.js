import Vue from "vue"
import Vuex from "vuex"
// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
   name:"wangyi"
  },
  mutations: {
    increment(state){
      state.name="heh"
    }
  }
})

export default store;
