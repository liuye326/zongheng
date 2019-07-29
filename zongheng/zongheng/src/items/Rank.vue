<template>
  <div>
    <rankitem :title="title[0]" :list="list[0]"></rankitem>
    <rankitem :title="title[1]" :list="list[1]"></rankitem>
    <rankitem :title="title[2]" :list="list[2]"></rankitem>
    <rankitem :title="title[3]" :list="list[3]"></rankitem>
    <statement></statement>
  </div>
</template>
<script>
  import RankItem from "./Rank/RankItem.vue";
  import Statement from './Common/Statement.vue';
  export default{
    data(){
      return{
        title:["百度小说月票榜","男生热门榜","女生热门榜","潜力新书榜"],
        list:{}
      }
    },
    created() {
      this.axios("/rank/getRank").then(res=>{
        this.list = res.data;
      })
    },
    components:{
      "rankitem":RankItem,
      "statement":Statement,
    }
  }
</script>