import axios from "axios";
import router from '@/router/index'
const loginapi={

    login(data){
        return axios({
            url:"/users/login",
            method:"POST",
            data
        })
    },
    getuserinfo(){
        return axios({
            url:"/users/islogin",
            headers:{
                //method为get省略不写，但还是有参数，通过headers传
                Authorization:`bearer ` + localStorage.token
            },
        })
    }

}
export default loginapi