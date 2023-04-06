import axios from 'axios';
const stuapi={
    get(pagedata){
        return axios({
            url:'/index/get',
            method:'GET',
            params:pagedata
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
    },
    editstu(id){
        return axios({
            url:'/index/edit',
            method:'Post',
            data:id
        })
    },
    updatestu(stu){
        return axios({
            url:'/index/update',
            method:'Post',
            data:stu
        })
    },
    uploadpic(fd){
        return axios({
            url:'/pics/upload',
            method:'Post',
            data:fd
        })
    },

}
export default stuapi;