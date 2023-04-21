import axios from "axios";
import { ElMessage, ElMessageBox } from 'element-plus';
import router from '@/router/index';
//给axios添加请求拦截器
axios.interceptors.request.use(
    (config)=>{
        //将所有axios请求头添加token
        config.headers.Authorization='bearer '+localStorage.token;
        return config
    },
    (err)=>{
        return Promise.reject(err)
    })
//给axios添加响应拦截器
axios.interceptors.response.use(
    //响应成功
    (res)=>{
        return res;//可以返回res.data，这样在其他组件处理axios返回值时可以不用解构data {data}
    },
    //响应失败
    (err)=>{
        if(err.response.status==401){
            ElMessageBox.confirm(
                '请重新登陆',
                'token失效',
                {
                  confirmButtonText: '好的',
                  cancelButtonText: '取消',
                  type: 'warning',
                }
              )
                .then(() => {
                  router.push('/login')
                })
                .catch(() => {
                  ElMessage({
                    type: 'info',
                    message: '操作取消',
                  })
                })
        }else{
            return Promise.reject(err)
        }
    })