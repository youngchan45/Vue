<template>
  <div>
    <!-- <van-tabs v-model="activeName">
      <van-tab title="全部" name="a">内容 1</van-tab>
      <van-tab title="家居生活" name="b">
        <div class="imglist" v-for="(img,index) in imgList" :key="index">
          <img :src="img.img_url" alt="图片分享" />
          <div class="shade">
            {{img.title}}
            <div>{{img.zhaiyao}}</div>
          </div>
        </div>
      </van-tab>
      <van-tab title="摄影设计" name="c">内容 3</van-tab>
    </van-tabs>-->
    <!-- <van-tabs  >
      <van-tab
        v-for="tabs in tabList"
        :title="tabs.title"
        :key="tabs.id">
        <div @click="getImglist(key,title)" class="imglist" v-for="img in imgList" :key="img.id">
          <img :src="img.img_url" alt="图片分享" />
          
          <div class="shade">
            {{img.title}}
            <div>{{img.zhaiyao}}</div>
          </div>
        </div>
      </van-tab>
    </van-tabs> -->

<van-tabs v-model="active" swipeable>
  <!-- 标签栏区域 -->
  <van-tab v-for="tabs in tabList" :key='tabs.id' :title="tabs.title">

    <!-- 联动图片列表区域 -->
    <div v-for='imgs in imgList' :key='imgs.id'>
      <img :src="imgs.img_url" alt="">
{{img.id}}
    </div>

  </van-tab>
</van-tabs>

  </div>
</template>

<style scoped>
.imglist img {
  width: 100%;
  display: block;
  position: relative;
}
.shade {
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  /* height: auto; */
  width: 100%;
  position: absolute;
  bottom: 0rem;
  /* min-height: 50px; */
  word-wrap: break-word;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      active: "",
      tabList: [],
      imgList: []
    };
  },
  created() {
    this.getTablist();
    this.getImglist();
  },
  methods: {
    getTablist() {
      axios
        .get("http://www.liulongbin.top:3005/api/getimgcategory")
        .then(res => {
          this.tabList = res.data.message;
          res.data.message.unshift({ title: "全部", id: 0 });
        });
    },
    getImglist(tabId,tabTitle) {
      axios
        .get("http://www.liulongbin.top:3005/api/getimages/" + tabId)
        .then(res => {
          this.imgList = res.data.message;
        });
    }
  }
};
</script>