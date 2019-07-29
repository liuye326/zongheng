<template>
  <div class="outer">
   <cateItem v-for="(item,i) of list" :key="i" :list="item" :title="title[i]"></cateItem>
   <statement></statement>
  </div>
</template>
<script>
  import CategoryItem from './Category/Category_item.vue';
  import Statement from './Common/Statement.vue';
  export default{
    data(){
      return{
        title:["奇幻玄幻","都市娱乐","武侠仙侠","都市言情","历史军事","科幻游戏","古代言情"],
        list:[]
      }
    },
    created() {
      this.axios('/bl/getlist',{
        params:{}
      }).then(result=>{
        this.list = result.data;
      })
    },
    components:{
      "cateItem":CategoryItem,
      "statement":Statement,
    }
  }
</script>
<style scoped>
</style>
