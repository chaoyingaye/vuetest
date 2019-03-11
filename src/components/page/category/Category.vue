<template>
  <div id="category">
    <Header title='分类'></Header>
    <div class="box">
      <Nav v-on:getCategory="getSonCategory"></Nav>
      <ShopCategory :oneShopCategory="oneCategory"></ShopCategory>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import Header from "common/Header"
  import Nav from  "./Nav.vue"
  import ShopCategory from "./ShopCategory.vue"
  import TabBar from "common/TabBars.vue"
  export default {
    name:"Category",
    data(){
      return{
        msg:"我是类别组件",
        oneCategory:''
      }
    },
    methods:{
      getSonCategory(sel){
        this.oneCategory=sel;
      }
    },
    created(){

    },
    components:{Header,TabBar,Nav,ShopCategory}
  }
</script>

<style scoped lang="less">
  @import url("../../../style/main");
  #category{
    .box{
      display: flex;
    }
  }
</style>
