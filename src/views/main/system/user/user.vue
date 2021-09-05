<template>
  <div class="user">
    <AnForm v-bind="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AnForm from "@/base-ui/form";
import { searchFormConfig } from "./config/search.config";
export default defineComponent({
  name: "user",
  components: {
    AnForm,
  },
  setup() {
    return {
      searchFormConfig,
    };
  },
});
</script>

<style scoped></style>
