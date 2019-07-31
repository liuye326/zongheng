<template>
<div>
    <div class="main"> 
        <div class="main_title">
            <div class="icon1"></div>
            <i class="main_title_right">{{oneben}}</i>
        </div>
        <a target="_blank" class="bodys" v-if="dataone['reco_link']!=undefined" :href="dataone['reco_link']" @click="toDetails">
            <div class="body_left">
                <img :src="url_header + dataone['reco_pic']" :alt="dataone['title']">
            </div>
            <div class="body_right">
                <h4>{{dataone['title']}}</h4>
                <p>{{dataone['subtitle']}}</p>
                <div class="bottom">
                    <div>
                        <div class="icon"></div>
                        <i>{{dataone['author']}}</i>
                    </div>
                    <div class="bottom_right">
                        <i>{{dataone['label1']}}</i>
                        <i>{{dataone['label2']}}</i> 
                    </div>
                </div>
            </div>
        </a>
        <a class="my_a"  v-if="item.subtitle==undefined"  v-for="(item,i) of onebenData" :key="i" :href="item['reco_link']" @click="toDetails">
            <span>{{item.title}}</span>
            <div class="icon2"></div>
        </a>

    </div>
    <div></div>
 
</div>
 </template>
<script>
export default {
  data(){ //当前组件共享数据
      return {
       
      }//数据
  },
  props:{
    onebenData:{default:[]},
    oneben:{default:[]},
    dataone:{default:[]},
    url_header:{default:""}
  },
  watch: {
  
  },
  methods:{
    toDetails(){
        this.$router.push({
            path:"details",
            query:{
                bid:"1",
                back:2
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
         box-sizing:border-box;
    }
    .main{
        width:100%;
        padding: 1rem 1rem 0 1rem;
        border-bottom: 1px solid #e6e6e6;
        background: #fff;
        box-sizing:border-box;
        margin-top:1rem;
        padding-bottom:1rem;
    }
    .main .my_a{
        text-decoration:none;
        width:100%;
        display:block;
        font-size:16px;
    }
    .main .my_a span{
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width:85%;
        float:left;
        padding:0.8rem 0;
    }
    .main .my_a div{
        display:block;
        width:6% !important;
        float:left;
        margin-left:8%;
    }
    .main .my_a:after{
        clear:both !important;
        display:block;
        content:"";
    }
    .main .my_a:hover{
        color: #333;
       
    }
    .main .my_a:active{
        color: #333;
        
    }
    .main .my_a:link{
        color: #333;
       
    }
    .main .my_a:visited{
        color: #333;
        
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
    }
    .icon1{  
        background-image: url('../../assets/icon.png');
        background-position: -1.5rem 0;
        background-size: 16rem;
        background-repeat: no-repeat;
        width: 1.2rem;
        display: inline-block;
        height: 1.2rem;
        vertical-align: -0.45rem;
        margin-right: 0.1rem;
    }
    .icon2{  
        background-image: url('../../assets/head.png');
        background-position: -16.5rem 7.9px;
        background-size: 28.3rem;
        background-repeat: no-repeat;
        width: 1.2rem;
        display: inline-block;
        height: 2.5rem;
        vertical-align: -0.45rem;
        margin-right: 0.1rem;
    }
    
    .main .main_title{
        width:100%;
        text-align:left;
        margin-bottom:0.7rem;
    }
    .main .main_title+.main_title{
        margin-top:1rem;
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
        padding: 1rem 1rem;
        width:100%; 
        box-sizing:border-box;
        text-decoration:none;
        color:#000;
        
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
     .main .bodys .body_right p{
        font-size: 14px;
        line-height: 1.5rem;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        height: 3rem;
        margin: 0.3rem 0;
     }
     .main .bodys .body_right .bottom{
        font-size: 12px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        margin-top:0.3rem;
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