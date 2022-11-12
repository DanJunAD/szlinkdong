<template>
  <div class="news-page-content">
    <ImgHeader />
    <div class="custom-nav" >
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item>新闻资讯</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="news-content">
      <el-row type="flex">
        <el-col v-for="item in news_list" :span="12" class="content">
          <div class="each-news" @click="showDrawer(item)" :key="item.title">
            <img :src="item.img" />
            <div class="text-content">
              <span class="title">{{item.title}}</span>
              <div class="detail">{{item.detail}}</div>
              <a>了解详情 >></a>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <Footer />
    <el-drawer
      :title="newsObj.title"
      :visible.sync="isShowDrawer"
      size="50%"
      direction="rtl"
      :before-close="handleClose">
      <div class="drawer-content">
        <template v-for="item in newsObj.content">
          <p v-if="item.type === 'text'">{{item.content}}</p>
          <img v-if="item.type === 'img'" :src="item.content"/>
        </template>
        <p>苏州凌动是一家专业致力于研发、设计、制造和销售伺服电动缸、线性模组、多自由度平台、多轴联助平台伺服控制系统的高科技创新企业。产品广泛用于模拟仿真、动感娱乐(如动感座椅，城市科技馆，地铁模拟，轮船模拟，飞机模拟，汽车模拟，滑翔机模凝，赛车模拟，电动座椅，影院、飞行舱模拟，工程模拟，地震模拟，体验馆，模拟滑雪，模拟摩托艇）；喷涂机、玻璃移载、冲床机械手、数控车床上下料、自动化装配、自动化检测、光学、汽车生产线、压装、钢铁、试验机、食品灌装，自动打孔，点胶机，锁螺丝机，SMT贴片，码垛，抓取，搬运、蓄电池，锂电池和军工研究所等领域。</p>
        <p>如果您对我们的产品感兴趣或者有疑问，都可以拨打我们热线：18106217971，我们会为您提供免费的方案设计和加工图纸，欢迎您来电咨询。</p>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import ImgHeader from '../components/ImgHeader.vue';
import Footer from '../components/Footer.vue';
import News1 from '@/assets/news-1.png';
import News2 from '@/assets/news-2.png';

export default {
  components: {
    ImgHeader,
    Footer,
  },
  data() {
    return {
      news_list: [
        {
          img: News1,
          title: '自动化企业的使命是什么？',
          detail: '自动化企业的工作从来都是没有变化的，基于产品与技术，通过工程，形成方案，并为用户创造价值。01、产品与技术构成了方案的基...',
          content: [
            { type: 'text', content: '自动化企业的工作从来都是没有变化的，基于产品与技术，通过工程，形成方案，并为用户创造价值。' },
            { type: 'text', content: '01、产品与技术构成了方案的基础' },
            { type: 'text', content: '产品是载体，它包括了硬件的产品，如控制、驱动、柔性电驱输送系统ACOPOStrak、ACOPOS系列伺服驱动器，技术则包括了mapp技术、reACTION、POWERLINK实时通信技术等，这些构成了各种组件，用于配置出一个机器的控制系统硬件组合，以及软件的架构。' },
            { type: 'text', content: '02、工程师的工程（Engineering）构成方案' },
            { type: 'text', content: '工程思维在于通过将问题“解构”为最小的单元，然后对每个单元进行“高内聚”、“低耦合”的软件开发，然后进行重组为一个整体，形成一个完整的解决方案，并将解决方案标准化，最终实现知识的可复用。' },
            { type: 'text', content: '03、最终实现使命—为用户提供价值' },
            { type: 'text', content: '自动化技术，并非炫技，谁比谁的CPU快、谁比谁的电机扭矩输出大，这很重要，但是，不要忘记了我们的使命，为用户创造价值，这是我们安身立命的根本，基于产品技术，通过工程，形成方案，解决问题。' },
            { type: 'text', content: '03、最终实现使命—为用户提供价值' },
            { type: 'img', content: News1 },
          ]
        },
        {
          img: News2,
          title: '智能化将为制造业带来全新变革',
          detail: '制造业的发展同所使用工具的发展是密不可分的，以工具的发明和使用为里程碑，人类经历了石器时代、青铜器时代、铁器时代、蒸汽机...',
          content: [
            { type: 'text', content: '制造业的发展同所使用工具的发展是密不可分的，以工具的发明和使用为里程碑，人类经历了石器时代、青铜器时代、铁器时代、蒸汽机时代、电气时代和以计算机为工具的信息时代。随着制造技术的发展，自动化技术在工业化大生产中得到迅速发展。制造业自动化系统也历经了数控机床(NC)、柔性制造系统(FMS)、计算机/现代集成制造系统(CIMS)的发展历程，正向着智能制造系统(IMS)迈进。' },
            { type: 'text', content: '伴随信息技术的不断普及，智能制造开始逐步发展。本世纪以来众多发达国家首先认识到去工业化发展的弊端，开始实施新的战略。例如，美国出台了“先进制造业伙伴计划”、德国提出了“工业4.0”计划、欧盟“未来工厂”计划、英国出台“工业2050战略”、日本“机器人新战略”计划等。这些战略规划能为我国发展智能制造业提供有益的经验借鉴。' },
            { type: 'text', content: '智能制造产业链涉及的主要细分行业包括工业机器人、3D打印设备、数控机床、工业物联网、工业软件等，近两年产业规模实现快速增长。其中，2021年全球工业软件市场规模初步统计达到4619亿美元，工业物联网市场规模达到767亿美元，2021年全球数控机床产业规模约达到1648亿美元，总体来看，全球智能制造行业具有巨大的潜在市场空间。' },
            { type: 'img', content: News2 },
          ]
        },
      ],
      newsObj: {},
      isShowDrawer: false,
    }
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  methods: {
    handleClose() {
      this.isShowDrawer = false;
    },
    showDrawer(obj) {
      this.newsObj = obj;
      this.isShowDrawer = true;
    }
  }
}
</script>
<style scoped lang="less">
.news-page-content {
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
  .news-content {
    width: 90%;
    margin: 20px auto;
    .content {
      padding: 20px 0;
      margin: 0 20px;
      border-bottom: 1px solid #eeeeee;
      display: flex;
      .each-news {
        display: flex;
        cursor: pointer;
        img {
          width: 260px;
          object-fit: cover;
        }
        .text-content {
          display: flex;
          flex-direction: column;
          margin-left: 20px;
          .title {
            font-size: 20px;
            line-height: 30px;
            color: #333333;
          }
          .detail {
            margin-top: 20px;
            color: #999999;
            max-height: 90px;
            line-height: 24px;
            flex: 1 1;
          }
          a {
            margin-top: 10px;
            color: #1475cf;
          }
        }
      }
    }
  }
  .drawer-content {
    padding: 20px;
    p {
      text-indent: 2em;
      line-height: 1.8;
      font-size: 16px;
    }
    img {
      width: 470px;
      height: 236px;
      object-fit: contain;
      display: block;
      margin: 10px auto;
    }
  }
}
</style>
