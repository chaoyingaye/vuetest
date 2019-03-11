<template>
  <div id="home">
    <Header class="header" title='零食商贩'></Header>
    <Banner class="banner"></Banner>
    <HomeTheme></HomeTheme>
    <div class="hehe"></div>
    <TabBar class="tabbar"></TabBar>
  </div>
</template>

<script>
  import Header from "common/Header"
  import Banner from "./Banner.vue"
  import HomeTheme from "pages/home/HomeTheme.vue"
  import TabBar from "common/TabBars"

  export default{
    name:"Home",
    data(){
      return{
        msg:"这是个vue组件"
      }
    },
    components:{Header,TabBar,Banner,HomeTheme}
  }
</script>

<style scoped lang="less">
  @import url(../../../style/main.less);
  #home{
    display: flex;
    flex-direction: column;
    .banner{
      .m_t(45)
    }
    .hehe{
      .h(60)
    }
  }
</style>
