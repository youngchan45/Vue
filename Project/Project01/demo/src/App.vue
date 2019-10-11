<template>
  <div id="app" class="appContainer">

    <van-nav-bar title="商城test" />

    <transition name='mainTrans'>
      <router-view></router-view>
    </transition>

    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o" to="/home" dot>首页</van-tabbar-item>
      <van-tabbar-item name="member" icon="friends-o" to="/member">会员</van-tabbar-item>
      <van-tabbar-item name="shopcar" icon="cart-o" to="/shopcar" info="0">购物车</van-tabbar-item>
      <van-tabbar-item name="search" icon="search" to="/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style>
.appContainer{
  overflow-x: hidden;
}
.mainTrans-enter{
  opacity: 0;
  transform: translateX(100%);
}
.mainTrans-leave-to{
  opacity: 0;
  transform: translateX(50%);
  position: absolute;
}
.mainTrans-enter-active,
.mainTrans-leave-to-active{
  transition: all .5s ease 
}

</style>
<script>
export default {
  data() {
    return {
      active: "home"
    };
  }
};
</script>
