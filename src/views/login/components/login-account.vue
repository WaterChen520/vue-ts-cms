<!--
 * @Description: 账号登录组件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-29 16:47:39
 * @LastEditTime: 2021-08-30 09:31:38
 * @LastEditors: 高桥凉介
-->

<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { ElForm } from "element-plus";

import { rules } from "../config/account-config";

export default defineComponent({
  setup() {
    const account = reactive({
      name: "",
      password: "",
    });

    const formRef = ref<InstanceType<typeof ElForm>>();

    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log("验证通过");
        }
      });
    };

    return {
      loginAction,
      account,
      rules,
      formRef,
    };
  },
});
</script>

<style scoped></style>
