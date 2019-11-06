<template>
  <div>
    <!--易错点：复选框组中的v-model是一个数组，选中的值是每个复选项中的name，选中后则讲name往数组里面加-->
    <!--单纯的复选框中的v-model是一个布尔值-->

    <!--商品部分-->
    <!-- <div class="goodsItem">
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
    </div>-->
    <van-checkbox-group clickable v-model="checked" ref="checkboxGroup" class="container">
      <van-checkbox name="a" class="shopcarItem">
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
      <van-checkbox name="b" class="shopcarItem">
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
      </van-checkbox>
      <van-checkbox name="e" class="shopcarItem">
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
      <van-checkbox name="f" class="shopcarItem">
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
    </van-checkbox-group>
    <div class="countLayout">
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
import Stepper from "../subcomponent/Stepper.vue";
export default {
  data() {
    return {
      checked: [],
      all: true
    };
  },
  methods: {
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll(this.all);
      this.all = !this.all;
    }
    //   toggle() {
    //     this.$refs.checkboxes[].toggle()
    // },
  },
  components: {
    stepper: Stepper
  }
};
</script>

<style scoped>
.container {
  padding: 0 0.5rem 30px;
}
.goodsItem,
.price,
.count {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 0;
}
.shopcarItem{
  margin:.5rem 0;
}
.price {
  font-size: 0.9rem;
  margin: 0.5rem 0;
}
.imgs {
  width: 20%;
}
.title {
  /* white-space:wrap; 
width:12em; 
overflow:hidden; 
border:1px solid #000000;
    text-overflow: ellipsis; */
  line-height: 1.4rem;
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
</style>