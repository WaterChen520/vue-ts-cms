<!--
 * @Description: 账号登录组件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-29 16:47:39
 * @LastEditTime: 2021-08-30 13:34:28
 * @LastEditors: 安知鱼
-->

<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useStore } from "vuex";
import { ElForm } from "element-plus";
import { rules } from "../config/account-config";
import cache from "@/utils/cache";

export default defineComponent({
  setup() {
    const store = useStore();

    const account = reactive({
      name: cache.getCache("name") ?? "coderwhy",
      password: cache.getCache("password") ?? "123456",
    });

    const formRef = ref<InstanceType<typeof ElForm>>();

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1.判断是否需要记住密码
          if (isKeepPassword) {
            // 本地缓存
            cache.setCache("name", account.name);
            cache.setCache("password", account.password);
          } else {
            cache.deleteCache("name");
            cache.deleteCache("password");
          }
          // 2.开始进行登录验证
          store.dispatch("login/accountLoginAction", { ...account });
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
