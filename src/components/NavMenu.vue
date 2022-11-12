<template>
  <div
    class="header-content"
    :class="{'scroll-header': hasScrolled, 'common-header': !hasScrolled}"
  >
    <el-menu
      class="custom-menu"
      mode="horizontal"
      :default-active="currentPath"
      router
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-submenu index="/about">
        <template slot="title">关于凌动</template>
        <el-menu-item index="/about/introduction">公司简介</el-menu-item>
        <el-menu-item index="/about/culture">企业文化</el-menu-item>
        <el-menu-item index="/about/partner">合作伙伴</el-menu-item>
      </el-submenu>
      <el-submenu index="/product">
        <template slot="title">产品中心</template>
        <el-menu-item index="/product/sfyj">伺服压机</el-menu-item>
        <el-menu-item index="/product/sfdg">伺服电缸</el-menu-item>
      </el-submenu>
      <el-menu-item index="/case">案例展示</el-menu-item>
      <el-menu-item index="/news">新闻资讯</el-menu-item>
      <el-menu-item index="/contact">联系我们</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hasScrolled: false,
      currentPath: '',
    }
  },
  watch: {
    $route: {
      handler: function(val) {
        this.currentPath = val.fullPath;
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
  padding: 0 60px;
}
.common-header {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: hideBackground;
  .el-menu-item, /deep/ .el-submenu__title {
    color: #ddd!important;
  }
}
.scroll-header {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: showBackground;
  .el-menu-item, /deep/ .el-submenu__title {
    color: #222!important;
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
    /deep/ .el-submenu__title {
      border-bottom: none!important;
      color: #be3216!important;
    }
    border-bottom: none!important;
    color: #be3216!important;
  }
  .el-menu-item, /deep/ .el-submenu__title {
    border-bottom: none!important;
    font-size: 16px!important;
    font-weight: 500!important;
    &:hover, &:focus {
      background-color: rgba(0,0,0,0)!important;
      background: none;
      color: #be3216!important;
    }
  }
}
</style>