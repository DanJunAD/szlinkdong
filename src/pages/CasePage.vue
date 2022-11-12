<template>
  <div class="case-page-content">
    <ImgHeader />
    <div class="custom-nav" >
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item>案例展示</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <ProductionCards production-type="case" />
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
    }
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  methods: {
   
  }
}
</script>
<style scoped lang="less">
.case-page-content {
  .custom-nav {
    position: relative;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f0f0f0;
    padding: 0 60px;
  }
}
</style>
