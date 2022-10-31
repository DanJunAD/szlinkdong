<template>
  <div class="home-page-content">
    <SlideHeader />
    1111
  </div>
</template>

<script>
import SlideHeader from '../components/SlideHeader.vue';

export default {
  components: {
    SlideHeader
  },
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  }
}
</script>
<style scoped>
.home-page-content {

}
</style>
