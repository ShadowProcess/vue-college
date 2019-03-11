<template>
  <div class="detail">
    <MHeader :back="true">详情页</MHeader>
    <div>
      <ul>
        <li>
          <label for="bookName">书的名称</label>
          <input type="text" v-model="book.bookName" id="bookName">
        </li>
        <li>
          <label for="bookInfo">书的信息</label>
          <input type="text" v-model="book.bookInfo" id="bookInfo">
        </li>
        <li>
          <label for="bookPrice">书的价格</label>
          <input type="text" v-model.number="book.bookPrice" id="bookPrice">
        </li>
        <li>
          <button @click="update">确认修改</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {findOneBook,updateBook} from '../api';
  import MHeader from "../base/MHeader";

  export default {
    data() {
      return {book: {}}
    },
    watch: {
      $route() { //只要路径变化，重新获取数据
        this.getData();
      }
    },
    created() { //页面已加载 需要根据id 发送请求
      this.getData();
    },
    methods: {
      async update(){ //点击修改图书信息 await如果不成功会一直卡在这 成功才会往下走
        await updateBook(this.bid,this.book);
        this.$router.push('/list'); //修改完成跳转页面
      },
      async getData() { //通过id找到某一项后 赋值给book
        this.book = await findOneBook(this.bid);

        //如果是空对象 需要跳转到列表页
        if (this.book !== null || typeof this.book !== 'undefined') {
          Object.keys(this.book).length > 0 ? void 0 : await this.$router.push('/list');
        }
      }
    },
    name: 'Detail',
    components: {
      MHeader
    },
    computed: {
      bid() {
        return this.$route.params.bid; //将路径参数的id映射到bid上
      }
    }
  }
</script>

<style scoped lang="less">
  ul {
    margin: 50px 10px 0 10px;
    li {
      label{
        font-size: 25px;
      }
      input{
        margin: 10px 0;
        height: 25px;
        width: 100%;
      }
      button {
        display: block;
        width: 60px;
        height: 35px;
        background: #00ccff;
        color: #ffffff;
        border: none;
        border-radius: 4px;
        outline: none; /*点击按钮外部线*/
      }
    }
  }

  .detail {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    z-index: 100;
  }
</style>
