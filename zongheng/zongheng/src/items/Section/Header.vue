<template>
  <div class="outer">
    <a href="javascript:;" @click="back"><span class="iconfont">&#xe63b;</span>返回</a>
    <p>{{title_s}}</p>
    <a href="javascript:;" @click="shelf"><span class="iconfont">&#xe65c;</span>书架</a> 
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
      bid:{default:"1"}
    },
    methods:{
      back(){
        this.$store.commit('setSelected',"2")
        this.$router.push({
          path:"details",
          query:{
            bid:this.bid
          }
        });
      },
      shelf(){
        this.$store.commit('setSelected',"4")
        this.$router.go(-1);
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