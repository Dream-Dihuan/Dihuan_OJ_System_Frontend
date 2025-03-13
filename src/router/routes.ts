import useUserStore from "@/store/modules/user";
import type { RouteRecordRaw } from "vue-router";
import pinia from "@/store";
import { routeType } from "./routeType";
let userStroe = useUserStore(pinia);



// 常量路由
const constantRoutes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta:{
      label:'主页',
      title:'主页面',
      type:[routeType.Navigation]
    },
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/about',
    name: '关于我们',
    meta:{
      label:'关于我们',
      title:'关于我们',
      type:[routeType.Navigation]
    },

    component: () => import('../views/AboutView.vue'),
  },
  {
    path:'/NotFound',
    name:'NotFound',
    meta:{
      label:'资源丢失页',
      title:'未找到相关资源',
      type:[routeType.Hidden]
    },
    component:() => import('@/views/NotFound/NotFound.vue')
  },
]

// 异步路由
const asyncRoutes:Array<RouteRecordRaw> = [
  {
    path: '/admin',
    name: 'admin',
    meta:{
      label:'管理页面',
      title:'管理员管理页面',
      type:[routeType.Navigation]
    },
    component: () => import('../views/AdminView/AdaminView.vue'),
  },
]

// 任意路由
const anyRoutes:Array<RouteRecordRaw> = [
  {
    //任意路由
    path: '/:pathMatch(.*)*',
    redirect: '/NotFound',
    name: 'Any',
    meta:{
      label:'资源丢失页',
      title:'未找到相关资源',
      type:[routeType.Hidden]
    },
  },
]

// 计算可访问路由
export const calculateAccessRoutes = (routesName:string[] = userStroe.$state.asyncRoutesPermissionNameList) => {
  let accessRoutesList = [...constantRoutes,...anyRoutes]
  asyncRoutes.forEach(item =>{
    if(routesName.includes(item.name as string)&&!item.meta?.type.includes(routeType.Hidden)){
      accessRoutesList.push(item)
    }
  })
  return accessRoutesList
}


// 计算导航路由
export const calculateNavigationMenu = (asyncRoutesNameList:string[]  = userStroe.$state.asyncRoutesPermissionNameList):Array<RouteRecordRaw> => {
  let navigationRoutes:Array<RouteRecordRaw> =[]
  constantRoutes.forEach(item=>{
    if(item.meta?.type.includes(routeType.Navigation)){
      navigationRoutes.push(item)
      
    }
  })
  asyncRoutes.forEach(item=>{
    if(asyncRoutesNameList.includes(item.name as string)&&item.meta?.type.includes(routeType.Navigation)&&!item.meta?.type.includes(routeType.Hidden)){
      navigationRoutes.push(item)
    }
  })
  return navigationRoutes;
}