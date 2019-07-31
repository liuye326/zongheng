<template>
    <div>
		<Header :backTo="backTo"></Header>    
        <div class="heads">
            <div class="h_left">
                <img :src="url_header + Dataone['pic']" >
            </div>
            <div class="h_right">
                <h5>{{Dataone['title']}}</h5>
                <p>作者:{{Dataone['author']}}</p>
                <p>分类:{{Dataone['classify']}}</p>
                <p>字数:{{Dataone['words']}}</p>
                <p>已读:{{Dataone['readed']}}</p>
            </div>
        </div>
        <div class="bodys">
            <mt-button type="primary" @click="toEssayPage(1)">立即阅读</mt-button>
            <mt-button type="default" @click="toShelf">{{isInshelf}}</mt-button>
        </div>
        <div class="main_titles">
            <div class="icon1"></div>
            <i class="main_title_right">作品简介</i>
        </div>
        <div class="main_title">
            <div class="main_small_title">
                <p>{{Dataone['intro']}}</p>
            </div>
            <div class="main_tag">
                标签:
                <i v-if="Dataone['label1']!=null">{{Dataone['label1']}}</i>
                <i v-if="Dataone['label2']!=null">{{Dataone['label2']}}</i>
                <i v-if="Dataone['label3']!=null">{{Dataone['label3']}}</i>
                <i v-if="Dataone['label4']!=null">{{Dataone['label4']}}</i>
            </div>
        </div>
         <div class="bottom_title">
            <div class="bottom_title_top">
                <div>
                    <div class="icon1"></div>
                    <i class="bottom_title_right">作品目录</i>
                </div>
                <a href="javascript:;" class="section" @click="section">所有章节</a>
            </div>
             <a class="my_a" :href="Datatwo[i].link" v-for="(item,i) of Datatwo" :key="i" @click="toEssayPage(item.sid)">
                <span>{{Datatwo[i].title}}</span>
                <div class="icon2"></div>
            </a>
        </div>

         <div class="bottom_title">
            <div class="bottom_title_top">
                <div>
                    <div class="icon1"></div>
                    <i class="bottom_title_right">读过{{Dataone['title']}}的还喜欢</i>
                </div>

            </div>
            <recommend :recommendData.sync="recommendData" :Dataone.sync="Dataone" :Datatwo.sync="Datatwo" :bid.sync="bid" :url_header="url_header"></recommend>
        </div>
				<Statement></Statement>
    </div>
 </template>
<script>
 import recommend  from "./Recommend_cv.vue"
 import Header from "./DetailsHeader.vue"
 import Statement from "../Common/Statement.vue"
