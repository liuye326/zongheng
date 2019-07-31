<template>
    <div class="main" @click="toDetails">    
        <a href="javascript:;" class="bodys" v-for="(item,i) of list" :data-bid="item.bid" :key="i">
            <div class="body_left"  :data-bid="item.bid">
                <img :src="url_header + item.b_pic" :alt="item.title" :data-bid="item.bid">
            </div>
            <div class="body_right" :data-bid="item.bid">
                <h4 :data-bid="item.bid">{{item.title}}</h4>
                <p :data-bid="item.bid">{{item.author}}</p>
                <p :data-bid="item.bid">最新: <span  :data-bid="item.bid">{{item.renewal}}</span></p>
                <p :data-bid="item.bid">简介: <span  :data-bid="item.bid">{{item.intro}}</span></p>
            </div>
        </a>
    </div>
 </template>
<script>
export default {
  data(){ //当前组件共享数据
      return {
          
      }//数据
  },
  props:{
    list:{default:[]},
    url_header:{default:""}
  },
  methods:{
    toDetails(e){
        var bid = e.target.dataset.bid;
        this.$router.push({
            path: 'details',
            query: {
              bid
            }
        })
    }
  },
  created(){
     
  }
}
</script>
<style scoped>
    *{
        padding:0;margin:0;
    }
    .main{
        width:100%;
        padding: 1rem 1rem 0 1rem;
        border-bottom: 1px solid #e6e6e6;
        background: #fff;
        box-sizing:border-box;
    }
    .main .main_title{
        width:100%;
        text-align:left;
    }
    .main .main_title .main_title_right{
        font-weight:bold !important;
    }
    .main .main_title .main_title_left{
        display: inline-block;
        width: 0.25rem;
        height: 0.95rem;
        background-color: #e95e56;
        border-radius: 0.5rem;
        vertical-align: -0.1rem;
        margin-right: 0.3rem;
    }
     .main .main_title i{
        font-style: normal;
     }
     .main .bodys{
        box-sizing: border-box;
        display:flex;
        flex-direction:row;
        flex-wrap:nowrap;
        padding: 1rem 0;
        width:100%; 
        box-sizing:border-box;
        text-decoration:none;
     }
     .main .bodys i{
       font-style: normal;
     }
     .main .bodys .body_left{
         width:25%;
         margin-right:1rem;  
     }
     .main .bodys .body_left img{
         width:100%;
     }
     .main .bodys .body_right{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        text-align:left;
        width:75%;
     }
     .main .bodys .body_right h4{
         color:#000;
         font-size:1rem;
     }
     .main .bodys .body_right p{
        font-size: 14px;
        overflow: hidden;     
        white-space: nowrap;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        color:#888;
     }
     .main .bodys .body_right p>span{
        color: #4c4c4c;
        font-size: 13px;
     }
</style>