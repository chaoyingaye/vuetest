<template>
  <div id="theme">
    <Header btnShow="true" :title="themeName"></Header>
    <div class="top">
      <img :src="imgPath+bannerShop[themeId]" alt="">
    </div>
    <div>
      <ProductList :list="shopList"></ProductList>
    </div>
  </div>
</template>

<script>
  import Header from "common/Header.vue"
  import ProductList from "common/ProductList.vue"
  export default {
    name:"Theme",
    data(){
      return{
        shopList:[],
        themeName:'零食商贩',
        shopClass:'aaa',
        imgPath:"../../../../static/",
        bannerShop:["1@theme-head.png","2@theme-head.png","3@theme.png"],
        themeId:''
      }
    },
    methods:{
      ajax(shop){
        this.$axios.get("/test/admin/getShopByClassName?shopClass="+shop)
          .then((res)=>{
            this.shopList=res.data;
          })
          .catch((err)=>{
            console.log(err)
          })
      }
    },
    created(){
      this.themeName=this.$route.params.themeTitle;
      this.themeId=this.$route.params.themeId;
      switch (this.themeId){
        case '0': this.shopClass="水果";this.ajax(this.shopClass);break;
        case '1': this.shopClass="谷物";this.ajax(this.shopClass);break;
        case '2': this.shopClass="干果";this.ajax(this.shopClass);break;
        default: console.log("err");break;
      }
    },
    components:{Header,ProductList},
  }
</script>

<style scoped lang="less">
  @import url('../../../style/main');
  #theme{
    .top{
      .m_t(45);
      .w(375);
      img{
        width:100%;
      }
    }
  }
</style>
