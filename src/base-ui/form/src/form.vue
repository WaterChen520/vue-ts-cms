<!--
 * @Description: form公共组件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-05 16:59:30
 * @LastEditTime: 2021-09-05 19:12:31
 * @LastEditors: 安知鱼
-->
<template>
  <div class="an-form">
    <el-card shadow="hover">
      <el-form :label-width="labelWidth">
        <el-row>
          <template v-for="item in formItems" :key="item.label">
            <el-col v-bind="colLayout">
              <el-form-item
                :label="item.label"
                :rules="item.rules"
                :style="item.itemStyle ? item.itemStyle : itemLayout"
              >
                <template
                  v-if="item.type === 'input' || item.type === 'password'"
                >
                  <el-input
                    :placeholder="item.placeholder"
                    :show-password="item.type === 'password'"
                    v-bind="item.otherOptions"
                  />
                </template>
                <template v-else-if="item.type === 'select'">
                  <el-select
                    :placeholder="item.placeholder"
                    style="width: 100%"
                    v-bind="item.otherOptions"
                  >
                    <el-option
                      v-for="option in item.options"
                      :key="option.value"
                      :value="option.value"
                    >
                      {{ option.title }}
                    </el-option>
                  </el-select>
                </template>
                <template v-else-if="item.type === 'datepicker'">
                  <el-date-picker
                    style="width: 100%"
                    v-bind="item.otherOptions"
                  ></el-date-picker>
                </template>
              </el-form-item>
            </el-col>
          </template>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IFormItem } from "../types";

export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => [],
    },
    labelWidth: {
      type: String,
      default: "100px",
    },
    itemLayout: {
      type: Object,
      default: () => ({ padding: "10px 40px" }),
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920px 4个
        lg: 8, // >1200px 3个
        md: 12, // >992px 2个
        sm: 24, // >768px 1个
        xs: 24, // <768px 1个
      }),
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="less">
.an-form {
  padding-top: 22px;
}
</style>
