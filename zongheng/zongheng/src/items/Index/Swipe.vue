<template>
    <div>    
      <mt-swipe :auto="4000" continuous class="myswipe">
        <mt-swipe-item>
            <img src="https://static.zongheng.com/upload/recommend/current/2019/1562919538042.jpg" alt="符篆苍穹" width="100%" height="100%" @click="toDetails">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="https://static.zongheng.com/upload/recommend/current/2019/1562919470299.jpg" alt="仙道九绝" width="100%" height="100%" @click="toDetails">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="https://static.zongheng.com/upload/recommend/current/2019/1562919438190.jpg" alt="最强狂医" width="100%" height="100%" @click="toDetails">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="https://static.zongheng.com/upload/recommend/current/2019/1562919500039.jpg" alt="龙凤萌宝:总裁大人宠上瘾" width="100%" height="100%" @click="toDetails">
        </mt-swipe-item>
      </mt-swipe>
    </div>
 </template>
<script>
export default {
  data(){ //当前组件共享数据
      return {
         selected:""    
      }//数据
  },
  methods:{
      toDetails(){
          this.$router.push({
              path:"details",
              query:{
                bid:"1",
                back:2
              }
          })
      }
  }
}
</script>
<style>
    .myswipe{
        height:170px !important;
    }
  .myswipe .mint-swipe-item{
      background-color:#747474 !important;
      height:170px !important;
      color:white;
  }
  .myswipe .mint-swipe-indicator.is-active{
      background:red !important;
  }
</style>
