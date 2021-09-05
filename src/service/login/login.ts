/*
 * @Description: 登录请求
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-30 12:58:50
 * @LastEditTime: 2021-09-05 13:10:46
 * @LastEditors: 安知鱼
 */
import anRequest from "../index";

import { IAccount, IDataType, ILoginResult } from "./type";

enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users/",
  UserMenus = "/role/",
}

/**
 * @Description: 账户登录请求
 * @Author: 安知鱼
 * @param  {*}
 * @return {*}
 * @param {IAccount} account
 */
export function accountLoginRequest(account: IAccount) {
  return anRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account,
  });
}

/**
 * @Description: 根据id请求用户信息
 * @Author: 安知鱼
 * @param  {*}
 * @return {*}
 * @param {number} id
 */
export function requestUserInfoById(id: number) {
  return anRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
  });
}

/**
 * @Description: 根据用户Id获取菜单
 * @Author: 安知鱼
 * @param  {*}
 * @return {*}
 * @param {number} id
 */
export function requestUserMenusById(id: number) {
  return anRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + "/menu",
  });
}
