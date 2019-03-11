<template>
  <div id="shopInfo">
    <Header btnShow="true" :title="infoTip"></Header>
    <img :src="rootPath+thisImgPath" alt="">
    <div class="addCar">
      <div class="left">
        数量
        <input v-model="num" value="1">
        <div class="btn">
          <button class="add" @click="changeNumAdd">+</button>
          <button class="pop" @click="changeNumPop">-</button>
        </div>
      </div>
      <div class="right" @click="addShop(shopId)">
        <span>加入购物车</span>
        <i>Car</i>
      </div>
    </div>
    <div class="shopNum">
      <p class="kc">有货</p>
      <p>{{thisShop.name}}</p>
      <p>￥ {{thisShop.price}}</p>
    </div>

    <mt-navbar v-model="selected" class="navList">
      <mt-tab-item id="1">商品详情</mt-tab-item>
      <mt-tab-item id="2">产品参数</mt-tab-item>
      <mt-tab-item id="3">售后保障</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected" class="navbar">
      <mt-tab-container-item id="1" class="photos">
        <ul>
          <li v-for="n in 12" :key="n">
            <img :src="`../../../static/detail-${n}@1-dryfruit.png`" alt="">
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <span>en啊哈哈哈</span>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <span>对不起，暂时不提供保障，敢买你就来，是兄弟就来砍我，贪吃杨梅，你值得拥有！</span>
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>

<script>
  import Header from "common/Header"

  export default{
    name:"ShopInfo",
    components:{Header},
    data(){
      return{
        msg:"ahahaha",
        infoTip:"商品详情",
        num:1,
        shopId:'',
        rootPath:"http://10.9.42.245:3000/img/",
        thisShop:'',
        thisImgPath:'',
        selected:"1"
      }
    },
    methods:{
      changeNumAdd(){
        if(this.num>=99) return;
        this.num++;
      },
      changeNumPop(){
        if(this.num<=1) return;
        this.num--;
      },
      addShop(){
        console.log("添加购物车")
      },
      ajax(id){
        this.$axios.get("/test/admin/getShopById?id="+id)
          .then((res)=>{
            this.thisShop=res.data[0];
          })
          .catch((err)=>{
            console.log(err);
          })
      }
    },
    created(){
      this.shopId=this.$route.params.shopId;
      this.thisImgPath=this.$route.params.imgPath;
      this.ajax(this.shopId)
    }
  }
</script>

<style scoped lang="less">
  @import url("../../../style/main.less");
  #shopInfo{
    img{
      display: block;
      width:80%;
      margin:0 auto;
      .m_t(45);
    }
    .addCar{
      width:80%;
      .h(50);
      background: @themeColor;
      display: flex;
      border-radius: 25px;
      .fs(14);
      color: #ffffff;
      text-align: center;
      .lh(50);
      margin:0 auto;
      .left{
        display: flex;
        width:40%;
        .p_l(20);
        input{
          .m_l(10);
          border:none;
          .w(40);
          text-align: center;
          background: @themeColor;
          color: #ffffff;
        }
        .btn{
          .m_l(10);
          display: flex;
          flex-direction: column;
          button{
            .w(30);
            height:49%;
            .fs(20);
            border:none;
            background:@themeColor ;
            color: #fff;
          }
        }
      }
      .right{
        .m_l(30);
      }
    }
    .shopNum{
      .fs(16);
      border-bottom:10px solid #eeeeee;
      text-align: center;
      p{
        .m_b(15);
      }
      .kc{
        .fs(12);
        .m_t(15);
      }
    }
    .navbar{
      .fs(16);
      .photos{
        ul{
          li{
            img{
              display: block;
              width: 100%;
              .m_t(0);
              border:0;
            }
          }
        }
      }
    }
  }
</style>
