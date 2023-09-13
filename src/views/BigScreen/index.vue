<script setup lang="ts">
import { getParkInfo } from '@/api/park'
import type { ParkResponseType } from '@/types/park'
import { ref } from 'vue'

const parkInfo = ref<ParkResponseType>()
const initParkInfo = async () => {
  const res = await getParkInfo()
  console.log('res', res)
  parkInfo.value = res.data
}

initParkInfo()
</script>

<template>
  <div class="all-charts">
    <div class="section-one">
      <img
        class="img-header"
        src="https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/smartPark/%E5%A4%A7%E5%B1%8F%E5%88%87%E5%9B%BE/%E5%9B%AD%E5%8C%BA%E6%A6%82%E5%86%B5%402x.png"
        alt="logo"
      />
      <div class="icons-container">
        <div class="item">
          <div class="icons-item building-icon">
            <span class="number"> {{ parkInfo?.base.buildingTotal }} </span>
          </div>
          <span class="title">楼宇总数</span>
          <span class="unity">（栋）</span>
        </div>
        <div class="item">
          <div class="icons-item enterprise-icon">
            <span class="number"> {{ parkInfo?.base.enterpriseTotal }} </span>
          </div>
          <span class="title">入驻企业总数</span>
          <span class="unity">（家）</span>
        </div>
        <div class="item">
          <div class="icons-item rod-icon">
            <span class="number"> {{ parkInfo?.base.parkingTotal }}</span>
          </div>
          <span class="title">车位总数</span>
          <span class="unity">（个）</span>
        </div>
        <div class="item">
          <div class="icons-item car-icon">
            <span class="number"> {{ parkInfo?.base.chargePoleTotal }} </span>
          </div>
          <span class="title">一体杆总数</span>
          <span class="unity">（个）</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.all-charts {
  position: absolute;
  left: 0;
  top: 0;
  width: 480px;
  height: 100vh;
  padding: 20px;
  background: linear-gradient(
    to left,
    rgba(0, 6, 15, 0) 0%,
    rgba(0, 6, 15, 0) 20%,
    rgba(0, 0, 0, 0.4) 30%,
    rgba(0, 0, 0, 0.6) 40%,
    rgba(1, 4, 11, 1) 70%,
    #04070d 100%
  );

  .img-header {
    height: 30px;
  }

  .section-one {
    // flex-basis: 25%;
    .icons-container {
      display: flex;
      justify-content: space-between;
      padding: 20px 0;

      .item {
        display: flex;
        flex: 1;
        flex-direction: column;
        text-align: center;

        .icons-item {
          height: 80px;
          position: relative;

          .number {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            font-size: 18px;
            color: #fff;
          }
        }

        .building-icon {
          background: url('@/assets/building-icon.png') no-repeat 50% 0 /
            contain;
        }
        .enterprise-icon {
          background: url('@/assets/enterprise-icon.png') no-repeat 50% 0 /
            contain;
        }
        .rod-icon {
          background: url('@/assets/rod-icon.png') no-repeat 50% 0 / contain;
        }
        .car-icon {
          background: url('@/assets/car-icon.png') no-repeat 50% 0 / contain;
        }

        .title {
          margin-top: 8px;
        }

        .title,
        .unity {
          font-size: 14px;
          color: #cdd7e1;
        }
      }
    }
  }
}
</style>
