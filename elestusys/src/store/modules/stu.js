import api from '@/http/api';
export default{
    namespaced:true,
    state: {
        studata:[],
        totaldata:0,
        pagesdata:1,
        stupresrc:[],
        stusrc:''

      },
      getters: {
       
      },
      mutations: {
       
        SETSTULIST(state,payload){
          
          state.totaldata=payload.total;
          state.pagesdata=payload.pages;
          state.stupresrc= payload.data.map(function(item){
            if(item.picname){
              return `http://localhost:3000/img/${item.picname}`
            }else{
              return 'http://localhost:3000/img/default.jpg'
            }
          });
          state.studata=payload.data.map(function(item){
            if(item.picname){
              state.stusrc=`http://localhost:3000/img/${item.picname}`
              return {...item,stusrc:state.stusrc}
            }else{
              state.stusrc=`http://localhost:3000/img/default.jpg`
              return {...item,stusrc:state.stusrc}
            };
           
          })
          console.log(state.studata);
        }
      },
      actions: {
        async getstulistAsync(context,payload){
          const data= await api.stuapi.get(payload);
          context.commit('SETSTULIST',data.data.data)
        }
            
      },
}