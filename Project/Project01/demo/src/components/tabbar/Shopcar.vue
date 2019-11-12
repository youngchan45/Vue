<template>
  <div>
    <!--易错点：复选框组中的v-model是一个数组，选中的值是每个复选项中的name，选中后则讲name往数组里面加-->
    <!--单纯的复选框中的v-model是一个布尔值-->
    <!--商品部分-->
    <van-checkbox-group
      clickable
      v-model="checked"
      ref="checkboxGroup"
      class="container"
      v-for="(item,index) in carList"
      :key="index"
    >
      <van-checkbox class="shopcarItem">
        <div class="goodsItem">
          <img class="imgs" :src="item.thumb_path" alt="商品圖片" />
          <div class="info">
            <div class="title">{{item.title}}</div>
            <div class="price">
              <span>￥{{item.sell_price}}</span>
              <stepper></stepper>
              <span>删除</span>
            </div>
          </div>
        </div>
      </van-checkbox>
      <!-- <van-checkbox name="b" class="shopcarItem">
        <div class="goodsItem">
          <img
            class="imgs"
            src="http://demo.dtcms.net/upload/201504/20/thumb_201504200119256512.jpg"
            alt
          />
          <div>
            <div class="title">标题标题标题标题标题标题标题标题标题标题标</div>
            <div class="price">
              <span>￥价格</span>
              <stepper></stepper>
              <span>删除</span>
            </div>
          </div>
        </div>
      </van-checkbox>
      <van-checkbox name="c" class="shopcarItem">
        <div class="goodsItem">
          <img
            class="imgs"
            src="http://demo.dtcms.net/upload/201504/20/thumb_201504200119256512.jpg"
            alt
          />
          <div>
            <div class="title">标题标题标题标题标题标题标题标题标题标题标</div>
            <div class="price">
              <span>￥价格</span>
              <stepper></stepper>
              <span>删除</span>
            </div>
          </div>
        </div>
      </van-checkbox>
      <van-checkbox name="d" class="shopcarItem">
        <div class="goodsItem">
          <img
            class="imgs"
            src="http://demo.dtcms.net/upload/201504/20/thumb_201504200119256512.jpg"
            alt
          />
          <div>
            <div class="title">标题标题标题标题标题标题标题标题标题标题标</div>
            <div class="price">
              <span>￥价格</span>
              <stepper></stepper>
              <span>删除</span>
            </div>
          </div>
        </div>
      </van-checkbox>-->
    </van-checkbox-group>

    <div :class="{zero:isZero}">
      <div>
        <van-icon name="shopping-cart-o" size="1.3rem" />
        <span>購物車為空</span>
      </div>
<div @click='goShop'>點我買買買</div>
    </div>

    <div class="countLayout" :class="{pay:isPay}">
      <div class="count">
        <van-button type="primary" size="small" @click="toggleAll">全选</van-button>
        <div>
          <span>合计：(价格)</span>
          <van-button type="danger" size="small">结算（{{this.checked.length}}）</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Stepper from "../subcomponent/Stepper.vue";
export default {
  data() {
    return {
      checked: [],
      all: true,
      // idArr: [],
      carList: [],
      isPay: false,
      isZero: true
    };
  },
  created() {
    this.getCarList();
  },
  methods: {
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll(this.all);
      this.all = !this.all;
    },
    //   toggle() {
    //     this.$refs.checkboxes[].toggle()
    // },
    getCarList() {
      //經常漏掉$store
      let idArr = [];
      // idArr = this.$store.state.car;
      // console.log(idArr);
      this.$store.state.car.forEach(item => {
        idArr.push(item.id);
      });
      // console.log(idArr);
      if (idArr.length <= 0) {
        this.isPay = true;
        this.isZero = true;
        return;
      }
      axios
        .get(
          "http://www.liulongbin.top:3005/api/goods/getshopcarlist/" +
            idArr.join(",")
        )
        .then(res => {
          // let carIds = localStorage.getItem("car");
          // this.idArr = carIds.join(",");
          this.carList = res.data.message;
          this.isPay = false;
        this.isZero = false;
          console.log(res);
        });
    },
    goShop(){
      this.$router.push('/home/goodslist')
    }
  },
  components: {
    stepper: Stepper
  }
};
</script>

<style scoped>
.container {
  padding: 0 0.5rem;
}
.goodsItem,
.price,
.count {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 0;
}
.shopcarItem,
.price {
  margin: 0.4rem 0;
}
.imgs {
  width: 17%;
}
.title {
  line-height: 1.4rem;
  font-size: 0.8rem;
}
.info {
  font-size: 0.8rem;
  padding: 0 0.3rem;
}
.price > span {
  color: red;
  margin-right: 0.8rem;
}
span:nth-child(3) {
  color: blue;
  margin-left: 0.8rem;
}
.countLayout {
  background-color: #fff;
  position: fixed;
  bottom: 50px;
  width: 100%;
  height: auto;
  border-bottom: 1px rgb(236, 234, 234) solid;
  padding: 0.5rem;
}
.count span {
  font-size: 0.5rem;
  margin-right: 0.7rem;
}
.shopcarItem {
  border: 1px #ccc solid;
  box-shadow: 0 0 0.5rem #ccc;
  padding: 0.5rem;
}
.pay {
  display: none;
}
.zero {
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>