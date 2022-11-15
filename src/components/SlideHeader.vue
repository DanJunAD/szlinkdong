<template>
  <el-carousel
    ref="carouselRef"
    :height="contentHeight"
    arrow="never"
    :interval="5000"
    trigger="click"
    @change="changHandle"
    @mouseenter.native="delHandleMouseEnter"
  >
    <el-carousel-item v-for="item in imgList" :key="item">
      <div class="img-content">
        <img :src="item" class="banner-img"/>
        <div v-show="currentImgIndex === 0" class="banner-text">
          <h2>科技<span>智造</span>未来</h2>
          <h3>致力于成为工业自动化领域优质服务商</h3>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import Banner1 from '@/assets/banner1.jpeg';
import Banner2 from '@/assets/banner2.jpeg';
export default {
  data() {
    return {
      contentHeight: '',
      currentImgIndex: 0,
      imgList: [Banner1, Banner2],
    }
  },
  mounted() {
    this.onResize();
    this.delHandleMouseEnter();
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      const windowWidth = document.body.clientWidth;
      this.contentHeight = `${windowWidth * 860 / 1920}px`;
    },
    changHandle(index) {
      this.currentImgIndex = index;
    },
    delHandleMouseEnter() {
      this.$refs.carouselRef.handleMouseEnter = () => {};
    },
  },
}
</script>

<style scoped lang="less">
.img-content {
  width: 100%;
  height: 100%;
  position: relative;
  .banner-img {
    width: 100%;
    object-fit: cover;
  }
  .banner-text {
    position: absolute;
    left: 50%;
    top: 50%;
    text-align: center;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: fadeInBottom;
    h2 {
      font-size: 48px;
      letter-spacing: 8px;
      font-weight: 400;
      line-height: 70px;
      color: #ffffff;
      span {
        color: #a22810;
      }
    }
    h3 {
      font-size: 18px;
      letter-spacing: 3px;
      font-weight: 200;
      line-height: 50px;
      color: #ffffff;
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
