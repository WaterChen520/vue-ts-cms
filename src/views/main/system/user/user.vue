<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />

    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
    >
      <template #enable="scope">
        <el-button
          size="mini"
          plain
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? "启用" : "禁用" }}</el-button
        >
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content/index";

import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";

import { usePageSearch } from "@/hooks/use-page-search";

export default defineComponent({
  name: "users",
  components: {
    PageSearch,
    PageContent,
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] =
      usePageSearch();
    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
    };
  },
});
</script>

<style scoped lang="less"></style>
