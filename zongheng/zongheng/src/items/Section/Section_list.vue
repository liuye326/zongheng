<template>
  <div class="outer">
    <ul class="inner_one" @click="skipToEssay">
      <li v-for="(item,i) of list" :key="i"><a :href="item.link" :data-id="item.sid">
          <span :data-id="item.sid">{{item.title}}</span>
          <span class="iconfont" :data-id="item.sid">&#xe648;</span>
      </a></li>
    </ul> 
  </div> 
</template>
<script>
  export default{
    data(){
      return{

      }
    },
    props:{
      list:{default:[]},
      bid:{default:"1"}
    },
    created() {
      
    },
    methods:{
      skipToEssay:function(e){
        var a = e.target;
        if(a.hasAttribute("data-id")){
          var sid = a.dataset.id;
          this.$router.push({
            path: 'EssayPage',
            query: {
              sid,
              bid:this.bid
            }
          })
        }
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
    font-family: Tahoma,"微软雅黑",Geneva,sans-serif;
  }
  .inner_one{
    width:100%;
  }
  .inner_one>li{
    display:block;
    width:100%;
    height:2.5rem;
    background:#fafafa;
    border-bottom: 1px solid #dfdfdf;
  }
  .inner_one>li>a{
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    height:100%;
    text-decoration:none;
    font-size:14px;
    color: #4c4c4c;
    padding:0 1rem;
  }
</style>