import { createStore } from 'vuex';
import classes from './modules/classes';
import stu from './modules/stu';
import subs from './modules/subs'

//创建仓库实例对象
export default createStore({
  state:{userinfo:''},
  mutations:{
    GETUSERINFO(state,payload){
      state.userinfo=payload
    }
  },
  modules: {
    classes,stu,subs
  }
})
