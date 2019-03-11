<template>
  <div>
    <MHeader>列表页</MHeader>
    <div class="content" ref="scroll" @scroll="loadMore">
      <ul>
        <router-link v-for="(book,index) in books"
                     :to="{name:'detail',params:{bid:book.bookId}}"
                     :key="index"
                     tag="li">
          <img v-lazy="book.bookCover">
          <div>
            <H4>{{book.bookName}}</H4>
            <p>{{book.bookInfo}}</p>
            <b>{{book.bookPrice}}</b>

            <div class="btn-list">
              <button @click.stop="remove(book.bookId)">删除</button>
              <button @click.stop>添加购物</button>
            </div>

          </div>
        </router-link>
      </ul>
      <div @click="more" class="more">加载更多</div>
    </div>
  </div>
</template>

<script>
  import {pagination, removeBook} from '../api';
  import MHeader from "../base/MHeader";

  export default {
    //拖拽事件
    mounted() {
      let scroll = this.$refs.scroll; //获取拖拽的元素
      let top = scroll.offsetTop;
      let distance = 0;
      let isMove = false;
      scroll.addEventListener('touchstart', (e) => {
        // 滚动条在最顶端时 并且当前盒子在顶端的时候 才继续走
        if (scroll.scrollTop != 0 || scroll.offsetTop != top) return;
        let start = e.touches[0].pageY; //手指点击的开始
        let move = (e) => {
          isMove = true;
          let current = e.touches[0].pageY;
          distance = current - start; //求的拉动的距离 负的就不要了
          if (distance > 0) { //如果大于50了 我就认为是50像素
            if (distance <= 50) {
              scroll.style.top = distance + top + 'px';
            } else {
              distance = 50;
              scroll.style.top = top + 50 + 'px'
            }
          } else {
            //如果不在考虑范围内，移除掉move和end事件
            scroll.removeEventListener('touchmove', move);
            scroll.removeEventListener('touchend', end);
          }
        }
        let end = (e) => {
          if (!isMove) return;
          isMove = false;
          clearInterval(this.timer1);
          this.timer1 = setInterval(() => { // 一共distance 每次减一
            if (distance <= 0) {
              clearInterval(this.timer1);
              distance = 0;
              scroll.style.top = top + 'px';
              scroll.addEventListener('touchmove', move);
              scroll.addEventListener('touchend', end);
              this.books = []; //先清空数据
              this.offset = 0;
              this.getData();
              return;
            }
            distance -= 1;
            scroll.style.top = top + distance + 'px';
          }, 1)
        }
        scroll.addEventListener('touchmove', move);
        scroll.addEventListener('touchend', end);
      }, false)
      console.log(top)
    },
    created() {
      this.getData();
    },
    name: 'List',
    components: {
      MHeader,
      pagination
    }, methods: {
      loadMore() {
        // 卷去的高度 当前可见区域 总高
        // 进来触发scroll事件，可能触发n次 先进来开一个定时器，下次触发时，将上一次定时器清除掉
        clearTimeout(this.timer); //防抖 节流
        this.timer = setTimeout(() => {
          console.log(100)
          let {scrollTop, clientHeight, scrollHeight} = this.$refs.scroll;
          if (scrollTop + clientHeight + 20 > scrollHeight) {
            this.getData(); //获取更多
          }
        }, 60)

      },
      more() {
        this.getData();
      },
      async remove(id) {
        await removeBook(id); //删除某一项
        //要删除前台数据
        this.books = this.books.filter(item => item.bookId !== id);
      },
      async getData() {
        //有更多获取
        if (this.hasMore && !this.isLoading) {
          this.isLoading = true;
          let {hasMore, books} = await pagination(this.offset);
          this.books = [...this.books, ...books];
          this.hasMore = hasMore;
          this.isLoading = false; //加载完毕后
          this.offset = this.books.length; //维护偏移量 就是总书的长度
        }
      }
    }, data() {
      //offset代表偏移量 hasMore是否有更多  默认不是正在加载
      return {books: [], offset: 0, hasMore: true, isLoading: false, timer: Object}
    }
  }
</script>

<style scoped>
  .content ul {
    padding: 10px;
  }

  .content ul li {
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #f1f1f1;
  }

  .content ul li image {
    width: 100px;
    height: 120px;
  }

  .content h4 {
    font-size: 20px;
    line-height: 35px;
  }

  .content p {
    color: #2a2a2a;
    line-height: 25px;
  }

  .content b {
    color: red;
  }

  .content button {
    display: block;
    width: 60px;
    height: 25px;
    background: orangered;
    color: #ffffff;
    border: none;
    border-radius: 15px;
    outline: none; /*点击按钮外部线*/
  }

  .more {
    margin: 10px;
    background: #2afedd;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 20px;
  }
  .btn-list {
    display: flex;
    justify-content: space-around;
  }
</style>
