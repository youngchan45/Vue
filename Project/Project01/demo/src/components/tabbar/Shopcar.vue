<template>
  <div>
    <!--易错点：复选框组中的v-model是一个数组，选中的值是每个复选项中的name，选中后则讲name往数组里面加-->
    <!--单纯的复选框中的v-model是一个布尔值-->
    <van-checkbox-group clickable v-model="checked" ref='checkboxGroup'>
      <van-cell >1111111

<!-- <van-checkbox name='b'>2</van-checkbox> -->
      </van-cell>
      <van-checkbox name='a'>11111111</van-checkbox>
    </van-checkbox-group>
    <van-button type='primary' @click='toggleAll'>all</van-button>
  </div>
</template>

<script>

export default {
  data(){
    return{
      checked:[],
      all:true,
    }
  },
  methods: {
    toggleAll(){
      this.$refs.checkboxGroup.toggleAll(this.all);
      this.all=!this.all;
    },
  //   toggle() {
  //     this.$refs.checkboxes[].toggle()
  // },
}
}
</script>

<style scoped>
  
</style>