<!--
 * @Description: 封装page-content
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-10 15:08:23
 * @LastEditTime: 2021-09-10 16:26:58
 * @LastEditors: 安知鱼
-->
<template>
  <div class="page-content">
    <an-table :listData="dataList" v-bind="contentTableConfig">
      <!-- 1.head中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" size="medium">新建用户</el-button>
      </template>

      <!-- 2.列中的插槽 -->
      <template #status="scope">
        <el-button
          size="mini"
          plain
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? "启用" : "禁用" }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt, "YYYY-MM-DD") }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <div class="handle-btns">
          <el-button icon="el-icon-edit" size="mini" type="text"
            >编辑</el-button
          >
          <el-button icon="el-icon-delete" size="mini" type="text"
            >删除</el-button
          >
        </div>
      </template>
    </an-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import AnTable from "@/base-ui/table";
import { useStore } from "@/store";

export default defineComponent({
  components: {
    AnTable,
  },
  props: {
    contentTableConfig: {
      type: Object,
      required: true,
    },
    pageName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    store.dispatch("system/getPageListAction", {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10,
      },
    });

    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    );
    // const userCount = computed(() => store.state.system.userCount);
    return {
      dataList,
    };
  },
});
</script>

<style scoped>
.page-content {
  padding-top: 20px;
}
</style>
