<template>
  <div class="contact-page-content">
    <ImgHeader />
    <div class="custom-nav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item>联系我们</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div id="map-container" class="map-container"></div>
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
    }
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.loadScript();
    window.init = this.init;
  },
  methods: {
    init() {
      const myLatlng = new qq.maps.LatLng(31.34042085292204, 120.78169271036131);
      const myOptions = {
        zoom: 12,
        center: myLatlng,
        mapTypeId: qq.maps.MapTypeId.ROADMAP
      }
      const map = new qq.maps.Map(document.getElementById("map-container"), myOptions);
      const marker = new qq.maps.Marker({
        position: myLatlng,
        map: map
      });
    },
    loadScript() {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://map.qq.com/api/js?v=2.exp&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&callback=init";
      document.body.appendChild(script);
    }
  }
}
</script>
<style scoped lang="less">
.contact-page-content {
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
  .map-container {
    width: 80%;
    height: 550px;
    margin: 20px auto;
  }
}
</style>
