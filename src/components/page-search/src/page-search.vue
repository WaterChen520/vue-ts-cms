<!--
 * @Description: page-search组件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-06 16:59:13
 * @LastEditTime: 2021-09-13 14:43:41
 * @LastEditors: 安知鱼
-->
<template>
  <div class="page-search">
    <el-card shadow="hover">
      <AnForm v-bind="searchFormConfig" v-model="formData" ref="anForm">
        <template #header>
          <h2>高级检索</h2>
        </template>
        <template #footer>
          <div class="handle-btns">
            <el-button
              type="primary"
              icon="el-icon-search"
              @click="handleQueryClick"
              >搜索</el-button
            >
            <el-button icon="el-icon-refresh-right" @click="handleResetClick"
              >重置</el-button
            >
          </div>
        </template>
      </AnForm>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AnForm from '@/base-ui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    AnForm
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 双向绑定的属性应该是由配置文件的field来决定
    // 1.优化一：formData中的属性应该动态来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    // 2.优化二：当用户点击重置
    const anForm = ref<InstanceType<typeof AnForm>>()
    const handleResetClick = () => {
      // 这样修改是不能修改的，改不了浅拷贝出来的对象，得修改formDate内部的值
      // formData.value = formOriginData;
      // 比如这样:
      // 方法一：
      // for (const key in formOriginData) {
      //   formData.value[`${key}`] = formOriginData[key];
      // }
      // 方法二：
      // formData.value = formOriginData;
      // 方法三：
      anForm.value?.formRef?.resetFields()
      emit('resetBtnClick')
    }
    // 3.优化三：当用户点击搜索
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }
    return {
      anForm,
      formData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped>
.handle-btns {
  text-align: right;
  padding: 0px 20px 20px 0px;
}
</style>
