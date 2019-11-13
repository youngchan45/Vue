<template>
  <div>
    <!--易错点：这里是使用监听 而不是点击-->
    <van-stepper
      v-model="value"
      min="1"
      :max="max"
      integer
      input-width="3rem"
      button-size="1.1rem"
      @change="sendCount"
      ref="stepper"
      async-change
    />
    <!-- {{max}} -->
  </div>
</template>

<script>
export default {
  props: ["max"],
  data() {
    return {
      value: this.$store.state.count
    };
  },
  mounted() {
    // console.log(this.max);
  },
  methods: {
    sendCount() {
      //易错点：子组件传递给父组件的方法中，函数名是父组件上绑定的函数名；子组件要传递给父组件的是另一个函数名
      this.$emit("changeCount", this.value);
      //   console.log(this.value);
    }
  },
  //重要：
  // 1）子组件文件里的步进器的方法传递给父组件文件
  // 2）父组件文件里的步进器标签先接受这个方法
  // 3）再把标签里的这个方法传递给加入购物车的按钮
//   watch: {
//     max: (newVal, oldVal) => {
// this.max==newVal
//     }
//   }
};
</script>

<style scoped>
</style>