<template>
  <div class="outer">
    <div class="inner_three"></div>
    <h3 class="inner_one">
      <a href="javascript:;">{{title}}</a>
      <a href="javascript:;"><span class="iconfont icon-chakan"></span>查看全部</a>
    </h3>
    <div class="inner_two" @click="jumpTo">
      <ul class="two_ul">
        <li v-for="(elem,i) of list" :key="i"><a href="javascript:;" :data-fname="title" :data-sname="elem.b_class_name">{{elem.b_class_name}}</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        
      }
    },
    props:{
      title:{default: ""},
      list:{default: []}
    },
    methods:{
      jumpTo:function(e){
        var a = e.target;
        var title_f = a.dataset.fname;
        var title_s = a.dataset.sname;
        if(a.hasAttribute("data-fname")){
          this.$router.push({
            path: 'Category_view',
            query: {
              title_f,title_s
            }
          })
        }
      }
    }
  }
</script>
<style scoped>
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  .outer{
    width:100%;
    background:#fff;
    padding: 0.1rem 0;
    font-family: Tahoma,"微软雅黑",Geneva,sans-serif;
  }
  .inner_one{
    display:flex;
    justify-content:space-between;
    padding:0.7rem 0.75rem 0;
    font-weight:600;
  }
  .inner_one>a{
    text-decoration:none;
    color: #4c4c4c;
    font-size:0.875rem;
  }
  .inner_one>a:first-child:before{
    content:"";
    display:inline-block;
    width:0.5rem;
    height:0.875rem;
    background:rgb(255, 70, 67);
    border-radius:3px;
    margin-right:0.45rem;
  }
  .inner_one>a:last-child>span{
    font-size:10px;
    margin-right:0.2rem;
  }
  .inner_two{
    margin-top:1rem;
  }
  .two_ul{
    width:100%;
    list-style:none;
    font-size:0.875rem;
    display:flex;
    flex-flow:row wrap;
  }
  .two_ul>li{
    width:25%;
    height:2rem;
  }
  .two_ul>li>a{
    display:block;
    width:100%;
    text-decoration:none;
    color: #4c4c4c;
    font-size:0.875rem;
    border-left:1px solid #ddd;
    border-radius:20%;
  }
  .two_ul>li:nth-child(4n+1)>a{
    border:0;
  }
  .inner_three{
    height:0.75rem;
    background: #f2f2f2;
  }
</style>