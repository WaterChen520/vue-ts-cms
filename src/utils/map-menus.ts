/*
 * @Description: 处理路由映射/动态路由
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-01 08:33:41
 * @LastEditTime: 2021-09-05 12:57:49
 * @LastEditors: 安知鱼
 */

import { RouteRecordRaw } from "vue-router";

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  // 1.先加载默认所有的路由routes
  const allRoutes: RouteRecordRaw[] = [];

  /**
   * @Description:  require.context webpack中的函数,
   * @Author: 安知鱼
   * 第一个参数表示查找路径
   * 第二个参数表示是否递归查找文件夹下的文件，true为是
   * 第三个参数表示查找的后缀，此处匹配所有ts文件（包括tsx）
   */
  const routeFiles = require.context("../router/main", true, /\.ts/);
  routeFiles.keys().forEach((key) => {
    // 对路径进行处理，以点分割 "/system/user/user"
    const route = require("../router/main" + key.split(".")[1]);
    allRoutes.push(route.default);
  });

  // 2.根据菜单添加需要获取的路由routes
  // userMenus:
  // type === 1 -> children -> type === 1
  // type === 2 -> url -> route
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      // 判断是否含有父节点
      // 有子节点 type: 1
      // 无子节点 type: 2
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url);
        if (route) routes.push(route);
      } else {
        _recurseGetRoute(menu.children);
      }
    }
  };

  _recurseGetRoute(userMenus);

  return routes;
}
