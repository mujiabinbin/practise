import axios from "axios";
const indexapi={
    get(){
        return axios({
            url:'/index/get',
            method:'GET'
        })
    }
}
export default indexapi;