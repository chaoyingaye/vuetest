<template>
  <div>
    <div class="swiper-slide">
      <!-- Swiper -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"  v-for="(item,index) in bannerList" :key="index">
            <img :src="rootPth+item.imgPath" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import Swiper from "swiper";

  export default {
    name:"Banner",
    data(){
      return{
        bannerList:[],
        rootPth:"http://10.9.42.245:3000/img/"
      }
    },
    methods:{
      initMySwiper(){
        let swiper = new Swiper('.swiper-container', {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        });
      },
      getBannerData(){
        this.$axios.get("/test/admin/getBanner")
          .then((res)=>{
            this.bannerList=res.data;
            Vue.nextTick(()=>{
              this.initMySwiper();
            })
          }).catch((err)=>{
              console.log(err)
        });
      }
    },
    mounted(){
      this.getBannerData();
    }
  }
</script>

<style scoped lang="less">
  @import url("../../../../node_modules/swiper/dist/css/swiper.css");
  @import url("../../../style/main.less");
  img{
    .w(375);
    display: block;
    margin:0 auto;
  }
</style>

