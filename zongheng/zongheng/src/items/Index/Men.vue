<template>
<div>
    <div class="main"> 
        <div class="main_title">
            <i class="main_title_left"></i>
            <i class="main_title_right">{{mentitle}}</i>
        </div>
        <div class="bodys">
            <a v-if="item.r_link!=undefined" :href="item.r_link" class="items" v-for="(item,i) of menData" :key="i" @click="toDetails">
                <img v-if="item.s_pic!=null" :src="url_header + item.s_pic">    
                <img v-else :src="url_header + item.b_pic">    
                <i>{{item.title}}</i>
            </a>
            <a v-if="item.p_link!=undefined" :href="item.p_link" class="items" v-for="(item,i) of menData" :key="i" @click="toDetails">
                <img v-if="item.s_pic!=null" :src="url_header + item.s_pic">    
                <img v-else :src="url_header + item.b_pic">    
                <i>{{item.title}}</i>
            </a>
        </div> 
        
    </div>
</div>
 </template>
<script>
export default {
  data(){ //当前组件共享数据
      return {
       
      }//数据
  },
   props:{
    menData:{default:[]},
    mentitle:{default:[]},
    url_header:{default:""}
  },
  methods:{
    toDetails(){
        this.$router.push({
            path:"details",
            query:{
                bid : "1",
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
        padding: 0.5rem 1rem 0 1rem;
        border-bottom: 1px solid #e6e6e6;
        background: #fff;
        box-sizing:border-box;
        margin-top:1rem;
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
        width:100%;
        box-sizing:border-box;
        display:flex;
        flex-flow:row wrap;
        justify-content: space-between;
     }
     .main .bodys i{
         font-style: normal;
     }
     .main .bodys .items{
          display:block;
          width:30%;
          padding:0.5rem 0.5rem;
          font-size:14px;
          text-decoration:none;
          color:#000;
     }
     .main .bodys .items img{
         width:100%;
     }
</style>