import api from '@/http/api';
export default{
    namespaced:true,
    state: {
        classdata:[],
        classdatabysub:[],
        subname:''
      },
      getters: {
       
      },
      mutations: {
      SETCLADATA(state,payload){
        state.classdata=payload;
      },
      SETCLADATABYSUB(state,payload){
        state.classdatabysub=payload.claid;
        state.subname=payload.subname
      }
    
      },
      actions: {
        async getclalistAsync(context,payload){
          const data = await api.claapi.claget();
          //this.cladata=data.data;
          context.commit('SETCLADATA',data.data)
      },
      async addclaAsync(context,payload){
        const data = await api.claapi.addcla(payload);
        return data;
        //this.cladata=data.data;
        //context.commit('SETCLADATA',data.data)
    },
     async getclassbysubAsync(context,payload){
      const data=await api.subapi.searchsub(payload);
      console.log(data.data[0]);
      context.commit('SETCLADATABYSUB',data.data[0])
    }

      },
}