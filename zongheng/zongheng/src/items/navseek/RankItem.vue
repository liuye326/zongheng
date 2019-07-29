<template>
  <div class="outer">
    <ul class="inner_two">
      <li v-for="(item,i) of list" :key="i">
        <a href="javascript:;">
          <div>
            <span class="counter" :style="color[i]">{{i+1}}</span>
            <span>{{item.title}}</span>
          </div>
          <div>
            <div class="icon"></div>
            {{item.author}}
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        color:[{background:"#ff4644"},{background:"#e28d29"},{background:"#9fc575"},{background:"#8f8f8f"},{background:"#8f8f8f"}]
      }
    },
    props:{
      //title:{default:""},
      list:{}
    }
  }
</script>
<style scoped>
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
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
  .outer{
    width:100%;
    padding: 0.2rem 0.3rem 0;
    margin-top:-0.4rem;
    font-family: Tahoma,"微软雅黑",Geneva,sans-serif;
  }
  .inner_one{
    display:flex;
    justify-content:space-between;
    margin: 0 -0.3rem;
    padding:0.7rem 0.5rem;
    font-weight:500;
    border-bottom:1px solid #dfdfdf;
    background:#f2f2f2;
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
    background:#5e5e5e;
    border-radius:3px;
    margin-right:0.45rem;
  }
  .inner_one>a:last-child>span{
    font-size:10px;
    margin-right:0.2rem;
    font-weight:600;
  }
  .inner_two{
    width:100%;
    list-style:none;
  }
  .inner_two>li{
    display:block;
    height:2.3rem;
    margin-bottom:0.1rem;
    padding:0 0.5rem;
    border-bottom:1px solid #dfdfdf;
    background: #fafafa;
  }
  .inner_two>li:first-child{
     margin-top:0.2rem;
  }
  .inner_two>li:last-child{
    border-bottom:0;
    margin-bottom:0.1rem;
  }
  .inner_two>li>a{
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:14px;
    text-decoration:none;
    color:#4c4c4c;
  }
  .counter{
    display:inline-block;
    width:18px;height:18px;
    margin-right:0.4rem;
    border-radius:50%;
    background:#000;
    font-size:14px;
    color:#fff;
  }
  .inner_two span.iconfont{
    display:inline-block;
    font-size:16px;
    width:18px;height:18px;
    margin-right:0.1rem;
    color:#fff;
    border-radius:50%;
    background:#a00;
  }
</style>