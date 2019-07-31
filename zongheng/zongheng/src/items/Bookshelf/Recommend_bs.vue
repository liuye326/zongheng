<template>
    <div class="main">    
        <div>
            <a href="#" class="bodys" v-for="(item,i) of list" :key="i" @click="toDetails(item.bid)">
                <div class="body_left">
                    <img :src="url_header + item.b_pic">
                </div>
                <div class="body_right">
                    <h4>{{item.title}}</h4>
                    <p>{{item.author}}</p>
                    <p>第七百一十六章  胜券在握</p>
                    <p>3小时前更新</p>
                </div>
            </a>
        </div>
    </div>
 </template>
<script>
export default {
  data(){ //当前组件共享数据
      return {
          url_header:""
      }//数据
  },
  props:{
    list:{default:[]}
  },
  methods:{
    toDetails(bid){
        this.$router.push({
            path:"details",
            query: {
              bid,
              back:"1"
            }
        })
    }
  },
  created(){
      this.url_header = this.$store.getters.getUrlHeader;
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
        margin-top:-1rem;
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
        display: -webkit-box;
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