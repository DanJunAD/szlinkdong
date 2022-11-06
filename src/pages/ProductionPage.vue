<template>
  <div id="introduction" class="about-page-content">
    <ImgHeader />
    <div class="custom-nav" :class="{'fixed-nav': fixedNav}" >
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item>产品中心</el-breadcrumb-item>
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
        <h2>苏州凌动xxxxx</h2>
        <div class="txt">
          苏州凌动xxxxx成立于2018年，坐落于美丽的苏州工业园区，是一家专业提供图尔克传感器、伺服压机、RFID电子标签等产品的一站式采购和技术支持的供应商。
          <br />
          公司的优势在于“货源直接，库存充足，价格合理”，并向广大客户承诺只提供全新原装正品。产品应用领域涵盖：电源管理，工业通信，安防，消防火灾，仪器仪表，医疗电源，工业控制器，电力自动化及汽车电子等领域。
          <br/>
          公司秉承“诚信，专业，持续发展”的经营理念和“一流品质，一流服务”的发展方针！赢得了广大客户的高度信任和大力支持!
        </div>
      </div>
    </div>
    <div id="culture" class="about-culture">
      <div class="content">
        <div class="title">
          <h2>企业文化</h2>
          <h3><span></span>CULTURE<span></span></h3>
        </div>
        <div class="round-group">
          <div class="round" v-for="item in roundList">
            <img :src="item.img" />
            <div class="title-content">{{item.title}}</div>
            <div class="main-content"><p>{{item.content}}</p></div>
          </div>
        </div>
      </div>
    </div>
    <div id="partner" class="about-partner">
      <div class="content">
        <div class="title">
          <h2>合作伙伴</h2>
          <h3><span></span>partner<span></span></h3>
        </div>
        <div class="partner-list">
          <img :src="item" v-for="item in partnerList"/>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import ImgHeader from '../components/ImgHeader.vue';
import IntroductionImg from '@/assets/about-us.jpg';
import Round1 from '@/assets/round1.jpg';
import Round2 from '@/assets/round2.jpg';
import Round3 from '@/assets/round3.jpg';
import Round4 from '@/assets/round4.jpg';
import Round5 from '@/assets/round5.jpg';
import Partner1 from '@/assets/partner1.png';
import Partner2 from '@/assets/partner2.png';
import Partner3 from '@/assets/partner3.png';
import Partner4 from '@/assets/partner4.png';
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
      roundList: [
        { img: Round1, title: '创新', content: '尊重客户，理解客户，全心全意为客户服务，为客户创造价值。用“心”去沟通，用“六心”去服务。' },
        { img: Round2, title: '高效', content: '公司秉承“诚信，专业，持续发展”的经营理念和“一流品质，一流服务”的发展方针！赢得了广大客户的高度信任和大力支持!' },
        { img: Round3, title: '信念', content: '公司坚持“以人为本、求新务实”的宗旨，代理高科技含量和高附加值的新技术、新产品，使企业始终保持良好的发展势头。' },
        { img: Round4, title: '真诚', content: '尊重客户，理解客户，全心全意为客户服务，为客户创造价值。用“心”去沟通，用“六心”去服务' },
        { img: Round5, title: '专业', content: '公司以满足客户的需求为己任，用优质的产品、合理的价格和满意的服务去赢得信誉，欢迎国内外客商光临惠顾！' },
      ],
      partnerList: [Partner1, Partner2, Partner3, Partner4],
      currentPosition: '',
      introductionImg: IntroductionImg,
      fixedNav: false,
    }
  },
  watch: {
    $route: {
      handler: function(val) {
        this.currentPosition = val.hash.replace('#', '');
        window.document.querySelector(val.hash).scrollIntoView({
          behavior: "smooth",
          inline: "end",
        });
      },
      deep: true,
      immediate: true,
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    changeCurrentPosition(val) {
      location.hash = '#' + val;
    },
    onScroll(e) {
      const offsetTop = window.document.querySelector('.custom-nav').getBoundingClientRect().top;
      const offsetTop1 = window.document.querySelector('.about-introduction').getBoundingClientRect().top;
      this.fixedNav = offsetTop <= 60;
      if (this.fixedNav) {
        this.fixedNav = offsetTop1 <= 120;
      }
    }
  }
}
</script>
<style scoped lang="less">
.about-page-content {
  .custom-nav {
    position: relative;
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
  .fixed-nav {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    z-index: 99;
  }
  .about-introduction {
    margin: 0 auto;
    max-width: 1140px;
    height: 438px;
    display: flex;
    padding: 60px 25px 0;
    img {
      object-fit: cover;
      width: 400px;
    }
    .content {
      flex: 1 1;
      background-color: #f1f1f1;
      padding: 30px;
      h2 {
        font-size: 30px;
        line-height: 35px;
        padding: 0 20px;
        color: #292929;
        border-left: 4px solid #1d428e;
      }
      .txt {
        font-size: 14px;
        line-height: 28px;
        margin-top: 30px;
        font-weight: 500;
        color: #212529;
      }
    }
  }
  .about-culture {
    margin: 0 auto;
    max-width: 1140px;
    padding: 120px 25px 0;
    .content {
      background-color: #f1f1f1;
      padding: 40px 10px;
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
      .round-group {
        margin-top: 50px;
        display: flex;
        .round {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          &:not(:last-child) {
            margin-right: 10px;
          }
          &:hover {
            .title-content {
              animation-duration: 1s;
              animation-fill-mode: both;
              animation-name: fadeOutTop;
            }
            .main-content {
              animation-duration: 1s;
              animation-fill-mode: both;
              animation-name: fadeInBottom;
            }
          }
          img {
            display: block;
            width: 100%;
            border-radius: 50%;
          }
          .title-content {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba(190,50,22,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 38px;
            color: #FFF;
            font-weight: 300;
          }
          .main-content {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            position: absolute;
            bottom: -500px;
            left: 0;
            background-color: rgba(29,66,142,0.7);
            padding-top: 24%;
            p {
              width: 78%;
              font-size: 14px;
              color: #FFF;
              font-weight: 300;
              line-height: 24px;
              margin: 0 auto;
              text-align: center;
            }
          }
        }
      }
    }
  }
  .about-partner {
    margin: 0 auto;
    max-width: 1140px;
    padding: 120px 25px 0;
    .content {
      background-color: #f1f1f1;
      padding: 40px 10px;
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
      .partner-list {
        margin-top: 50px;
        display: flex;
        img {
          width: 100%;
          &:not(:last-child) {
            margin-right: 10px;
          }
        }
      }
    }
  }
}
@keyframes fadeOutTop {
  from {
    top: 0;
  }

  to {
    top: -500px;
  }
}
@keyframes fadeInBottom {
  from {
    bottom: -500px;
  }

  to {
    bottom: 0;
  }
}
</style>
