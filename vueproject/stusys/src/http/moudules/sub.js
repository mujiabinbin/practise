import axios from 'axios';
const subapi={
    subget(){
        return axios({
            url:'/subjects/get',
            method:'GET',
        })
    },
    addsub(sub){
        return axios({
            url:'/subjects/add',
            method:'POST',
            data:sub
        })
    },
    searchsub(sub){
        return axios({
            url:'/subjects/search',
            method:'POST',
            data:sub
        })
    },
    

}
export default subapi;