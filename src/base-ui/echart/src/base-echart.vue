<!--
 * @Description: echart组件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-14 17:26:11
 * @LastEditTime: 2021-09-14 17:49:33
 * @LastEditors: 安知鱼
-->
<template>
  <div class="base-echart">
    <div
      ref="echartDivRef"
      :style="{ width: echartWidth, height: echartHeight }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults } from "vue";
import * as echarts from "echarts";
import { EChartsOption } from "echarts";

// 定义props,使用泛型定义Props的类型
const props = withDefaults(
  defineProps<{
    options: EChartsOption;
    echartWidth?: string;
    echartHeight?: string;
  }>(),
  {
    echartWidth: "100%",
    echartHeight: "360px",
  }
);

const echartDivRef = ref<HTMLElement>();

onMounted(() => {
  const echartInstance = echarts.init(echartDivRef.value!);

  echartInstance.setOption(props.options);
});
</script>

<style scoped></style>
