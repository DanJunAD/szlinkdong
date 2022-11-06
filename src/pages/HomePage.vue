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
          <h2>苏州凌动xxxxx</h2>
          <div class="txt">苏州凌动xxxxx成立于2018年，坐落于美丽的苏州工业园区，是一家专业提供图尔克传感器、伺服压机、RFID电子标签等产品的一站式采购和技术支持的供应商。 公司的优势在于货源直接，库存充足，价格合理，并向广大客户承诺只提供全新原装正品。产品应用领域涵盖：电源管理，工业通信... </div>
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
          <h2>TBPN直接在机械手的真空夹具上处理安全、标准和IO-Link信号</h2>
          <div class="txt">在汽车行业车身制造中使用的压机上，经常由机械手使用真空夹具来移进和移出处理过程中的钣金部件。为此，必须使用压力开关等传感器来可靠监测真空夹具的压力，因为若未检测到相关的压降，压机附近的人员就可能面临风险。此外，钣金部件的末端位置也需监测，这样... </div>
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
          <h2>苏州凌动xxxxx官网上线啦！！！</h2>
          <div class="date"><span></span>2021-12-18</div>
          <div class="txt">苏州凌动xxxxxx成立于2018年，坐落于美丽的苏州工业园区，是一家专业提供图尔...</div>
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
import HomeCaseImg from '@/assets/home-case.jpg';

export default {
  components: {
    SlideHeader,
    ProductionCards,
    Footer,
  },
  data() {
    return {
      productionList: [
        { value: 'tekcgq', label: '图尔克传感器'},
        { value: 'sfyj', label: '伺服压机'},
        { value: 'RFIDdzbq', label: 'RFID电子标签'},
      ],
      currentProduction: 'tekcgq',
      aboutUsImg: AboutUsImg,
      caseImg: HomeCaseImg,
    }
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
      margin: 30px 60px;
      img {
        flex: 1 1;
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
      width: 80%;
      margin: 30px auto;
      display: flex;
      flex-direction: column;
      padding: 50px;
      align-items: center;
      img {
        width: 100%;
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
          span {
            border-bottom: 1px dotted #000000;
            width: 80%;
            height: 1px;
            display: inline-block;
            margin-bottom: 5px;
            margin-right: 20px;
          }
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
