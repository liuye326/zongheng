<template>
    <div>    
        <Header></Header>
        <mt-search
        v-model="search"
        placeholder="请输入关键字"
        cancel-text=""
        >
        </mt-search>
        <mt-button class="bts" @click="sears">搜索</mt-button>
        <recommend :recommendData="recommendData"></recommend>
        <div class="main_titles">
            <div class="icon1"></div>
            <i class="main_title_right">热搜作品</i>
        </div>
         <navseek :list="list"></navseek>
        <div class="main_titles">
            <div class="icon1"></div>
            <i class="main_title_right">热搜标签</i>
        </div>
        <div class="bottoms"> 
            <div v-for="(item,i) of listtag" :key="i">{{item.content}}</div>
        </div>
    </div>
 </template>
<script>
import navseek  from "./RankItem.vue";
import recommend  from "./Recommend.vue";
import Header from './Header.vue';
export default {
  data(){ 
      return {
          search:"",
          list:[],
          listtag:[],
          recommendData:[]
      }
  }, 
  props:{
    swipeData:{default:""},
  },
  methods:{
    sears:function(){
        this.axios.get("/ns/searchlimit",{
        params:{
            key:this.search
        }
        }).then(res=>{
            this.recommendData = res.data;
        })
    }
  },
  watch:{
      search(){
          if(this.search==""){
              this.recommendData="";
          }
      }
  },
  created(){ 
     this.axios.get("/ns/navseek",{
     params:{
       
     }
    }).then(res=>{
        //console.log(res);
        var obj = res;
        this.list = obj['data'][0];
        this.listtag = obj['data'][1];
        //console.log(this.listtag)
    })
  },
   components:{
    "recommend":recommend,
    "navseek":navseek,
    "Header":Header
  }

}
</script>
<style>
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }
    .bts{
        width:3rem !important;
        height:1.75rem !important;
        font-size:12px !important;
        float:right;
        margin-top:-2.8rem;
        margin-right:0.5rem;
        background-color: #f2f2f2 !important;
        z-index:100;
    }
    .mint-searchbar-inner{
        width:60% !important;
    }
    .mint-search{
        height:auto !important;
    }
   .mint-searchbar{
       padding:1rem 4.5rem 1rem 0.8rem !important;
       background: #f2f2f2 !important;
       border-bottom: 1px solid #dfdfdf !important;
   }
   .bottoms{
       display:flex;
       flex-direction:row;
       flex-wrap:wrap;
       justify-content:space-around;
       width:100%;
       margin:1rem 0;
   }
   .bottoms div{
        width:21%;
        padding:0.5rem 1rem;
        background: #f2f2f2 !important;
        border-bottom: 1px solid #dfdfdf !important;
        margin: 0.3rem 0;
        background: #f2f2f2;
        border: 1px solid #dfdfdf;
        font-size:13px;
        border-radius: 3px;
   }
    .main_titles{
        text-align:left;
        border-top: 1px solid #dfdfdf;
        border-bottom: 1px solid #dfdfdf;
        background: #f2f2f2;
        padding:0.5rem 0.3rem;
    }
    .main_titles .main_title_right{
        font-size:14px;
        font-weight:bold !important;    
    }
    .icon1{  
        background-image: url('../../assets/icon.png');
        background-position: -1.5rem 0.1rem;
        background-size: 16rem;
        background-repeat: no-repeat;
        width: 1.2rem;
        display: inline-block;
        height: 1.2rem;
        vertical-align: -0.45rem;
        margin-right: 0.1rem;
    }
    .mint-search-list{
        display:none !important;
    }
</style>
