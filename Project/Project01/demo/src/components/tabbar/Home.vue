<template>
  <div>
    <van-swipe :autoplay="2000" indicator-color="white" class="swipelist">
      <van-swipe-item v-for="(image,index) in imgList" :key="index">      
        <img :src="image.img" />
      </van-swipe-item>
      <!-- <van-swipe-item>2</van-swipe-item>
           <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>-->
    </van-swipe>

<van-grid :border="false" :column-num="3"  class="gridList">
  <van-grid-item to='/Home/Newlist'>
    <img src="../../../public/img/menu1.png" />
    <div>新闻资讯</div>
  </van-grid-item>
  <van-grid-item to='/'>
    <img src="../../../public/img/menu2.png" />
    <div>图片分享</div>
  </van-grid-item>
  <van-grid-item to='/'>
    <img src="../../../public/img/menu3.png" />
    <div>商品购买</div>
  </van-grid-item>
   <van-grid-item to='/'>
  <img src="../../../public/img/menu4.png" />
  <div>留言反馈</div>
  </van-grid-item>
  <van-grid-item to='/'>
    <img src="../../../public/img/menu5.png" />
    <div>视频专区</div>
  </van-grid-item>
  <van-grid-item to='/'>
    <img src="../../../public/img/menu6.png" />
    <div>联系我们</div>
  </van-grid-item>
</van-grid>

  </div>
</template> 
<style scoped>
.swipelist {
  height: 9rem;
  width: 100%;
}
.swipelist img {
  height: 100%;
  width: 100%;
}
.gridList img{
width: 2.5rem;
}
.van-grid-item__content div{
  font-size: .5rem;
  margin-top: .3rem;
}

</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      // swiperList:[
      //   'https://img.yzcdn.cn/vant/apple-1.jpg',
      //   'https://img.yzcdn.cn/vant/apple-2.jpg'
      // ]
      imgList: [],
           
    };
  },

  created() {
    // this.getSwiper();
      axios.get("http://www.liulongbin.top:3005/api/getlunbo").then(res => {
        // console.log(res);
        // if (res.data.status === 0) {
          this.imgList = res.data.message;
        // } else {
        //   Toast("gg");
        // }
      });
    },

  // mounted(){
  //   this.getSwiper();
  // },

  methods: {
    // getSwiper() {
    //   axios.get("http://www.liulongbin.top:3005/api/getlunbo").then(res => {
    //     // console.log(res);
    //     if (res.data.status === 0) {
    //       this.swiperList = res.data.message;
    //     } else {
    //       Toast("gg");
    //     }
    //   });
    // },
    
    // )
  }
};
</script>
