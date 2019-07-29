<template>
    <div>
        <Header></Header>
        <mt-navbar v-model="selected" class="mybar">
            <mt-tab-item id="1">首页</mt-tab-item>
            <mt-tab-item id="2">分类</mt-tab-item>
            <mt-tab-item id="3">排行</mt-tab-item>
            <mt-tab-item id="4">书架</mt-tab-item>
        </mt-navbar>
   
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1" class="back"> 
                <swipe :swipeData="swipeData"></swipe>
                <twobt></twobt>
                <recommend :recommendData="recommendData"></recommend>
                <men :menData="menDatamale" :mentitle="maletitle"></men>
                <men :menData="menDatafemale" :mentitle="femaletitle"></men>
                <oneben :onebenData="onebenData[i]" :oneben="oneben[i]" :dataone="dataone[i]" v-for="(item,i) of onebenData" :key="i"></oneben>
                 <men :menData="menDatawanben" :mentitle="wanbentitle"></men>
                 <men :menData="menDataxinshu" :mentitle="xinshutitle"></men>
                <Statement></Statement>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <category></category>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <rank></rank>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <bookshelf></bookshelf>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
 </template>
<script>
import swipe  from "./Index/Swipe.vue";
import twobt  from "./Index/Twobt.vue";
import recommend  from "./Index/Recommend.vue";
import men  from "./Index/Men.vue";
import oneben  from "./Index/Oneben.vue";
import category from './Category.vue'
import Rank from './Rank.vue'
import Bookshelf from './Bookshelf.vue'
import Statement from './Common/Statement.vue';
import header from './Index/indexHeader.vue';
export default {
  data(){ //当前组件共享数据
      return {
         selected:"1",
         swipeData:[],   
         recommendData:[], 
         menDatamale:[],
         menDatafemale:[], 
         menDatawanben:[], 
         menDataxinshu:[], 
         maletitle:"男生必读",
         femaletitle:"女生爱看",
         wanbentitle:"完本经典",
         xinshutitle:"新书精选",
         onebenData:[],
         oneben:[],
         dataone:[]
      }//数据
  },
  watch:{
      selected(){
        this.$store.commit('setSelected',this.selected);
      }
  },
  methods:{
    
  },
  created(){
     this.selected = this.$store.getters.getSelected;
     var url = "http://127.0.0.1:4000/index/getindex";
     this.axios.get(url,{
     params:{
       
     }
    }).then(res=>{
      
       var obj = res.data
       this.swipeData=obj[0];

       this.recommendData=obj[1];

       this.menDatamale=obj[2]['male'];
       this.menDatafemale=obj[2]['female'];

       this.onebenData.push(obj[3]['xuanhuan']);
       this.onebenData.push(obj[3]['dushi']);
       this.onebenData.push(obj[3]['kehuan']);
       this.onebenData.push(obj[3]['remen']);
       this.oneben.push("玄幻仙侠");
       this.oneben.push("都市娱乐");
       this.oneben.push("科幻历史");
       this.oneben.push("热门作品");
       this.dataone.push(obj[3]['xuanhuan'][0]);
       this.dataone.push(obj[3]['dushi'][0]);
       this.dataone.push(obj[3]['kehuan'][0]);
       this.dataone.push(obj[3]['remen'][0]);

       this.menDatawanben=obj[4]['wanben'];
       this.menDataxinshu=obj[4]['xinshu'];
    })

  },
  components:{
    "swipe":swipe,
    "twobt":twobt,
    "recommend":recommend,
    "men":men,
    "oneben":oneben,
    "category":category,
    "Statement":Statement,
    "rank":Rank,
    "bookshelf":Bookshelf,
    "Header":header
  }
}
</script>
<style>
    *{
        padding:0;margin:0;
        font-family: Tahoma,"微软雅黑",Geneva,sans-serif;
    }
    .back{
        background-color:#f5f5f5;
    }
    .mybar{
        background-color:#000 !important;
        color:#a1a1a1 !important;
    }
    .mybar>.is-selected{
        margin-bottom:0 !important;
        border-bottom:0 !important;
        background-color:#454545 !important;
        color:#fff !important;
    }
</style>
