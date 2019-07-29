<template>
  <div class="outer">
    <a href="javascript:;" @click="back"><span class="iconfont">&#xe63b;</span>返回</a>
    <p>{{title_s}}</p>
    <a href="javascript:;" @click="toLogin"><span class="iconfont">&#xe62e;</span>登录</a> 
  </div> 
</template>
<script>
  export default{
    data(){
      return{

      }
    },
    props:{
      title_s:{default:"西方奇幻"},
      backTo:{default:0}
    },
    methods:{
      back(){
        if(this.backTo==0){
          this.$store.commit('setSelected',"4")
          this.$router.go(-1);
        }else if(this.backTo==1){
          this.$store.commit('setSelected',"4")
          this.$router.go(-1);
        }

      },
      toLogin(){
        this.$router.push({
          path:"login",
          query:{
            back:1
          }});
      }
    }
  }
</script>
<style scoped>
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  .outer{
    height:2.75rem;
    width:100%;
    background:#333;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#fff;
    font-size:14px;
  }
  .outer>p{
    font-size:19px;
  }
  .outer>a{
    display:flex;
    width:20%;
    height:100%;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    color:#fff;
  }
  .outer>a>span{
    margin-right:0.2rem;
  }
</style>