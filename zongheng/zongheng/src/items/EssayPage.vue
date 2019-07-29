<template>
  <div class="outer">
    <div class="inner_one" style="font-size: 20px;" v-html="content"></div>
    <div class="inner_two">
      <a href="javascript:;" class="btn1" @click="btnPrev">
        <span class="iconfont">&#xe712;</span>
        上一章
      </a>
      <a href="javascript:;" class="btn2" @click="catalog">
        <span class="iconfont">&#xe60e;</span>
        目录
      </a>
      <a href="javascript:;" class="btn3" @click="btnNext">
        下一章
        <span class="iconfont">&#xe76a;</span>
      </a>
    </div>
    <Statement></Statement>
  </div> 
</template>
<script>
  import Statement from './Common/Statement.vue'
  export default{
    data(){
      return{
        content:"",
        sid:1,
        essay_count:0,
        bid:"1"
      }
    },
    props:{

    },
    components:{
      "Statement":Statement
    },
    methods:{
      loadMore:function(){
        this.axios("/details/getessay",{
          params:{
            "sid":this.sid,
          }
        }).then(res=>{
          this.content = res.data[0].content;
          this.essay_count = res.data[1];
        })
      },
      btnPrev:function(){
        if(this.sid==1){
          this.$toast("已到达第一章");
        }else{
          this.sid--;
          this.toTop();
        }
      },
      btnNext:function(){
        if(this.sid==this.essay_count){
          this.$toast("已是最后一章");
        }else{
          this.sid++;
          this.toTop();
        }
      },
      catalog:function(){
        this.$router.push({
            path: 'Section',
            query:{
              bid : this.bid
            }
          })
      },
      toTop:function() {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
      }
    },
    created(){
      this.sid = this.$route.query.sid;
      this.bid = this.$route.query.bid;
      this.loadMore();
    },
    watch:{
      sid(){
        this.loadMore();
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
    width:100%;
    min-width:20rem;
    background:rgb(230,224,208);
    color: #2e343f;
    line-height: 1.7;
  }
  .outer:before{
    content:"";
    display:table;
  }
  .outer >>>.title{
    font-weight: bold;
    text-align: center;
    padding: 0 10px;
    margin:1rem 0 0.5rem;; 
  }
  .outer >>>.text>p{
    text-indent: 2.5rem;
    overflow-x: hidden;
    font-size: 1.2rem;
    text-align:start;
    padding:0 1rem;
  }
  .inner_two{
    margin-top:2rem;
    padding: 0 0.5rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .inner_two>a{
    text-decoration:none;
    height:2.5rem;
    color:#2e343f;
    font-size:14px;
    display:flex;
    justify-content:center;
    align-items:center;
    border: 1px solid #c6c6c6;
    background: -webkit-gradient(linear,0 0,0 100%,from(#fff),to(#e8e8e8));
    border-radius:8px;
  }
  .btn1,.btn2{
    width:25%;
  }
  .btn1 span{
    margin-right:0.3rem;
  }
  .btn2 span{
    margin-right:0.3rem;
  }
  .btn3 span{
    margin-left:0.3rem;
  }
  .inner_two>.btn3{
    width:45%;
    color: #fff;
    background: #7fb82d;
    border: 1px solid #6ca41c;
  }
</style> 