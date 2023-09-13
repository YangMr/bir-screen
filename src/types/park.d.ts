// 园区概览
export type BaseType = {
  // 楼宇总数
  buildingTotal: number
  // 一体杆总数
  chargePoleTotal: number
  // 入住企业总数
  enterpriseTotal: number
  // 车位总数
  parkingTotal: number
}

// 园区年度收入分析
export type ParkIncomeType = {
  // 月份
  xMonth: string[]
  // 收入
  yIncome: number[]
}

// 园区产业分布
export type ParkIndustryType = {
  // 产业名称
  name: string
  // 产业值
  value: number
}

export type ParkResponseType = {
  base: BaseType
  parkIncome: ParkIncomeType
  parkIndustry: ParkIndustryType[]
}
