<template>
    <div class="open home">    
        <mt-button type="primary" class="man" @click="toDetails('免费专区')">
          <div class="icon_man"></div>
          免费专区
        </mt-button>
        <mt-button type="danger" class="woman" @click="toDetails('女频精选')">
       <div class="icon_woman"></div>
        女频精选
        </mt-button>
    </div>
 </template>
<script>
export default {
  data(){ //当前组件共享数据
      return {
       
      }//数据
  },
  methods:{
    toDetails(title_s){
      this.$router.push({
        path:"Category_view",
        query:{
          title_f:"所有书籍",
          title_s,
          back:1
        }})
    }
  }
}
</script>
<style scoped>
  *{
      padding:0;
      margin:0;
      box-sizing: border-box;
  }
  .home {
      padding: 0.5rem 0.25rem;
      border-bottom: 1px solid #e6e6e6;
      width:100%;
      background-color:#fff;
  }
  .open{
    display:flex;
    flex-direction:row;
    justify-content:center;
  }
  .man{
    background:-webkit-linear-gradient(left top, #82a9e1,#7297c1) !important;
    width:45% !important;
    text-align:center;
    font-size:16px !important;
    margin-right:3%;
    border-radius:0.6rem;
  }
  .woman{
    background:-webkit-linear-gradient(left top, #d4b8d6 ,#c39cc9) !important;
    width:45% !important;
    text-align:center;
    font-size:16px !important;
    border-radius:0.6rem;
  }
  .icon_man{
    background-image: url(/img/icon.81b3dffe.png);
    background-position: -7.3rem 0;
    background-size: 15rem;
    background-repeat: no-repeat;
    width: 2.2rem;
    display: inline-block;
    height: 1.2rem;
    vertical-align: -0.3rem;
    margin-right: 0.1rem;
  }
  .icon_woman{
    background-image: url(/img/icon.81b3dffe.png);
    background-position: -10.2rem 0;
    background-size: 14rem;
    background-repeat: no-repeat;
    width: 1.6rem;
    display: inline-block;
    height: 1.2rem;
    vertical-align: -0.3rem;
    margin-right: 0.1rem;
  }
</style>