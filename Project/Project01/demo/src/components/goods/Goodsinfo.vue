<template>
  <div>
    <!-- 商品图片轮播 -->
    <van-swipe :autoplay="2000" indicator-color="white" class="swipelist border">
      <van-swipe-item v-for="(goodsImg,index) in goodsImgList" :key="index">
        <img :src="goodsImg.src" />
      </van-swipe-item>
    </van-swipe>
    <!-- 购买详情 -->
    <div class="border" v-for="(goodsItem,index) in goodsInfo" :key="index">
      <div class="title">{{goodsItem.title}}</div>
      <div class="price" v-for="(priceItem,index) in priceList" :key="index">
        <span class>市场价：</span>
        <span>{{priceItem.market_price}}</span>
        <span>销售价：</span>
        <span>{{priceItem.sell_price}}</span>
      </div>
      <div class="num">
        <span>购买数量：</span>
        <van-stepper
          v-model="value"
          min="1"
          max="8"
          integer
          input-width="1.5rem"
          button-size="1.7rem"
        />
      </div>
      <div>
        <van-button type="info" size="small">立即购买</van-button>
        <van-button type="danger" size="small">加入购物车</van-button>
      </div>
    </div>
    <!-- 商品参数 -->
    <div class="border" v-for="(priceItem,index) in priceList" :key="priceItem.goods_no">
      <div class="title">商品参数</div>
      <div class="info">
        <div>商品货号：{{priceItem.goods_no}}</div>
        <div>库存情况：{{priceItem.stock_quantity}}件</div>
        <div>上架时间：{{priceItem.add_time |timeset}}</div>
      </div>
      <van-button plain hairline type="info" block size="small">图文介绍</van-button>
      <van-button plain hairline type="danger" block size="small">商品评论</van-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      value: "",
      goodsImgList: [],
      id: this.$route.params.id,
      goodsInfo: [],
      priceList:[],
    };
  },
  created() {
    this.getGoodsImg();
    this.getGoods();
    this.getPrice();
  },
  methods: {
    getGoodsImg() {
      axios
        .get("http://www.liulongbin.top:3005/api/getthumimages/" + this.id)
        .then(res => {
          this.goodsImgList = res.data.message;
        });
    },
    getGoods() {
      axios
        .get("http://www.liulongbin.top:3005/api/goods/getdesc/" + this.id)
        .then(res => {
          this.goodsInfo = res.data.message;
        });
    },
    getPrice(){
      axios.get('http://www.liulongbin.top:3005/api/goods/getinfo/'+this.id).then(res=>{
        this.priceList=res.data.message;
      })
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
.border {
  border: 1px solid #ccc;
  box-shadow: 0 0 0.5rem #ccc;
  margin: 0.4rem;
  padding: 0.4rem;
}
.title {
  font-size: 0.9rem;
  font-weight: 600;
  border-bottom: 1px solid #e6e6e6;
  padding: 0.5rem 0;
}
.price {
  font-size: 0.9rem;
  padding: 0.6rem 0;
}
span:nth-child(2) {
  text-decoration: line-through;
  font-size: 0.7rem;
  padding-right: 1rem;
}
span:nth-child(4) {
  color: red;
}
.van-stepper {
  display: inline-block;
}
.num {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
}
.van-button {
  margin: 0.5rem 1.3rem 0.5rem 0;
}
.info {
  font-size: 0.8rem;
  padding: 0.3rem 0;
}
.info > div {
  padding: 0.3rem 0;
}
</style>