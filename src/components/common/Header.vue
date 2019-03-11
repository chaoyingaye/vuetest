<template>
  <div id="header">
    <div @click="backFn" class="back" v-if="btnShow" :title="title">返回</div>
    <p>{{title}}</p>
  </div>
</template>

<script>
  export default {
    name:"Header",
    data(){
      return{
        tip:"零食商贩"
      }
    },
    props:['btnShow','title'],
    methods:{
      backFn(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less">
  @import url("../../style/main");
  #header{
    background: @themeColor;
    .w(375);
    .h(45);
    .fs(18);
    text-align:center;
    .lh(45);
    color: #fff;
    position: fixed;
    top: 0px;
    z-index:999;
    display: flex;
    justify-content: center;
    .back{
      position: absolute;
      left:10px;
    }
  }
</style>
