<template>
    <div>
        {{id}}
    </div>
</template>

<style>
    
</style>

<script>
export default {
    data(){
        return{
            id:this.$route.params.newid
        }
},
created() {
    axios.get("http://www.liulongbin.top:3005/api/getnew/:newid").then(res => {
      console.log(res.data)
    });
  },
  }
</script>