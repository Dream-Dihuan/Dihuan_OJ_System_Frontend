import type { RouteRecordRaw } from "vue-router";

export interface userState{
  token:string,
  name:string,
  username:string,
  asyncRoutesPermissionNameList:string[],
  accessRoutesList:Array<RouteRecordRaw>,
  navigationRoutesList:Array<RouteRecordRaw>
}