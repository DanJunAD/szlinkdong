<template>
  <div class="production-cards-content">
    <el-row>
      <el-col :span="8" v-for="(item, index) in getCurrentList" :key="index">
        <el-card shadow="hover" class="custom-card">
          <img :src="item.img" />
          <span class="name">{{item.name}}</span>
          <div class="custom-button">More +</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import tekcgq1 from '@/assets/tekcgq-1.jpg';
import tekcgq2 from '@/assets/tekcgq-2.jpg';
import tekcgq3 from '@/assets/tekcgq-3.jpg';
import tekcgq4 from '@/assets/tekcgq-4.jpg';
import tekcgq5 from '@/assets/tekcgq-5.jpg';
import sfyj1 from '@/assets/sfyj-1.jpg';
import sfyj2 from '@/assets/sfyj-2.jpg';
import sfyj3 from '@/assets/sfyj-3.jpg';
import RFIDdzbq1 from '@/assets/RFIDdzbq-1.jpg';
import RFIDdzbq2 from '@/assets/RFIDdzbq-2.jpg';

export default {
  props: ['productionType'],
  data() {
    return {
      tekcgq_list: [
        { img: tekcgq1, name: '高频（HF）读写头' },
        { img: tekcgq2, name: '高频（HF）手持读写器' },
        { img: tekcgq3, name: '超高频（UHF）读写头' },
        { img: tekcgq4, name: 'RFID电子模块与接插件' },
        { img: tekcgq5, name: 'IO模块' },
      ],
      sfyj_list: [
        { img: sfyj1, name: 'VMP精密型' },
        { img: sfyj2, name: 'VMP直联型' },
        { img: sfyj3, name: 'VMP折弯型' },
      ],
      RFIDdzbq_list: [
        { img: RFIDdzbq1, name: 'RFID高频电子标签' },
        { img: RFIDdzbq2, name: 'RFID超高频电子标签' },
      ],
    }
  },
  computed: {
    getCurrentList () {
      console.log(11111, this.productionType);
      const name = `${this.productionType}_list`;
      return this[name];
    }
  },
  methods: {
    
  },
}
</script>
<style scoped lang="less">
.production-cards-content {
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  .custom-card {
    /deep/ .el-card__body {
      display: flex;
      flex-direction: column;
      align-items: center;
      .name {
        display: inline-block;
        margin: 10px 0;
      }
      .custom-button {
        width: 150px;
        height: 30px;
        line-height: 30px;
        border: 1px solid #cbcbcb;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
          color: #fff;
          background-color: #be3216;
        }
      }
    }
    margin: 10px;
    background-color: #f0f0f0;
    cursor: pointer;
    color: #000;
    font-size: 16px;
    &:hover {
      img {
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-name: fadeIn;
      }
    }
  }
}
@keyframes fadeIn {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.1);
  }
}
</style>