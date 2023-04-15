import { createStore } from 'vuex';
import api from '@/http/api';
import classes from './modules/classes';
import stu from './modules/stu';
import subs from './modules/subs'

//创建仓库实例对象
export default createStore({
  state: {
    num:0,
    
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
   

  },
  actions: {
    
  },
  modules: {
    classes,stu,subs
  }
})
