<template>
  <div class="outer">
    <div v-if="shelflist.length==0" class="inner_one">
      <span class="list_title">我的阅读</span>
      <div>还木有任何书籍( ˙﹏˙ )</div>
    </div>
    <div v-else class="inner_two">
      <recommend :list="shelflist"></recommend>
    </div>
  </div>
</template>
<script>
  import Recommend from './Recommend_bs.vue'
  export default{
    data(){
      return{
      }
    },
    props:{
      shelflist:{default:[]}
    },
    components:{
      "recommend":Recommend
    },
    methods:{
    },
    mounted(){
    },
  }
</script>
<style scoped>
  .inner_one{
    width:100%;
    height:15rem;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:14px;
    border-bottom:1px solid #dfdfdf;
  }
</style> 