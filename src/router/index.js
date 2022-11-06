import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import ProductionPage from '../pages/ProductionPage.vue';
import CasePage from '../pages/CasePage.vue';
import NewsPage from '../pages/NewsPage.vue';
import ContactPage from '../pages/ContactPage.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/product/:type',
      name: 'product',
      component: ProductionPage,
    },
    {
      path: '/case',
      name: 'case',
      component: CasePage,
    },
    {
      path: '/news',
      name: 'news',
      component: NewsPage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
    }
  ]
})

export default router
