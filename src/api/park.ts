import request from '@/utils/request'
import type { ParkResponseType } from '@/types/park'

// 获取园区数据
export const getParkInfo = () => {
  return request<ParkResponseType>('/park/statistics/info', 'GET')
}
