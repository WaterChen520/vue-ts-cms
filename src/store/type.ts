/*
 * @Description: store类型定义文件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-30 10:32:57
 * @LastEditTime: 2021-08-31 09:18:11
 * @LastEditors: 安知鱼
 */
import { ILoginState } from "./login/type";

export interface IRootStore {
  name: string;
  age: number;
}

export interface IRootWithModule {
  login: ILoginState;
}

export type IStoreType = IRootStore & IRootWithModule;
