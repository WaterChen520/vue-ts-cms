<!--
 * @Description: table组件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-07 15:35:21
 * @LastEditTime: 2021-09-07 16:27:59
 * @LastEditors: 安知鱼
-->
<template>
  <div class="an-table">
    <el-card shadow="hover">
      <el-table :data="listData" border style="width: 100%">
        <template v-for="propItem in propList" :key="propItem.prop">
          <el-table-column v-bind="propItem" align="center">
            <template #default="scope">
              <slot :name="propItem.soltName" :row="scope.row">
                {{ scope.row[propItem.prop] }}
              </slot>
            </template>
          </el-table-column>
        </template>
      </el-table>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    propList: {
      type: Array,
      required: true,
    },
    listData: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
