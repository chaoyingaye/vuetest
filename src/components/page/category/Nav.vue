<template>
  <div id="nav">
    <ul>
      <li
        v-for="(item,index) in categoryList"
        :key="index"
        @click="selCategory(item)"
        v-bind:class="sel===item?'ff':''"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:"Nav",
    data(){
      return{
        categoryList:["果味","蔬菜","炒货","点心","粗茶","淡饭"],
        sel:"果味",
      }
    },
    methods:{
      selCategory(item){
        this.sel=item;
        this.$emit("getCategory",this.sel);
      }
    }
  }
</script>

<style scoped lang="less">
  @import url("../../../style/main");
  #nav{
    .m_t(45);
    width: 20%;
    border-right:1px solid #d3d3d3;
    .h(562);
    ul{
      li{
        .fs(16);
        color: #000;
        text-align: center;
        width:100%;
        .h(37.5);
        .lh(37.5);
        box-sizing: border-box;
        border-left:3px solid #ffffff;
      }
      .ff{
        border-left:3px solid #AB956D;
        color: #AB956D;
      }
    }
  }

</style>
