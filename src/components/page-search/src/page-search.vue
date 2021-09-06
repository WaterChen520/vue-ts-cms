<!--
 * @Description: page-search组件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-06 16:59:13
 * @LastEditTime: 2021-09-06 17:10:06
 * @LastEditors: 安知鱼
-->
<template>
  <div class="page-search">
    <AnForm v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2>高级检索</h2>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <el-button icon="el-icon-refresh-right">重置</el-button>
        </div>
      </template>
    </AnForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AnForm from "@/base-ui/form";

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true,
    },
  },
  components: {
    AnForm,
  },
  setup() {
    const formData = ref({
      id: "",
      name: "",
      password: "",
      sport: "",
      createTime: "",
    });
    return {
      formData,
    };
  },
});
</script>

<style scoped>
.handle-btns {
  text-align: right;
  padding: 0px 20px 20px 0px;
}
</style>
