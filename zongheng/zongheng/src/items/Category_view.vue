<template>
  <div class="outer">
    <Header :title_s="title_s" :backTo="backTo"></Header>
    <div class="innner_one">
      <p>
        <span>{{title_f}}</span>--<span>{{title_s}}</span>
      </p> 
    </div>
    <div class="inner_two">
      <Recommend :list="list"></Recommend>
    </div>
    <mt-button type="default" size="large" @click.native="loadMore">获取更多</mt-button>
    <Statement></Statement>
  </div> 
</template>
<script>
  import Header from './Common/Header.vue'
  import Statement from './Common/Statement.vue'
  import Recommend from "./Category/Recommend_cv.vue"
  export default{
    data(){
      return{
        start:0,
        count:8,
        list:[],
        data_count:29,
        title_f:"",
        title_s:"",
        backTo:0
      }
    },
    props:{

    },
    components:{
      "Header":Header,
      "Recommend":Recommend,
      "Statement":Statement
    },
    methods:{
      loadMore:function(){
        if(this.start<this.data_count){
          this.axios('/rank/viewlist',{
            params:{
              "start":this.start,
              "count":this.count
            }
          }).then(result=>{
            var arr = result.data[0];
            this.start+=8;
            this.data_count = result.data[1];
            this.list = this.list.concat(arr);
          })
        }else{
          this.$toast("没有更多");
        }
      }
    },
    created() {
      this.loadMore();
      this.title_f = this.$route.query.title_f;
      this.title_s = this.$route.query.title_s;
      var back = this.$route.query.back;
      if(back !== undefined){
        this.backTo = back;
      }
      sessionStorage.setItem("title_f",this.title_f);
      sessionStorage.setItem("title_s",this.title_s);
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
  .innner_one{
    font-size:14px;
    display:flex;

  }
  .innner_one>p:before{
    content:"";
    display:inline-block;
    width:0.5rem;
    height:0.875rem;
    background:rgb(66, 66, 66);
    border-radius:3px;
    margin-right:0.45rem;
  }
  .innner_one>p{
    height:15px;
    padding:11px 8px 0;
  }
  .mint-button--default{
    background:#e0e0e0;
  }
</style> 