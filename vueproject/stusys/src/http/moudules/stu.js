import axios from 'axios';
const stuapi={
    get(){
        return axios({
            url:'/index/get',
            method:'GET'
        })
    },
    addstu(stu){
        return axios({
            url:'/index',
            method:'Post',
            data:stu
        })
    },
    delstu(id){
        return axios({
            url:'/index/delete',
            method:'Post',
            data:id
        })
    }
}
export default stuapi;