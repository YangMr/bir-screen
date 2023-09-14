import { getParkInfo } from '@/api/park'
import type { ParkResponseType } from '@/types/park'
import { ref, onMounted } from 'vue'
export const useInitParkInfo = () => {
  // 保存的园区的数据(概况、年度收入、产业分布)
  const parkInfo = ref<ParkResponseType>()
  // 获取园区数据
  const initParkInfo = async () => {
    const res = await getParkInfo()
    console.log('res', res)
    parkInfo.value = res.data
  }
  return { parkInfo, initParkInfo }
}
