<template>
  <div>
    <!-- <van-card
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
  num="点击：1次"
  price="2.00"
  title="商品标题" 
    />-->

    <ul>
      <li class="div0">
        <div>
          <img src="../../../public/img/menu1.png" alt />
        </div>
        <div class="div1">
          <p>
            标题
          </p>
          <div class="div2">
            <p>时间</p>
            <p>几次</p>
          </div>
        </div>
      </li>

<li class="div0" >
<!-- v-for='(list,index) in newsList' -->

    //在各个div里面使用对应的插值
        <div>
          <img src="../../../public/img/menu1.png" alt />
        </div>
        <div class="div1">
          <p>
            标题
          </p>
          <div class="div2">
            <p>时间</p>
            <p>几次</p>
          </div>
        </div>
      </li>

    </ul>
  </div>
</template>

<style>
.div0 {
  display: flex;
}
.div1 {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.div2 {
  display: flex;
  justify-content: space-between;
}
</style>

<script>
export default {};
</script>