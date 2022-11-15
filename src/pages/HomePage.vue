<template>
  <div class="home-page-content">
    <SlideHeader />
    <div class="production-nav">
      <div
        v-for="item in productionList"
        class="custom-button"
        :class="{'is-active': currentProduction === item.value}"
        @click="changeCurrentProduction(item.value)"
      >
        {{item.label}}
      </div>
    </div>
    <ProductionCards :production-type="currentProduction" />
    <div class="slogon-content">
      <div class="container">
        <h2>协力 <span>智造</span> 创未来</h2>
        <h3>凌动您的自动化合作伙伴</h3>
      </div>
    </div>
    <div class="about-us">
      <div class="title">
        <h2>关于我们</h2>
        <h3><span></span>ABOUT US<span></span></h3>
      </div>
      <div class="about-main-content">
        <div class="text-content">
          <h2>苏州凌动智能科技有限公司</h2>
          <div class="txt">苏州凌动智能科技有限公司是一家以伺服电动缸，线性滑台模组，伺服压装机研发生产为主的企业,自成立以来，一直致力于伺服电动缸，线性滑台模组，伺服压装机的高效传动技术的研发。公司产品主要有LD系列伺服电动缸（电动推杆），线性滑台，单轴，两轴，三轴机器人。公司引进国外的先进技术，选用优质的电机、国外品牌轴承、进口丝杠导轨、钢材等材料，并且拥有资深的机械传动设计师，先进的传动设计软件等，确保了产品技术参数的准确性，应用的可靠性。为客户提供操作简便、效率卓越、性能稳定、价格合理的伺服电动缸，线性滑台模组和伺服压装机设备。</div>
        </div>
        <div class="img-content">
          <img :src="aboutUsImg" />
        </div>
      </div>
    </div>
    <div class="case-content">
      <div class="title">
        <h2>成功案例</h2>
        <h3><span></span>OUR CASE<span></span></h3>
      </div>
      <div class="case-info">
        <img :src="caseImg" />
        <div class="text-content">
          <h2>数控伺服压装机案例</h2>
          <div class="txt">苏州凌动，专注于伺服电动缸、线性滑台模组、伺服压机、三自由度、六自由度等产品的生产研发，10精密仪器生产销售，有专业的设备，良好的电机、品牌轴承、进口丝杆、钢材等配件...</div>
        </div>
      </div>
    </div>
    <div class="news-content">
      <div class="title">
        <h2>新闻资讯</h2>
        <h3><span></span>NEWS CENTER<span></span></h3>
      </div>
      <div class="news-info">
        <img :src="aboutUsImg" />
        <div class="text-content">
          <h2>苏州凌动智能科技有限公司官网上线啦！！！</h2>
          <div class="date">2022-11-12</div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import SlideHeader from '../components/SlideHeader.vue';
import Footer from '../components/Footer.vue';
import ProductionCards from '../components/ProductionCards.vue';
import AboutUsImg from '@/assets/about-us.jpg';
import case6 from '@/assets/case-y6.jpeg';

export default {
  components: {
    SlideHeader,
    ProductionCards,
    Footer,
  },
  data() {
    return {
      productionList: [
        { value: 'sfyj', label: '伺服压机'},
        { value: 'sfdg', label: '伺服电缸'},
      ],
      currentProduction: 'sfyj',
      aboutUsImg: AboutUsImg,
      caseImg: case6,
    }
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  methods: {
    changeCurrentProduction(val) {
      this.currentProduction = val;
    }
  }
}
</script>
<style scoped lang="less">
.home-page-content {
  .production-nav {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
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
  .slogon-content {
    width: 100%;
    height: 200px;
    background-image: url(../assets/slogon-content-bg.jpg);
    background-repeat: repeat-y;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    padding: 50px 0 30px 0;
    margin: 60px 0;
    .container {
      max-width: 720px;
      padding: 0 30px;
      margin: auto;
      h2 {
        font-size: 45px;
        color: #FFF;
        span {
          color: #be3216;
        }
      }
      h3 {
        font-size: 18px;
        line-height: 50px;
        color: #fff;
        text-align: right;
      }
    }
  }
  .about-us {
    max-width: 1140px;
    padding: 0 15px;
    margin: 0 auto;
    .title {
      text-align: center;
      h2 {
        color: #5c5c5b;
        font-size: 30px;
        line-height: 50px;
      }
      h3 {
        color: #be3216;
        font-size: 18px;
        line-height: 35px;
        span {
          height: 1px;
          border-bottom: 2px solid #be3216;
          width: 50px;
          display: inline-block;
          margin-bottom: 5px;
        }
      }
    }
    .about-main-content {
      position: relative;
      margin: 0 30px;
      display: flex;
      flex-direction: column;
      .text-content {
        width: 58%;
        margin-top: 130px;
        padding: 50px 0 80px 30px;
        background-color: #f0f0f0;
        h2 {
          font-size: 26px;
          line-height: 30px;
          color: #292929;
          width: 80%;
        }
        .txt {
          width: 80%;
          line-height: 26px;
          margin-top: 25px;
          font-size: 14px;
          text-align: justify;
        }
      }
      .img-content {
        position: absolute;
        top: 60px;
        right: 0;
        width: 50%;
        img {
          width: 100%;
          object-fit: contain;
        }
      }
    }
  }
  .case-content {
    padding: 50px 0 30px 0;
    width: 100%;
    background-image: url(../assets/case-content-bg.jpg);
    background-repeat: repeat-y;
    background-size: cover;
    margin: 60px auto;
    background-position: center;
    background-attachment: fixed;
    .title {
      text-align: center;
      h2 {
        color: #fff;
        font-size: 30px;
        line-height: 50px;
      }
      h3 {
        color: #be3216;
        font-size: 18px;
        line-height: 35px;
        span {
          height: 1px;
          border-bottom: 2px solid #be3216;
          width: 50px;
          display: inline-block;
          margin-bottom: 5px;
        }
      }
    }
    .case-info {
      display: flex;
      margin: 30px auto;
      max-width: 1140px;
      img {
        flex: 1 1;
        width: 300px;
        height: 300px;
        object-fit: contain;
      }
      .text-content {
        flex: 2 1;
        margin-left: 60px;
        h2 {
          font-size: 24px;
          line-height: 30px;
          color: #020202;
        }
        .txt {
          color: #313030;
          line-height: 30px;
          margin-top: 30px;
          padding-right: 150px;
        }
      }
    }
  }
  .news-content {

    .title {
      text-align: center;
      h2 {
        color: #5c5c5b;
        font-size: 30px;
        line-height: 50px;
      }
      h3 {
        color: #be3216;
        font-size: 18px;
        line-height: 35px;
        span {
          height: 1px;
          border-bottom: 2px solid #be3216;
          width: 50px;
          display: inline-block;
          margin-bottom: 5px;
        }
      }
    }
    .news-info {
      background-color: #f0f0f0;
      width: 550px;
      margin: 30px auto;
      display: flex;
      flex-direction: column;
      padding: 50px;
      align-items: center;
      img {
        width: 500px;
        height: 350px;
        object-fit: contain;
      }
      .text-content {
        width: 100%;
        margin-top: 30px;
        h2 {
          font-size: 16px;
          line-height: 55px;
        }
        .date {
          font-size: 14px;
          color: #292828;
          text-align: right;
        }
        .txt {
          font-size: 14px;
          color: #4e4d4d;
          height: auto;
          line-height: 25px;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
