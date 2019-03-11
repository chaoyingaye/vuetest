<template>
  <div id="err">
    <!--<router-link :to="'/'">点击跳转回首页</router-link>-->
    <span>页面不存在，3秒后自动调回首页</span>
  </div>
</template>

<script>
  export default {
    name:"Err",
    data(){
      return{
        msg:"错误页面"
      }
    },
    mounted(){
      setTimeout(()=>{
        this.$router.push('/')
      },3000)
    }
  }
</script>

<style>

</style>
