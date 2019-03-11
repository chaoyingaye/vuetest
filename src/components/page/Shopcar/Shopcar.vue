<template>
  <div id="home">
    这里是shopacar
    <TabBar></TabBar>
  </div>
</template>

<script>
	import TabBar from 'common/TabBar'
export default{
  name: 'Home',
  components:{
  	TabBar
  },
  data () {
    return {
      msg: '长安一片月'
    }
  }
}
</script>

<style lang="less">
</style>