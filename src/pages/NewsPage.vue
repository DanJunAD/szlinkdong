<template>
  <div id="introduction" class="about-page-content">
    <ImgHeader />
    <div class="custom-nav" :class="{'fixed-nav': fixedNav}" >
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item>新闻资讯</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    新闻资讯
    <Footer />
  </div>
</template>

<script>
import ImgHeader from '../components/ImgHeader.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    ImgHeader,
    Footer,
  },
  data() {
    return {
      fixedNav: false,
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
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
}
</style>
