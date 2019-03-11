<template>
  <ul id="tabbar">
    <!--实现组件的切换-->
    <router-link
      v-for="(item,index) in navlist"
      :to="item.path"
      :key="index"
      tag="li"
      active-class="sel"
    >{{item.title}}</router-link>
  </ul>
</template>

<script>
  export default {
    name:"TabBar",
    components:{

    },
    data(){
      return{
        navlist:[
          {path:'/home',title:'首页',icon:''},
          {path:'/category',title:'分类',icon:''},
          {path:'/shopcar',title:'购物车',icon:''},
          {path:'/my',title:'我的',icon:''}
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  @import url("../../style/main.less");
  #tabbar{
    .fs(16);
    .h(60);
    position: fixed;
    left:0;
    right:0;
    bottom:0;
    background: @tabBg;
    display: flex;
    li{
      width:25%;
      text-align: center;
      .lh(60);
      color: @tabColor;
    }
    .sel{
      color: @tabSelColor;
    }
  }
</style>