export default {
 
  data(){ 
      return {
          Dataone:[],
          Datatwo:[],
          recommendData:[],
          bid:1,
          isInshelf:"加入书架",
          inshelfState:0,
          backTo:0,
          url_header:""
      }
  }, 
  methods:{
    toEssayPage(i){
        this.$router.push({
            path:"EssayPage",
            query: {
              sid : i
            }
        })
    },
    readed(id){
        if(id !== undefined){
            var local_obj = localStorage.getItem("readed");
            var local_obj1;
            if(local_obj === null){
                local_obj1 = {} 
            }else{
                local_obj1 = JSON.parse(local_obj);
            }
            local_obj1[`${id}`] = 1;
            local_obj1 = JSON.stringify( local_obj1 );
            localStorage.setItem("readed",local_obj1);
        }
    },
    toShelf(){
        var uid = sessionStorage.getItem("uid");
        if(uid === null){
            this.$router.push("login");
        }else if(this.inshelfState==0){
            this.axios("/shelf/joinshelf",{
                params:{
                    uid,
                    bid:this.bid
                }
            }).then(()=>{
                this.checkShelf();
            })
        }else{
            this.removeFromshelf();
        }
    },
    checkShelf(){
        var uid = sessionStorage.getItem("uid");
        this.axios("/shelf/ifInshelf",{
            params:{
                uid,
                bid:this.bid
            }
        }).then(res=>{
            if(res.data.code==1){
                this.isInshelf = "已收藏";
                this.inshelfState = 1;
            }else{
                this.isInshelf = "加入书架";
                this.inshelfState = 0;
            }
        })
    },
    removeFromshelf(){
        var uid = sessionStorage.getItem("uid");
        this.axios("/shelf/delshelf",{
            params:{
                uid,
                bid:this.bid
            }
        }).then(()=>{
            this.checkShelf();
        })
    },
    section(){
        this.$router.push({
            path:"section",
            query:{
                bid:this.bid
            }
        })
    }
  },
  created(){
     this.url_header = this.$store.getters.getUrlHeader;
     var id = this.$route.query.bid;
     var back = this.$route.query.back;
     if(back !== undefined){
         this.backTo = back;
     }
     this.bid = id;
     var uid = sessionStorage.getItem("uid");
     if(uid !== null){
        this.checkShelf();
     }
     this.readed(id);
     this.axios.get("/details/getdetails",{
     params:{
        id
     }
    }).then(res=>{
        var obj = res.data;
        this.Dataone = obj[0];
        this.Datatwo = obj[2];
        this.recommendData = obj[1];
    })
  },
  components:{
      "recommend":recommend,
      "Header":Header,
      "Statement":Statement
  }
}
</script>
<style>
    *{
        padding:0;margin:0;
        box-sizing:border-box;
    }
     i{
        font-style: normal;
     }
    .heads{
        display:flex;
        flex-direction:row;
        width:100%;
        padding:1rem 0.8rem;
    }
    .heads .h_left{
        width:25%;
    }
    .heads .h_left img{
        width:100%;
        height:100%;
        
    }
    .heads .h_right{
         display:flex;
        flex-direction:column;
        width:75%;
        text-align:left;
        margin-left:2rem;
        font-size:13px;
        justify-content:space-around ;
    }
    .heads .h_right h5{
        font-size:16px;
    }
    .bodys{
        width:100%;
        padding:0.5rem 0.8rem;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
    }
    .bodys button{
        width:49%;
        height:2rem;
        font-size:14px;
    }
    .bodys button:first-child{
        background: #b33836; 
    }
    .bodys button:last-child{
        background:rgba(0,0,0,0); 
        border: 1px solid #b33836;
        color: #b33836;
        
    }
   .main_title{
        width:100%;
        text-align:left;
        padding:0.5rem 0.8rem;
    }
    .main_titles{
        text-align:left;
    }
    .main_titles .main_title_right{
        font-size:14px;
        font-weight:bold !important;    
    }
    .main_title .main_small_title{
        font-size:12px;
        padding:0.3rem 0;
    }
    .main_title .main_tag{
        width:100%;
        font-size:14px;
        padding:0.3rem 0;
    }
    .main_title .main_tag i{
        padding:0.1rem 0.2rem;
        background: #f2f2f2;
        color: #4c4c4c;
        font-size:12px;
        overflow: hidden;
        border: 1px solid #dfdfdf;
        border-radius: 2px;
        margin-left:0.2rem;
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

    .bottom_title{
        width:100%;
        text-align:left;
    }
   .bottom_title .bottom_title_right{
        font-size:14px;
        font-weight:bold !important;
    }
   .icon2{  
        background-image: url('../../assets/head.png');
        background-position: -9.5rem 10px;
        background-size: 17.2rem;
        background-repeat: no-repeat;
        width: 1.2rem;
        display: inline-block;
        height: 2.2rem;
        vertical-align: -0.45rem;
        margin-right: 0.1rem;
    }
    .bottom_title .bottom_title_top{
        background:red;
        padding:0.3rem 0;
        border-top: 1px solid #dfdfdf;
        border-bottom: 1px solid #dfdfdf;
        background: #f2f2f2;
        display:flex;
        justify-content:space-between;
        margin-top:1rem;
    }
    .bottom_title .my_a{
        text-decoration:none;
        width:100%;
        display:block;
        font-size:16px;
        border-bottom: 1px solid #dfdfdf;
        padding:0 0.5rem;
        box-sizing:border-box;
    }
    .bottom_title .my_a span{
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width:85%;
        float:left;
        line-height:2.2rem;
        font-size:14px;
        height:2.2rem;
        padding:0 0.3rem;
    }
    .bottom_title .my_a div{
        display:block;
        width:6% !important;
        float:left;
        margin-left:8%;
    }
    .bottom_title .my_a:after{
        clear:both !important;
        display:block;
        content:"";
    }
    .bottom_title .my_a:hover{
        color: #333;
       
    }
    .bottom_title .my_a:active{
        color: #333;
        
    }
    .bottom_title .my_a:link{
        color: #333;
       
    }
    .bottom_title .my_a:visited{
        color: #333;
        
    }
    .section{
        text-decoration:none;
        font-size: 14px;
        font-weight: bold !important;
        color: #2c3e50;
        margin-right:1rem;
    }
</style>
