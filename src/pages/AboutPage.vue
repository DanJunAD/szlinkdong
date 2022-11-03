<template>
  <div class="about-page-content">
    <div class="header-img-content">
      <img class="header-img" :src="headerImg" />
      <div class="banner-text">
        <h2>工控产品一站式服务</h2>
        <h3>苏州凌光自动化科技有限公司</h3>
      </div>
    </div>
    <div class="custom-nav">
      <div
        v-for="item in productionList"
        class="custom-button"
        :class="{'is-active': currentProduction === item.value}"
        @click="changeCurrentProduction(item.value)"
      >
        {{item.label}}
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import HeaderImg from '@/assets/header-img.jpg';

export default {
  components: {
    Footer,
  },
  data() {
    return {
      headerImg: HeaderImg,
    }
  },
  methods: {
  }
}
</script>
<style scoped lang="less">
.about-page-content {
  .header-img-content {
    position: relative;
    .header-img {
      width: 100%;
    }
    .banner-text {
      position: absolute;
      left: 50%;
      top: 50%;
      text-align: center;
      animation-duration: 1s;
      animation-fill-mode: both;
      animation-name: fadeInBottom;
      animation-delay: 0.7s;
      h2 {
        font-size: 30px;
        font-weight: 400;
        line-height: 45px;
        letter-spacing: 8px;
        color: #ffffff;
      }
      h3 {
        font-size: 20px;
        line-height: 50px;
        letter-spacing: 3px;
        font-weight: 200;
        color: #ffffff;
      }
    }
  }
}
@keyframes fadeInBottom {
  from {
    opacity: 0;
    transform: translate(-50%, 100%);
  }

  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
</style>
