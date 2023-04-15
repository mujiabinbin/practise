import axios from 'axios';
const claapi={
    claget(){
        return axios({
            url:'/class/get',
            method:'GET',
        })
    },
    addcla(cla){
        return axios({
            url:'/class/add',
            method:'POST',
            data:cla
        })
    },
    

}
export default claapi;