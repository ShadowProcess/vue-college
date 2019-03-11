<template>
  <div>
    <MHeader>添加</MHeader>
    <div class="content">
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
          <label for="bookCover">书的封面</label>
          <input type="text" v-model="book.bookCover" id="bookCover">
        </li>
        <li>
          <button @click="add">添加</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {addBook} from '../api';
  import MHeader from "../base/MHeader";

  export default {
    data(){
      return {book:{}}
    },
    methods:{
      async add(){
        await addBook(this.book);
        this.$router.push('/list');
      }
    },
    name: 'Add',
    components: {
      MHeader,
      addBook
    }
  }
</script>

<style scoped lang="less">
  ul {
    margin: 50px 10px 0 10px;
    li {
      label {
        font-size: 25px;
      }

      input {
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
</style>
