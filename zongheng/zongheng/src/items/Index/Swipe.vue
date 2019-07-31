<template>
    <div>    
      <mt-swipe :auto="4000" continuous class="myswipe">
        <mt-swipe-item v-for="(item,i) of swipeData" :key="i">
            <img :src="url_header + item.banner_pic" alt="符篆苍穹" width="100%" height="100%" @click="toDetails">
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
  props:{
      swipeData:{default:[]},
      url_header:{default:""}
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
