import { createStore } from 'vuex'

//创建仓库实例对象
export default createStore({
  state: {
    num:0,
  },
  getters: {
  },
  mutations: {
    INCRECEMENT(state){
       state.num++;
    },
    DECRECEMENT(state,payload){
      state.num--;
   },
   INPUTNUM(state,payload){
      state.num=payload
   }

  },
  actions: {
  },
  modules: {
  }
})
