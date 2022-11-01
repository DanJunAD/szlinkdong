<template>
  <div
    class="header-content"
    :class="{'scroll-header': hasScrolled, 'common-header': !hasScrolled}"
  >
    <el-menu
      default-active="/home"
      class="custom-menu"
      mode="horizontal"
      router
    >
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/about/introduction">
        <el-dropdown trigger="click">
          <span class="dropdown-menu">关于凌动</span>
          <el-dropdown-menu slot="dropdown">
            <el-menu-item index="/about/introduction">公司简介</el-menu-item>
            <el-menu-item index="/about/culture">企业文化</el-menu-item>
            <el-menu-item index="/about/partner">合作伙伴</el-menu-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu-item>
      <el-menu-item index="/product">
        <el-dropdown>
          <span class="dropdown-menu">产品中心</span>
          <el-dropdown-menu slot="dropdown">
            <el-menu-item index="/product/tekcgq">图尔克传感器</el-menu-item>
            <el-menu-item index="/product/sfyj">伺服压机</el-menu-item>
            <el-menu-item index="/product/RFIDdzbq">RFID电子标签</el-menu-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu-item>
      <el-menu-item index="/case">案例展示</el-menu-item>
      <el-menu-item index="/news">
        <el-dropdown>
          <span class="dropdown-menu">新闻资讯</span>
          <el-dropdown-menu slot="dropdown">
            <el-menu-item index="/news/company">公司新闻</el-menu-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu-item>
      <el-menu-item index="/contact">联系我们</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hasScrolled: false,
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    handleSelect(val) {
      console.log(1111, val);
    },
    onScroll(e) {
    this.hasScrolled = !!window.top.scrollY;
    }
  },
}
</script>
<style scoped lang="less">
.header-content {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  z-index: 99;
}
.common-header {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: hideBackground;
  .el-menu-item, .el-dropdown {
    color: #ddd;
  }
}
.scroll-header {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: showBackground;
  .el-menu-item, .el-dropdown {
    color: #222;
  }
}
@keyframes showBackground {
  from {}
  to {
    background-color: #ffffff;
  }
}
@keyframes hideBackground {
  from {
    background-color: #ffffff;
  }
  to {}
}
.custom-menu {
  background: none;
  display: flex;
  align-items: center;
  border-bottom: none!important;
  .is-active {
    border-bottom: none!important;
    color: #be3216!important;
  }
  .el-menu-item, .dropdown-menu {
    border-bottom: none!important;
    display: flex;
    font-size: 16px;
    font-weight: 500;
    &:hover, &:focus {
      background-color: rgba(0,0,0,0)!important;
      background: none;
      color: #be3216!important;
    }
  }
}
.el-dropdown-menu li {
  height: 36px;
  line-height: 36px;
}
</style>