<template>
  <div id="shops">
    <div class="imgBox">
      <img src="../../../../static/category-dryfruit.png" alt="">
    </div>
    <h3>—— {{oneShopCategory?oneShopCategory:'果味'}} ——</h3>
    <ul>
      <li v-for="(item,index) in shopList" @click="goShopInfo(item)">
        <img :src="rootPath+item.imgPath" alt="">
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:"ShopCategory",
    props:["oneShopCategory"],
    data(){
      return{
        msg:"ahahahaha",
        shopList:[],
        rootPath:"http://127.0.0.1:3000/img/",
      }
    },
    methods:{
      ajax(newCla){
        this.$axios.get("/test/admin/getShopByClassName?shopClass="+newCla)
          .then((res)=>{
            this.shopList=res.data;
          })
          .catch((err)=>{
            console.log(err)
          })
      },
      goShopInfo(item){
        this.$router.push({path:`/shopInfo/${item._id}/${item.imgPath}`})
      }
    },
    created(){
      this.ajax("水果");
    },
    watch:{
      oneShopCategory:function () {
        let newCla;
        switch (this.oneShopCategory){
          case "果味":newCla="水果";break;
          case "蔬菜":newCla="蔬菜";break;
          case "炒货":newCla="炒货";break;
          case "点心":newCla="点心";break;
          case "粗茶":newCla="茶叶";break;
          case "淡饭":newCla="谷物";break;
          default:alert("error");break;
        }
        this.ajax(newCla);
      },
    }
  }
</script>

<style scoped lang="less">
  @import url("../../../style/main");
  #shops{
    .m_t(45);
    width:80%;
    .imgBox{
      width:100%;
      img{
        width:90%;
        display: block;
        margin: 0 auto;
        .m_t(15);
      }
    }
    h3{
      font-weight:normal;
      text-align: center;
      .h(40);
      .lh(40);
      .fs(16);
    }
    ul{
      width:100%;
      display: flex;
      flex-wrap: wrap;
      li{
        width:33%;
        .fs(16);
        .h(100);
        text-align: center;
        img{
          width:50%;
          display: block;
          margin:5px auto;
          .m_b(10)
        }
      }
    }
  }
</style>
