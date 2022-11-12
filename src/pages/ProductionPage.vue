<template>
  <div class="about-page-content">
    <ImgHeader />
    <div class="custom-nav" >
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item>产品中心</el-breadcrumb-item>
      </el-breadcrumb>
      <div>
        <div
          v-for="item in list"
          class="custom-button"
          :class="{'is-active': currentProduction === item.value}"
          @click="changeCurrentProduction(item.value)"
        >
          {{item.label}}
        </div>
      </div>
    </div>
    <ProductionCards :production-type="currentProduction" />
    <Footer />
  </div>
</template>

<script>
import ImgHeader from '../components/ImgHeader.vue';
import ProductionCards from '../components/ProductionCards.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    ImgHeader,
    ProductionCards,
    Footer,
  },
  data() {
    return {
      list: [
        { value: 'sfyj', label: '伺服压机'},
        { value: 'sfdg', label: '伺服电缸'},
      ],
      currentProduction: '',
    }
  },
  watch: {
    $route: {
      handler: function(val) {
        this.currentProduction = val.hash.replace('#', '');
      },
      deep: true,
      immediate: true,
    }
  },
  methods: {
    changeCurrentProduction(val) {
      location.hash = '#' + val;
    },
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
}
</style>
