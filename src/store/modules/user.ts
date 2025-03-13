import { defineStore } from 'pinia'
import type { userState } from './types/user'

let useUserStore = defineStore('User',{
  state:():userState=>{
    return {
      token:'this is a period of token string',
      name:'迪幻',
      username:'dihuan',
      asyncRoutesPermissionNameList:['admin'],
      accessRoutesList:[],
      navigationRoutesList:[]
    }
  },
  actions:{
    /**
     * 获取用户信息
     * @param token 用户token
     */
    async getUserInfo(token:string) {
      this.$state.name=token
    },

    /**
     * 用户登录
     * @param username 用户名 
     * @param password 用户密码
     * @param captchaId 验证码ID
     * @param captchaCode 验证码Code
     */
    async userLogin(username:string,password:string,captchaId:string,captchaCode:string) {

    },

    /**
     * 退出登录账号
     */
    async userLogOut(){
      this.$state={
        token:'',
        name:'',
        username:'',
        asyncRoutesPermissionNameList:[],
        accessRoutesList:[],
        navigationRoutesList:[]
      }
    }
  }
})
export default useUserStore
