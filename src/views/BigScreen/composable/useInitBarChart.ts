// 引入echarts
import type { ParkResponseType } from '@/types/park'
import * as echarts from 'echarts'
import { ref } from 'vue'
export const useInitBarChart = () => {
  // 渲染echarts图表方法
  // 1. 下载并引入echarts
  // 2. 获取渲染的dom容器(获取dom节点)
  // 保存柱状图的dom节点
  const barChart = ref(null)
  const initBarChart = (parkInfo: ParkResponseType) => {
    // 获取园区年度收入分析数据
    const { parkIncome } = parkInfo
    console.log(parkIncome)

    // 3. 初始化echarts并指定渲染的容器
    const myBarChart = echarts.init(barChart.value)
    // 4. 设置配置项

    const barOption = {
      tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        top: '10px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: parkIncome.xMonth,
        axisTick: {
          show: false,
          alignWithLabel: true
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: false
        }
      },
      textStyle: {
        color: '#b4c0cc'
      },
      series: [
        {
          data: parkIncome.yIncome.map((item: any, index: number) => {
            const color =
              index % 2 === 0
                ? {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: '#74c0f8' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: 'rgba(116,192,248,0)' // 100% 处的颜色
                      }
                    ],
                    global: false // 缺省为 false
                  }
                : {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: '#ff7152' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: 'rgba(255,113,82,0)' // 100% 处的颜色
                      }
                    ],
                    global: false // 缺省为 false
                  }
            return { value: item, itemStyle: { color } }
          }),
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          },
          barWidth: '10px'
        }
      ]
    }

    // 5. 渲染图表
    myBarChart && myBarChart.setOption(barOption)
    // 6. 设置图表自适应
    // window.addEventListener('resize', () => {
    //   myPieChart.resize()
    // })
  }
  return {
    barChart,
    initBarChart
  }
}
