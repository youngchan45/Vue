<template>
  <div>
<input type="button" value="-">
<input type="button" value="+" @click="add">
<input type="text" name="" id="" v-model='$store.state.count'>
  </div>
</template>

<script>


export default {
  data() {
    return {
      // count:0,
    }
  },
  methods: {
    add(){
      this.$store.state.add
    }
  },
}
</script>
