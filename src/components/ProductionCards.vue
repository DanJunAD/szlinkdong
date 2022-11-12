<template>
  <div class="production-cards-content">
    <div v-for="(item, index) in getCurrentList" :key="index">
      <el-card shadow="hover" class="custom-card">
        <img :src="item.img" />
        <span class="name">{{item.name}}</span>
        <div class="custom-button" @click="showDrawer(item)">More +</div>
      </el-card>
    </div>
    <el-drawer
      :title="newsObj.name"
      :visible.sync="isShowDrawer"
      size="50%"
      direction="rtl"
      :before-close="handleClose">
      <div class="drawer-content">
        <template v-for="item in newsObj.content">
          <p v-if="item.type === 'text'">{{item.content}}</p>
          <img v-if="item.type === 'img'" :src="item.content"/>
        </template>
      </div>
    </el-drawer>
  </div>
</template>
<script>
import sfyj1 from '@/assets/sfyj-1.png';
import sfyj2 from '@/assets/sfyj-2.png';
import sfyj3 from '@/assets/sfyj-3.png';
import sfdg1 from '@/assets/sfdg-1.png';
import sfdg2 from '@/assets/sfdg-2.png';
import case1 from '@/assets/case-1.png';

export default {
  props: ['productionType'],
  data() {
    return {
      newsObj: {},
      isShowDrawer: false,
      sfyj_list: [
        {
          img: sfyj1,
          name: '桌面式',
          content: [
            { type: 'text', content: '这里放产品介绍' },
          ]
        },
        {
          img: sfyj2,
          name: '工控',
          content: [
            { type: 'text', content: '这里放产品介绍' },
          ]
        },
        {
          img: sfyj3,
          name: '四柱式',
          content: [
            { type: 'text', content: '这里放产品介绍' },
          ]
        },
      ],
      sfdg_list: [
        {
          img: sfdg1,
          name: '直线式',
          content: [
            { type: 'text', content: '这里放产品介绍' },
          ]
        },
        {
          img: sfdg2,
          name: '折返式',
          content: [
            { type: 'text', content: '这里放产品介绍' },
          ]
        },
      ],
      case_list: [
        {
          img: case1,
          name: '数控伺服压装机案例',
          content: [
            { type: 'img', content: case1 },
            { type: 'text', content: '数控伺服压装机是制造业的重要装备之一，它更是现代信息产品、机械、电子、仪器等行业中的主要成形装备。传统压力机具有工艺可能性小、结构复杂、制造困难等缺点，随着机械加工领域的发展和成形工艺的提高，压力机的研制正向着高效率、高精度、高加工质量和柔性制造方向发展。伺服油压机结合传统压力机易操作、工作稳定等优点，充分利用伺服电机的可控性和数字化，大大提高了压力机的自动化、柔性化和加工范围。' },
            { type: 'text', content: '数控伺服压装机的用途：' },
            { type: 'text', content: '1、用于马达、汽车零件、家电、电子行业工装压制。' },
            { type: 'text', content: '2、用于压力恒压系统。' },
            { type: 'text', content: '3、用于压、伸力测试系统。' },
            { type: 'text', content: '4、金属或非金属零件的压印、成型、浅拉深、整形及压力装配等 眼镜、五金制品压制。' },
            { type: 'text', content: '5、可压制的产品有表壳、眼镜、手机制品、餐具、标牌、首饰，零件等的压制。' },
          ]
        },
      ],
    }
  },
  computed: {
    getCurrentList () {
      const name = `${this.productionType}_list`;
      return this[name];
    }
  },
  methods: {
    handleClose() {
      this.isShowDrawer = false;
    },
    showDrawer(obj) {
      this.newsObj = obj;
      this.isShowDrawer = true;
    }
  }
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
      img {
        width: 300px;
        height: 250px;
        object-fit: contain;
      }
      .name {
        display: inline-block;
        margin: 15px 0;
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
.drawer-content {
  padding: 20px;
  p {
    text-indent: 2em;
    line-height: 1.8;
    font-size: 16px;
  }
  img {
    width: 470px;
    object-fit: contain;
    display: block;
    margin: 10px auto;
  }
}
</style>