<template>
  <div>
    <MHeader>首页</MHeader>
    <div class="content">
      <Loading v-if="loading"></Loading>
      <template v-else>
        <Swiper :swiperSlides="sliders"></Swiper>
        <div class="container">
          <h3>热门图书</h3>
          <ul>
            <li v-for="hot in hotBooks">
              <img :src="hot.bookCover" alt="">
              <b>{{hot.bookName}}</b>
            </li>
          </ul>
        </div>
      </template>

    </div>
  </div>
</template>

<script>
  //1.引入组件 2.注册组件 3.使用组件
  import MHeader from "../base/MHeader";
  import Swiper from "../base/Swiper";
  import {getAll} from '../api';
  import Loading from '../base/Loading'
  export default {
    name: 'Home',
    components: {
      MHeader,
      Swiper,
      Loading
    },
    // async 和 await同时使用
    created() {
      //this.getSlider(); //获取轮播图
      //this.getHot(); //获取最新图书
      this.getData();
    }, methods: {
      async getData() {
        let [sliders, hotBooks] = await getAll(); //[sliders,books]
        this.sliders = sliders;
        this.hotBooks = hotBooks;
        // 。。。 轮播图和热门图书同时获取
        this.loading = false;
      }



      /*async getHot() {
        this.hotBooks = await getHotBook();
      },
      async getSlider() {
        //取到返回值中的data 并给他起个别名 对象中的属性名字必须和得到的结果一致

        //将获取的数据放到sliders
        this.sliders = await getSliders();
      }*/
    },
    data() {
      return {sliders: [], hotBooks: [], loading: true}
    }
  }
</script>

<style scoped lang="less">
  .h3 {
    color: #999;
    padding: 5px 0;
  }

  .container {
    width: 90%;
    margin: 0 auto;
  }

  ul {
    display: flex;
    flex-wrap: wrap; /*默认不换行*/
    padding-bottom: 10px;

    li {
      width: 50%;
      text-align: center;
      margin: 5px 0;

      img {
        width: 100%
      }
    }
  }
</style>
