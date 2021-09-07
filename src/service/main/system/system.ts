/*
 * @Description: 系统管理请求
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-07 14:33:55
 * @LastEditTime: 2021-09-07 15:05:34
 * @LastEditors: 安知鱼
 */
import anRequest from "@/service/index";
import { IDataType } from "../../types";

export function getPageListData(url: string, queryInfo: any) {
  return anRequest.post<IDataType>({
    url: url,
    data: queryInfo,
  });
}
