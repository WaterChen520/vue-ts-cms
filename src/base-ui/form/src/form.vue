<!--
 * @Description: form公共组件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-05 16:59:30
 * @LastEditTime: 2021-09-10 17:03:49
 * @LastEditors: 安知鱼
-->
<template>
  <div class="an-form">
    <el-card shadow="hover">
      <div class="header">
        <slot name="header"></slot>
      </div>
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
                    v-model="formData[`${item.field}`]"
                  />
                </template>
                <template v-else-if="item.type === 'select'">
                  <el-select
                    :placeholder="item.placeholder"
                    style="width: 100%"
                    v-bind="item.otherOptions"
                    v-model="formData[`${item.field}`]"
                  >
                    <el-option
                      v-for="option in item.options"
                      :key="option.value"
                      :label="option.title"
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
                    v-model="formData[`${item.field}`]"
                  ></el-date-picker>
                </template>
              </el-form-item>
            </el-col>
          </template>
        </el-row>
      </el-form>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue";
import { IFormItem } from "../types";

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
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
  emits: ["upadate:modelValue"],
  setup(props, { emit }) {
    // 进行浅拷贝，不直接使用v-model绑定props.modelValue的原因是为了不修改props的引用
    const formData = ref({ ...props.modelValue });

    watch(
      formData,
      (newValue) => {
        emit("upadate:modelValue", newValue);
      },
      {
        deep: true,
      }
    );

    return {
      formData,
    };
  },
});
</script>

<style scoped lang="less"></style>
