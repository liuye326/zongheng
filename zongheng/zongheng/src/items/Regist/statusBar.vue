<template>
  <div class="outer">
    <ul class="inner_one">
      <li :style="color_point0">1</li>
      <li :style="color_point1">2</li>
      <li :style="color_point2">3</li> 
    </ul>
    <hr class="inner_two"> 
  </div> 
</template>
<script>
  export default{
    data(){
      return{
        color_point0:"",
        color_point1:"",
        color_point2:"",
      }
    },
    props:{
      state:{default:0}
    },
    methods:{
      loadColor:function(){
        if(this.state==0){
          this.color_point0 = "background:#df3d3d;"
        }else if(this.state==1){
          this.color_point1 = "background:#df3d3d;"
        }else{
          this.color_point2 = "background:#df3d3d;"
        }
      }
    },
    watch:{
      state:{
        immediate: true,    // 这句重要
        handler(){
          this.loadColor();
        }
      }
    },
    created() {
    },
  }
</script>
<style scoped>
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
  }
  .inner_one{
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-between;
    list-style:none;
    padding:1.5rem 3rem;
  }
  .inner_one>li{
    display:flex;
    justify-content:center;
    align-items:center;
    width:2rem;height:2rem;
    border-radius:50%;
    color:#fff;
    background:#ccc;
  }
  .inner_two{
    margin:0 3.5rem;
    color:#ccc;
    margin-top:-2.5rem;
    margin-bottom:3rem;
    background:#ccc;
  }
</style> 
