/*
 * @Description: service统一出口
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-28 15:37:10
 * @LastEditTime: 2021-08-28 17:15:33
 * @LastEditors: 安知鱼
 */

import ANRequest from "./request";

import { BASE_URL, TIME_OUT } from "./request/config";

const anRequest = new ANRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = "";
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },
    responseInterceptor: (res) => {
      return res;
    },
    responseInterceptorCatch: (err) => {
      return err;
    },
  },
});

export default anRequest;
