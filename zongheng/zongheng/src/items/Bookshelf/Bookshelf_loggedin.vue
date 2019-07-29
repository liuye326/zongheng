<template>
  <div>
    <div class="outer">
      <div class="inner_one">
        <span>
          用户:
          <span>{{nickname}}</span>
        </span>
        <mt-button type="danger" size="small" @click="logout">注销</mt-button>
      </div>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">我的书架</mt-tab-item>
        <mt-tab-item id="2">最近阅读</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <myshelf :shelflist="shelflist"></myshelf>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <readrecently></readrecently>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
  import Read_recently from "./Read_recently.vue"
  import Myshelf from "./myShelf.vue"
  export default{
    data(){
      return{
        selected:"1",
        shelflist:"",
        nickname:""
      }
    },
    methods:{
      getShelf(){
        this.axios("/shelf/getshelf",{
          params:{
            uid : this.uid
          }
        }).then(res=>{
          this.nickname = res.data[0].nickname;
          this.shelflist = res.data[1];
        })
      },
      logout(){
        sessionStorage.removeItem("uid");
        this.$emit('update:login_state',0);
      }
    },
    props:{
      uid:{default:"1"},
      login_state:{default:1}
    },
    components:{
      "readrecently":Read_recently,
      "myshelf":Myshelf
    },
    mounted() {
      this.getShelf();
    },
  }
</script>
<style scoped>
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  span{

  }
  .outer{
    background: #f2f2f2;
  }
  .inner_one{
    padding:0 0.5rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:3rem;
    border-bottom:1px solid #dfdfdf;
    font-family: Tahoma,"微软雅黑",Geneva,sans-serif;
    color: #4c4c4c;
  }
  .inner_one>span{
    font-size:14px;
    font-weight:500;
    margin-left:1rem;
  }
  .mint-navbar{
    background:#f2f2f2;
  }
  .mint-navbar .mint-tab-item{
    height:2rem;
    display:flex;
    padding:0 !important;
    justify-content:center;
    align-items:center;
  }
  .mint-navbar>.mint-tab-item:first-child{
    border-right:1px solid #dfdfdf;
  }
  .mint-tab-item-label{
    font-size:14px;
    line-height:2rem;
  }
  .mint-navbar .mint-tab-item.is-selected{
    margin-bottom:0 !important;
    border-bottom: 3px solid #ff4644;
    color: #ff4644;
  }
</style> 