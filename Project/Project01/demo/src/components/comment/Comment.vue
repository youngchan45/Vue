<template>
  <div>
    <div class="commentTitle">发表评论</div>
    <van-cell-group>
      <van-field v-model="message" type="textarea" placeholder="请输入评论" rows="3" maxlength="10" />
    </van-cell-group>
    <van-button block type="info" @click="addComment">提交评论</van-button>
    <div>
      <!-- 一次请求：使用slice限制展现从0-a的数据，这样展示的话是不理睬后台的返回数据的分页 -->
      <!-- <div v-for="(comment,index) in commentList.slice(0,a)" :key="index"> -->
      <!-- 分步请求：这里不用做限制，根据后台的数据分页返回即可 -->
      <div v-for="(comment,index) in commentList" :key="index">
        <div class="commentHead">
          <span>第{{index+1}}楼</span>
          <span>用户：{{comment.user_name}}</span>
          <span>发表时间：{{comment.add_time |timeset}}</span>
        </div>
        <div class="commentDetail">{{comment.content}}</div>
      </div>
    </div>
    <!-- 判断a的值是否小于评论总对象的长度，小于就显示加载更多 一次请求： -->
    <van-button block type="info" v-if="a<commentList.length" @click="getMore">加载更多</van-button>
    <!-- <van-button block type="info" v-if="commentList<currentPage" @click="getMore">加载更多</van-button> -->
    <van-divider v-else>没有更多了</van-divider>
  </div>
</template>

<style scoped>
/* .container{
    padding: .6rem;
} */
.commentTitle {
  font-size: 0.8rem;
  font-weight: 700;
}
.van-cell {
  padding: 0.3rem 0;
}
.van-button {
  height: 1.9rem;
  line-height: 1.9rem;
}
.commentHead,
.commentDetail {
  font-size: 0.73rem;
  padding: 0.3rem 0;
}
.commentHead {
  background-color: #e5e5e5;
  display: flex;
  justify-content: space-between;
}
/* 不加以下的话，在5/se机型中评论的信息标题会换行 */
.commentHead > span {
  white-space: nowrap;
  transform: scale(0.96);
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      message: "",
      commentList: [],
      pageindex: 1,
      //   currentPage:'',
      a: 5
    };
  },
  //   易错：props和data同级！不是写在data里面
  props: ["id"],
  created() {
    //   使用实例中的东西记得加this
    this.getComment();
  },
  methods: {
    //加载第一页评论
    getComment() {
      axios
        .get(
          "http://www.liulongbin.top:3005/api/getcomments/" +
            this.id +
            "?pageindex=" +
            this.pageindex
        )
        .then(res => {
          //   this.commentList = res.data.message;
          //   旧列表拼接新列表
          this.commentList = this.commentList.concat(res.data.message);
          // console.log(res);
        });
    },
    //点击加载更多按钮时
    getMore() {
      //   使用实例中的东西记得加this
      //页码+1
      this.pageindex++;
      //   this.currentPage=this.pageIndex;
      // this.a += 5;
      this.getComment();
    },
    addComment() {
      axios
      //易错点：这里的id是路由传过来的，应该是$route.params.id 而不是从data获取的
      
        .post("http://www.liulongbin.top:3005/api/postcomment/" + $route.params.id)
        .then(res => {
// res.data.commentList.unshift(this.message)
// artid:this.id;
// content:this.message;
// url:'/api/postcomment/'+this.id;
// res.data.content:this.message;

if(res.data.status===0){
  // toast的使用方法和官方文档不一样
          // this.$toast({
          //     message:'我是提示文字',
          //   })
          //高级配置
const toast = this.$toast({
            duration: 1000,
            forbidClick: true, // 禁用背景点击
            message: res.data.message
          });
}        
        });
    }
  }
};
</script>