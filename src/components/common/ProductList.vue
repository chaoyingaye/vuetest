<template>
  <div id="product">
    <p class="newShop" v-if="newShow">最近新品</p>
    <ul class="box">
      <li class="item" v-for="(item,index) in list" :key="index" @click="goShopInfo(item)">
        <img :src="rotPath+item.imgPath" alt="">
        <p>{{item.name}}</p>
        <p>￥{{item.price}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:"ProductList",
    props:["newShow","list"],
    data(){
      return{
        rotPath:"http://10.9.42.245:3000/img/",
      }
    },
    methods:{
      goShopInfo(item){
        this.$router.push({path:`/shopInfo/${item._id}/${item.imgPath}`})
      }
    }
  }
</script>

<style scoped lang="less">
  @import url("../../style/main.less");
  #product{
    .w(365);
    .p_b(15);
    margin:0px auto;
    .newShop{
      color:@themeColor;
      text-align:center;
      .h(45);
      .lh(45);
      .fs(18);
    }
    .box{
      display: flex;
      flex-wrap:wrap;
      justify-content: space-between;
      .item{
        .m_t(5);
        border-radius:7px;
        background: rgb(243,243,243);
        .w(180);
        .h(180);
        img{
          width: 65%;
        }
        display: flex;
        flex-direction:column;
        align-items: center;
        .fs(17);
      }
    }
  }
</style>
