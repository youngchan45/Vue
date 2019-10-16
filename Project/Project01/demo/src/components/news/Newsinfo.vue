<template>
  <!-- 获取id方法一： {{$route.params.id}}-->
  <!--获取id方法二：  {{id}} -->
  <div class="container">
    <h4 class="title">{{newsinfo.title}}</h4>
    <div class="subhead">
      <span>发表时间: {{newsinfo.add_time |timeset}}</span>
      <span>点击{{newsinfo.click}}次</span>
    </div>
    <article class="detail" v-html="newsinfo.content"></article>
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<style scoped>
.container {
  padding: 0 0.4rem;
}
.title {
  text-align: center;
}
.subhead {
  display: flex;
  justify-content: space-between;
  color: #1990fa;
  font-size: .6rem;
}
.detail {
  /* padding: 0.9rem 0; */
  font-size: .79rem;
  line-height: 1.4rem;
}
</style>

<script>
import axios from "axios";
import Comment from '../comment/Comment.vue'

export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: [],
    };
  },
//   总是忘记加s
  components:{
'comment-box':Comment
  },
  created() {
    axios
      .get("http://www.liulongbin.top:3005/api/getnew/" + this.id)
      .then(res => {
        //   console.log(res)
        //取message的第一个是因为message是一个数组，而新闻详情作为唯一一个对象存放在数组里面
        this.newsinfo = res.data.message[0];
      });
  }
};
</script>