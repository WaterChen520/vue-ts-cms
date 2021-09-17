<template>
  <div class="chat">
    <an-editor v-model:value="htmlString" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AnEditor from "@/base-ui/editor";

export default defineComponent({
  name: "chat",
  components: {
    AnEditor,
  },
  setup() {
    const htmlString = ref<string>("你好鸭");
    return {
      htmlString,
    };
  },
});
</script>

<style scoped></style>
