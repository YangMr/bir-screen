import type { ParkResponseType } from '@/types/park'
import { ref } from 'vue'
// 引入echarts
import * as echarts from 'echarts'

export const useInitPieChart = () => {
  // 保存饼图的dom节点
  const pieChart = ref(null)

  const initPieChart = (parkInfo: ParkResponseType) => {
    // 1. 获取园区产业分布数据
    const { parkIndustry } = parkInfo

    // 2. 实例化echarts,并指定渲染的dom容器
    const myPieChart = echarts.init(pieChart.value)

    // 3. 创建配置项
    const option = {
      color: ['#00B2FF', '#2CF2FF', '#892CFF', '#FF624D', '#FFCF54', '#86ECA2'],
      tooltip: {
        trigger: 'item'
      },
      legend: {
        itemGap: 10,
        bottom: '0',
        left: 'center',
        icon: 'rect',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: '#c6d1db'
        }
      },
      series: [
        {
          tooltip: {
            trigger: 'item',
            formatter: (params: any) => {
              console.log('params', params)
              return `${params.seriesName}<br/>${params.marker}${params.name}${params.percent}%`
            }
          },
          name: '园区产业分析',
          type: 'pie',
          radius: ['55%', '60%'],
          center: ['50%', '38%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          labelLine: {
            show: false
          },
          data: parkIndustry
        }
      ]
    }

    // 4. 渲染配置项
    myPieChart && myPieChart.setOption(option)

    // 5. 图表自适应
  }

  return { pieChart, initPieChart }
}
