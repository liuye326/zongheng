<template>
  <div class="outer">
    <Header :title_s="title" :bid="bid"></Header>
    <div class="inner_one">
      <select class="clist_select" v-model="start">
        <option v-for="(item,i) in option_list" :key="i" :value="i*15">{{item}}</option>
      </select>
      <a href="javascript:;" class="revorse_button" @click="reversal"><span class="iconfont">&#xe60e;</span>反序</a> 
    </div>
    <Sectionlist :list="list" :bid="bid"></Sectionlist>
    <div class="inner_two">
      <a href="javascript:;" data-change="-15" @click="changeStart">
        <span class="iconfont">&#xe712;</span>
        上一页
      </a>
      <a href="javascript:;" data-change="+15" @click="changeStart">
        下一页
        <span class="iconfont">&#xe76a;</span>
      </a>
    </div>
    <Statement></Statement>
  </div> 
</template>
<script>
  import Header from './Section/Header.vue'
  import Statement from './Common/Statement.vue'
  import Sectionlist from './Section/Section_list.vue'
  export default{
    data(){
      return{
        title:"",
        start:0,
        count:15,
        list_count:0,
        list:[],
        option_list:[],
        bid:1
      }
    },
    components:{
      "Header":Header,
      "Sectionlist":Sectionlist,
      "Statement":Statement
    },
    watch:{
      start(){
        this.loadMore();
      }
    },
    methods:{
      loadMore:function(){
        this.axios("/details/getsection",{
          params:{
            "start":this.start,
            "count":this.count
          }
        }).then(res=>{
          this.list_count = res.data[1];
          this.list = res.data[0];
          this.title=`目录(共${this.list_count}章)`;
          this.setOptionList();
        })
      },
      //创建下拉菜单内容
      setOptionList:function(){
        for(var i=0;i<parseInt(this.list_count/15)+1;i++){
          this.option_list[i]=`${15*i+1} - ${15*i+15}章`
        }
      },
      //反转
      reversal:function(){
        this.list = this.list.reverse();
      },
      //上一页/下一页
      changeStart:function(e){
        var change = parseInt(e.target.dataset.change);
        if(change==-15 && this.start==0){
          this.$toast("已到达第一页")
        }else if(change==15 && this.start >= parseInt(this.list_count/15)*15){
          this.$toast("没有更多章节")
        }else{
          this.start+=change;
        }
      }
    },
    created() {
      this.bid=this.$route.query.bid;
      this.loadMore();
    },
  }
</script>
<style scoped>
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  .inner_one{
    width:100%;
    margin-top:0.1rem;
    padding:0.5rem;
    display:flex;
    justify-content:space-between;
  }
  .clist_select{
    width: 65%;
    height:2.5rem;
    color:#ca8f4a;
    background:#fff2d8;
    border:1px solid #f9dea6;
    border-radius:6px;
    padding:8px;
    max-height:5rem;
    overflow:hidden;
  }
  .clist_select option{
    background:#fff;
    color:#4c4c4c;
  }
  .revorse_button{
    display:flex;
    justify-content:center;
    align-items:center;
    width:30%;
    border:1px solid #cecece;
    border-radius:5px;
    text-decoration:none;
    color:#4c4c4c;
    font-size:14px;
  }
  .inner_two{
    display:flex;
    justify-content:space-between;
    padding:1rem;
  }
  .inner_two>a{
    width:45%;
    height:2.5rem;
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    color:#4c4c4c;
    font-size:14px;
    border:1px solid #cecece;
    border-radius:5px;
  }
  .inner_two>a>span{
    color:#cecece
  }
</style>