import { createStore } from 'vuex';
import api from '../http/api'

//创建仓库实例对象
export default createStore({
  state: {
    num:0,
    cladata:[]
  },
  getters: {
    sum(state){
     return state.num+10
    }
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
   },
   GETCLADATA(state,payload){
      state.cladata=payload
   }

  },
  actions: {
    async getclalistAsync(context){
      const data = await api.claapi.claget();
      //state.cladata=data.data;
      context.commit('GETCLADATA',data.data)
  },

  async addclaAsync(context,payload){
    const data = await api.claapi.addcla(payload);
    return data
}
  },
  modules: {
  }
})
