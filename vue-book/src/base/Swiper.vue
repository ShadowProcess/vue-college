<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,key) in swiperSlides" :key="key">
      <img :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carousel',
    props: ['swiperSlides'], //this.swiperSlides
    data() {
      return {
        swiperOption: {
          autoplay: 3500,
          setWrapperSize :true,
          pagination : '.swiper-pagination', //分页器
          paginationClickable :true,  //分页器是否支持点击
          mousewheelControl : true,
          observeParents:true,
        },
        /*swiperSlides: [1, 2, 3, 4, 5]*/
      }
    },
/*    mounted() {
      setInterval(() => {
        console.log('simulate async data')
        let swiperSlides = this.swiperSlides
        if (swiperSlides.length < 10) swiperSlides.push(swiperSlides.length + 1)
      }, 3000)
    }*/
  }
</script>
<style scoped>
  img{
    height: 200px; /*注意这里高度，手机可能不适配*/
    width: 100%;
  }
</style>
