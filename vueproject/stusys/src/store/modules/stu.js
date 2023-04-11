import api from '@/http/api';
export default{
    namespaced:true,
    state: {
        studata:[],
        totaldata:0,
        pagesdata:1

      },
      getters: {
       
      },
      mutations: {
       
        SETSTULIST(state,payload){
          state.studata=payload.data;
          state.totaldata=payload.total;
          state.pagesdata=payload.pages
        }
      },
      actions: {
        async getstulistAsync(context,payload){
          const data= await api.stuapi.get(payload);
          context.commit('SETSTULIST',data.data.data)
        }
            
      },
}