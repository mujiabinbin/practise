import api from '@/http/api';
export default{
    namespaced:true,
    state: {
        sublistdata:[]
      },
      getters: {
       
      },
      mutations: {
       
        SETSUBLIST(state,payload){
          state.sublistdata=payload;
        }
      },
      actions: {
        async getsublistAsync(context,payload){
            const data = await api.subapi.subget();
            context.commit('SETSUBLIST',data.data)
            //this.subdata=data.data;
            //return data
        },
      },
}