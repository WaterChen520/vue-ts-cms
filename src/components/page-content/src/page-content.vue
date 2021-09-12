<!--
 * @Description: 封装page-content
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-10 15:08:23
 * @LastEditTime: 2021-09-12 13:31:38
 * @LastEditors: 安知鱼
-->
<template>
  <div class="page-content">
    <an-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <!-- 1.head中的插槽 -->
      <template #headerHandler v-if="contentTableConfig.increaseTitle">
        <el-button type="primary" size="medium" v-if="isCreate">
          {{ contentTableConfig.increaseTitle }}
        </el-button>
      </template>

      <!-- 2.列中的插槽 -->
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt, "YYYY-MM-DD") }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <div class="handle-btns">
          <el-button icon="el-icon-edit" size="mini" type="text" v-if="isUpdate"
            >编辑</el-button
          >
          <el-button
            icon="el-icon-delete"
            size="mini"
            type="text"
            v-if="isDelete"
            >删除</el-button
          >
        </div>
      </template>
      <!-- 在page-content中动态插入剩余的插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </an-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue";
import { useStore } from "@/store";
import { usePermission } from "@/hooks/use-permissions";

import AnTable from "@/base-ui/table";

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

    // 1. 获取操作权限
    const isCreate = usePermission(props.pageName, "create");
    const isUpdate = usePermission(props.pageName, "update");
    const isDelete = usePermission(props.pageName, "delete");
    const isQuery = usePermission(props.pageName, "query");

    // 2.双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 });
    watch(pageInfo, () => getPageData());

    // 3.发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return;
      store.dispatch("system/getPageListAction", {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo,
        },
      });
    };
    getPageData();

    // 4.从vuex中获取数据
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    );
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    );

    // 5.获取其他的动态插槽名称
    const otherPropSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        if (item.slotName === "creatAt") return false;
        if (item.slotName === "updateAt") return false;
        if (item.slotName === "handler") return false;
        return true;
      }
    );

    return {
      pageInfo,
      dataList,
      dataCount,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      getPageData,
    };
  },
});
</script>

<style scoped>
.page-content {
  padding-top: 20px;
}
</style>
