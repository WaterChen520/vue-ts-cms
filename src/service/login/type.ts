/*
 * @Description: 登录请求 定义类型
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-30 13:01:03
 * @LastEditTime: 2021-08-30 14:05:53
 * @LastEditors: 安知鱼
 */

export interface IAccount {
  name: string;
  password: string;
}

export interface ILoginResult {
  id: number;
  name: string;
  token: string;
}

export interface IDataType<T = any> {
  code: number;
  data: T;
}
