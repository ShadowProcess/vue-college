<template>
  <div class="footer">
    <router-link to="/home">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-liebiaoyedizhi"></i>
      <span>列表</span>
    </router-link>
    <router-link to="/collect">
      <i class="iconfont icon-shoucang-"></i>
      <span>收藏</span>
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-icon-test"></i>
      <span>添加</span>
    </router-link>
  </div>
</template>

<!--
display:flex
flex-direction:row /column
justify-content:center 垂直居中
align-items:center 横向居中
flex:1 每份占1
/home /home  /home/a /home
router-link-exact-active router-link-active
-->
<!--需要安装指定低版本的less-loader【npm install less-loader@4.1.0 &#45;&#45;save】-->
<style scoped lang="less">
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    border-top: 1px solid #ccc;
    a{
      color: yellowgreen;
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;
      justify-content: center;
    }
    a.router-link-active {
      color: red;
    }
  }
</style>
