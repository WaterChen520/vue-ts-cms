/*
 * @Description: Echarts公共逻辑
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-16 09:09:40
 * @LastEditTime: 2021-09-16 15:24:01
 * @LastEditors: 安知鱼
 */

import * as echarts from 'echarts'

import ChinaMapData from '../data/china.json'

echarts.registerMap('china', ChinaMapData)

export default function (el: HTMLElement, theme = 'light') {
  const echartInstance = echarts.init(el, theme, { renderer: 'svg' })
  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }
  const updateSize = () => {
    echartInstance.resize()
  }

  window.addEventListener('resize', () => {
    echartInstance.resize()
  })

  return {
    echartInstance,
    setOptions,
    updateSize
  }
}
