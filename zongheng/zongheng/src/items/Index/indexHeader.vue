<template>
    <div class="wai">
        <div class="my_img1"></div>
        <div class="my_img2" @click="search"></div>
    </div>
    
</template>

<script>

export default{
  data(){ 
      return{
      
      }
  }, 
  props:{
    
  },
  methods:{
  search(){
      this.$router.push("navseek");
  }
      
  },
  watch:{

  },
  created(){ 
   
    
  },
  components:{
    
  }

}
</script>
<style>
  .wai{
      padding:0.5rem;
      width:100%;
      display:flex;
      flex-direction:row;
      justify-content:space-between;
  }
  .my_img1{
    width: 10rem;
    height: 2rem;
    background-image:url('../../assets/pics.png');
    background-size:11rem;
  }
  .my_img2{
    width: 2rem;
    height: 2rem;
    background-image:url('../../assets/pics.png');
    background-size:11rem;
    background-position:-2.6rem -2.3rem;
  }
</style>
