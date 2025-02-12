<template>
  <div class="dashboard">
    <!-- 1.顶部数据统计 -->
    <el-row :gutter="10">
      <template v-for="item in topPanelData.data" :key="item.title">
        <el-col :md="12" :lg="6" :xl="6">
          <statistical-panel :panelData="item" />
        </el-col>
      </template>
    </el-row>

    <!-- 2.中间图表 -->
    <el-row :gutter="10">
      <el-col :span="7">
        <an-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </an-card>
      </el-col>
      <el-col :span="10">
        <an-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </an-card>
      </el-col>
      <el-col :span="7">
        <an-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </an-card>
      </el-col>
    </el-row>

    <!-- 3.底部图表 -->
    <div class="content-row">
      <el-row :gutter="10">
        <el-col :span="12">
          <an-card title="分类商品的销量">
            <line-echart v-bind="categoryGoodsSale"></line-echart>
          </an-card>
        </el-col>
        <el-col :span="12">
          <an-card title="分类商品的收藏">
            <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
          </an-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import AnCard from '@/base-ui/card'
import StatisticalPanel from '@/components/statistical-panel'
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from '@/components/page-echarts'

export default defineComponent({
  name: 'dashboard',
  components: {
    AnCard,
    StatisticalPanel,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart
  },
  setup() {
    const store = useStore()
    // 请求数据
    store.dispatch('dashboard/getDashboardDataAction')

    // 获取数据
    const topPanelData = computed(() => store.state.dashboard.topPanelDatas)
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })
    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }
      return { xLabels, values }
    })
    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }
      return { xLabels, values }
    })
    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })

    return {
      topPanelData,
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    }
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 10px;
}
</style>
