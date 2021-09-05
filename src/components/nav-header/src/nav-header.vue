<!--
 * @Description: Heard组件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-30 17:21:27
 * @LastEditTime: 2021-09-05 15:44:48
 * @LastEditors: 安知鱼
-->
<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <div>面包屑</div>
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import UserInfo from "./user-info.vue";

export default defineComponent({
  components: {
    UserInfo,
  },
  emits: ["foldChange"],
  setup(props, { emit }) {
    const isFold = ref(false);
    const handleFoldClick = () => {
      isFold.value = !isFold.value;
      emit("foldChange", isFold.value);
    };

    return {
      isFold,
      handleFoldClick,
    };
  },
});
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
