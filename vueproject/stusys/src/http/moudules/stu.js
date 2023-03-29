import axios from 'axios';
const stuapi={
    get(){
        return axios({
            url:'/index/get',
            method:'GET'
        })
    }
}
export default stuapi;