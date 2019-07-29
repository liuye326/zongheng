<template>
  <div class="outer">
    <div class="inner_one">
      <span>未登录</span>
      <mt-button type="danger" size="small" @click="toLogin">登录</mt-button>
    </div>
    <div class="inner_two">
      <span class="list_title">最近阅读</span>
      <readrecently></readrecently>
    </div>
  </div>
</template>
<script>
  import Read_recently from "./Read_recently.vue"
  export default{
    data(){
      return{
      }
    },
    props:{

    },
    methods:{
      toLogin(){
        this.$router.push("login");
      }
    },
    components:{
      "readrecently":Read_recently
    }
  }
</script>
<style scoped>
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  span{

  }
  .outer{
    background: #f2f2f2;
  }
  .inner_one{
    padding:0 0.5rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:3rem;
    border-bottom:1px solid #dfdfdf;
    font-family: Tahoma,"微软雅黑",Geneva,sans-serif;
    color: #4c4c4c;
  }
  .inner_one span{
    font-size:14px;
    font-weight:500;
    margin-left:1rem;
  }
  .list_title{
    display:block;
    width:100%;
    height:2rem;
    line-height:2rem;
    text-align:center;
    color: #ff4644;
    font-size:14px;
    border-bottom: 3px solid #ff4644;
    overflow: hidden;
  }
  .inner_two div{
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:14px;
    border-bottom:1px solid #dfdfdf;
  }
</style>