<template>
  <div class="about-page-content">
    <ImgHeader />
    <div class="custom-nav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item>关于凌动</el-breadcrumb-item>
      </el-breadcrumb>
      <div>
        <div
          v-for="item in list"
          class="custom-button"
          :class="{'is-active': currentPosition === item.value}"
          @click="changeCurrentPosition(item.value)"
        >
          {{item.label}}
        </div>
      </div>
    </div>
    <div class="about-introduction">
      <img :src="introductionImg" />
      <div class="content">
        <h2>苏州凌光自动化科技有限公司</h2>
        <div>
          苏州凌光自动化科技有限公司成立于2018年，坐落于美丽的苏州工业园区，是一家专业提供图尔克传感器、伺服压机、RFID电子标签等产品的一站式采购和技术支持的供应商。
          <br />
          公司的优势在于“货源直接，库存充足，价格合理”，并向广大客户承诺只提供全新原装正品。产品应用领域涵盖：电源管理，工业通信，安防，消防火灾，仪器仪表，医疗电源，工业控制器，电力自动化及汽车电子等领域。
          <br/>
          公司秉承“诚信，专业，持续发展”的经营理念和“一流品质，一流服务”的发展方针！赢得了广大客户的高度信任和大力支持!
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import ImgHeader from '../components/ImgHeader.vue';
import IntroductionImg from '@/assets/about-us.jpg';
import Footer from '../components/Footer.vue';

export default {
  components: {
    ImgHeader,
    Footer,
  },
  data() {
    return {
      list: [
        { value: 'introduction', label: '公司简介'},
        { value: 'culture', label: '企业文化'},
        { value: 'partner', label: '合作伙伴'},
      ],
      currentPosition: '',
      introductionImg: IntroductionImg,
    }
  },
  watch: {
    $route: {
      handler: function(val) {
        this.currentPosition = val.hash.replace('#', '');
      },
      deep: true,
      immediate: true,
    }
  },
  methods: {
    changeCurrentPosition(val) {
      location.hash = '#' + val;
    }
  }
}
</script>
<style scoped lang="less">
.about-page-content {
  .custom-nav {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f0f0f0;
    padding: 0 60px;
    .custom-button {
      display: inline-block;
      height: 35px;
      line-height: 35px;
      padding: 0 25px;
      margin: 0 30px;
      font-size: 14px;
      font-weight: 500;
      color: #000;
      border-radius: 35px;
      cursor: pointer;
      &:hover {
        color: #fff;
        background-color: #be3216;
      }
      &.is-active {
        color: #fff;
        background-color: #1d428e;
      }
    }
  }
}
</style>
