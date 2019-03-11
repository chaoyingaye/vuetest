<template>
  <div id="theme">
    <p>精选主题</p>
    <div class="box">
      <div
        class="item"
        v-for="(item,index) in themes"
        :key="index"
        :class="index===2?'big':''"
        @click="goThem(item)"
      >
        <img :src="item.img" alt="">
      </div>
    </div>
    <ProductList newShow="true" :list="newShop"></ProductList>
  </div>
</template>

<script>
  import ProductList from "common/ProductList.vue"
  export default {
    name:"HomeTheme",
    components:{ProductList},
    data(){
      return{
        themes:[
          {title:'美味水果世界',img:'/static/1@theme.png',themeId:0},
          {title:'新品首发',img:'/static/2@theme.png',themeId:1},
          {title:'做个干物女',img:'/static/3@theme.png',themeId:2}
          ],
        newShop:[]
      }
    },
    methods:{
      goThem(item){
        this.$router.push({path:`/theme/${item.themeId}/${item.title}`});
      }
    },
    created(){
      this.$axios.get("/test/admin/getShop")
        .then((res)=>{
          this.newShop=res.data;
        })
        .catch((err)=>{
          console.log(err)
        })
    }
  }
</script>

<style scoped lang="less">
  @import url("../../../style/main.less");
  #theme{
    p{
      color:@themeColor;
      text-align:center;
      .h(45);
      .lh(45);
      .fs(18);
    }
    .box{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .item{
        width: 49.5%;
        img{
          width: 100%;
          display: block;
        }
      }
      .big{
        width: 100%;
        .m_t(4)
      }
    }
  }
</style>
