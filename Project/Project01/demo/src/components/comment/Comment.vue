<template>
  <div class="container">
    <div class="commentTitle">发表评论</div>
    <!-- <van-cell-group>
      <van-field 
      v-model="message" 
      type="textarea" 
      placeholder="请输入评论" 
      rows="3" />
    </van-cell-group> -->
    <van-button block type="info" >提交评论</van-button>
<div>
    <div>

    </div>
</div>

    <van-button block type="info" >加载更多</van-button>
  </div>
</template>

<style scoped>
/* .container{
    padding: .6rem;
} */
.commentTitle{
    font-size: .8rem;
    font-weight: 700
}
.van-cell{
    padding:.3rem 0;
}
.van-button{
    height: 1.9rem;
    line-height: 1.9rem;
}
</style>

<script>
export default {
    data(){
        return{
            message:'',
        }
    }
};
</script>