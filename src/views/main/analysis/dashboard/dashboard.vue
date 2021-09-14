<template>
  <div class="dashboard">
    <!-- 1.顶部数据统计 -->
    <el-row :gutter="10">
      <template v-for="item in topPanelData" :key="item.title">
        <el-col :md="12" :lg="6" :xl="6">
          <statistical-panel :panelData="item" />
        </el-col>
      </template>
    </el-row>

    <!-- 2.中间图表 -->
    <el-row :gutter="10">
      <el-col :span="7">
        <an-card title="分类商品数量(饼图)"></an-card>
      </el-col>
      <el-col :span="10">
        <an-card title="不同城市商品销量"></an-card>
      </el-col>
      <el-col :span="7">
        <an-card title="分类商品数量(玫瑰图)"></an-card>
      </el-col>
    </el-row>

    <!-- 3.底部图表 -->
    <div class="content-row">
      <el-row :gutter="10">
        <el-col :span="12">
          <an-card title="分类商品的销量">
            <base-echart :options="options"></base-echart>
          </an-card>
        </el-col>
        <el-col :span="12">
          <an-card title="分类商品的收藏"></an-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

import AnCard from "@/base-ui/card";
import BaseEchart from "@/base-ui/echart";

export default defineComponent({
  name: "dashboard",
  components: {
    AnCard,
    BaseEchart,
  },
  setup() {
    const store = useStore();
    store.dispatch("dashboard/getDashboardDataAction");

    const options = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
      ],
    };
    return {
      options,
    };
  },
});
</script>

<style scoped>
.content-row {
  margin-top: 10px;
}
</style>
