<template>
  <div class="outer">
    <img src="http://freely.applinzi.com/images/regist.png" alt=""> 
    <p>书友 <span>{{user.nickname}}</span></p>
    <h3>欢迎加入纵横文学</h3>
    <mt-button size="large" type="danger" @click="toLogin">前往登录</mt-button>
  </div> 
</template>
<script>
  export default{
    data(){
      return{

      }
    },
    props:{
      user:{default:{}},
      state:{default:2}
    },
    methods:{
      toLogin(){
        this.$router.push("login");
      }
    }
  }
</script>
<style scoped>
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
  }
  .outer{
    padding:0 4rem;
  }
  img{
    width:5rem;
    height:5rem;
    border-radius:50%;
  }
  p{
    margin-top:0.5rem;
    font-size: 0.5rem;
    color: #aaa;
  }
  h3{
    margin-top:2rem;
  }
  button{
    margin-top:1rem;
  }
</style>