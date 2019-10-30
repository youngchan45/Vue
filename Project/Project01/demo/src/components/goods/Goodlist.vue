<template>
  <div class="container">
    <div class="goodList0" v-for="(list,index) in goodList" :key="index">
      <div class="goodList1">
        <img lazy-load class="goodImg" :src="list.img_url" alt />
        <div class="goodTit">{{list.title}}</div>
        <div class="goodPrice">
          <span class="now">￥{{list.sell_price}}</span>
          <span class="old">{{list.market_price}}</span>
        </div>
        <div class="goodStatus">
          <span class="sell">热卖中</span>
          <span class="left">剩{{list.stock_quantity}}件</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      goodList: {},
      pageindex: 1
    };
  },
  created() {
    this.getGood();
  },
  methods: {
    getGood() {
      //易错：get里面的链接如果有加别的东西的话 不需要合并在一起加括号
      axios
        .get(
          "http://www.liulongbin.top:3005/api/getgoods?pageindex=" +
            this.pageindex
        )
        .then(res => {
          this.goodList = res.data.message;
          console.log(res);
        });
    }
  }
};
</script>

<style scoped>
.goodList0 {
  display: flex;
  direction: row;
  /* justify-content: flex-start; */
  flex-wrap: wrap;
}
.goodList1 {
  border: 1px solid rgba(240, 239, 239, 0.726);
  /* box-shadow: 0 0 .2rem #e5e5e5; */
  width: 49%;
  margin-bottom: .3rem;
  /* height: 5rem; */
}
/* .goodList0:after {
  content: "";
  width: 50%;
} */
.goodImg {
  width: 100%;
}
.goodTit {
  font-weight: 600;
  /* word-wrap: break-word; */
  word-break: break-all;
  font-size: .7rem;
}
.now {
  color: red;
  padding-right: .5rem;
  font-size: .8rem;
}
.old {
  font-size: .2rem;
  text-decoration: line-through;
  color: rgb(114, 113, 113);
}
.sell,
.left {
  color: grey;
  font-size: .6rem;
}
.goodPrice,
.goodStatus {
  background-color: #eeebeb;
  padding: .2rem;
}
.goodStatus {
  display: flex;
  justify-content: space-between;
}
</style>