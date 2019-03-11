<template>
  <div id="my">
    <!--<Header title='我的'></Header>-->
    <router-view></router-view>
    <button @click="cheange">改变改变</button>
    {{this.$store.state.name}}
    <TabBar></TabBar>
  </div>
</template>

<script>
  import Header from "common/Header"
  import TabBar from "common/TabBars.vue"

  export default {
    name:"My",
    data(){
      return{
        msg:"我是我的组件"
      }
    },
    created(){
      console.log(this.$store.state.name)
    },
    methods:{
      cheange(){
        this.$store.commit("increment","hehehahahei")
      }
    },
    components:{Header,TabBar}
  }
</script>

<style scoped lang="less">

</style>
