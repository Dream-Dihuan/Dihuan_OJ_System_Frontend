import router from "./router"
import { calculateAccessRoutes, calculateNavigationMenu } from "./router/routes"
import useUserStore from "./store/modules/user"
import pinia from '@/store/index'
const userStore = useUserStore(pinia)

router.beforeEach(async(to,from,next)=>{
  document.title= `迪幻OJ判题系统 - ${to.meta.title}`
  next()
  // 用户没有登录
  if(!userStore.token){
    next({path:'/login',query:{redirect:to.path}})
  }else{
    // 已登录不能返回登录页
    if(to.path=='/login'){
      next({path:'/'})
    }
  }

  // 没有用户信息
  if(!userStore.username){
    
    try{
      //获取用户信息
      await userStore.getUserInfo(userStore.token)
      calculateAccessRoutes()
      calculateNavigationMenu()
  
      next({...to})
    }catch{
      // token过期，用户登出
      userStore.userLogOut()
      next({path:'/login',query:{redirect:to.path}})
    }
  }

  next()
})
