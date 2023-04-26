import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const{resolve} = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //路径别名配置
  resolve:{
    alias:[
      {find:'@',replacement:resolve(__dirname,'src')}
    ]
  }
})
