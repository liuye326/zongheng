<template>
<div>
    <div class="main"  v-for="(item,i) of recommendData" :key="i">    
            <a :href="item.r_link" class="bodys" @click="toDetails(item.bid)">
                <div class="body_left">
                    <img :src="url_header + item.b_pic">
                </div>
                <div class="body_right">
                    <h4>{{item.title}}</h4>
                    <p>{{item.intro}}</p>
                    <div class="bottom">
                        <div>
                            <div class="icon"></div>
                            <i>{{item.author}}</i>
                        </div>
                    </div>
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
    recommendData:{default:""},
  },
  methods:{
    toDetails(bid){
      this.$router.push({
          path:"details",
          query:{
              bid,
              back:"2"
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
    .icon{  
        background-image: url('../../assets/icon.png');
        background-position: -5.5rem 0;
        background-size: 15rem;
        background-repeat: no-repeat;
        width: 1.2rem;
        display: inline-block;
        height: 1.2rem;
        vertical-align: -0.5rem;
        margin-right: 0.1rem;
    }

    .main{
        width:100%;
        padding: 1rem 1rem 0 1rem;
        background: #fff;
        box-sizing:border-box;
        border-bottom: 1px solid #e6e6e6;
    }
    .main:last-child{
        border-bottom:0;
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
        text-align:left;
        width:75%;
     }
     .main .bodys .body_right h4{
         color:#000;
     }
     .main .bodys .body_right p{
        font-size: 14px;
        line-height: 1.5rem;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        height: 3rem;
        margin: 0.3rem 0;
        color:#888;
     }
     .main .bodys .body_right .bottom{
        font-size: 12px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        margin-top:0.3rem;
        color:#888;
     }
     .main .bodys .body_right .bottom .bottom_right>i{
        color: #fff;
        background: #d1acd8;
        padding: 1px 3px 3px 3px;
        border-radius: 2px;
        margin-right:0.5rem;
     }
     .main .bodys .body_right .bottom .bottom_right>i+i{
        color: #fff;
        background: #a1d0d2;
        padding: 1px 3px 3px 3px;
        border-radius: 2px;
        margin-right:0.1rem;
     }
</style>