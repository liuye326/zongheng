<template>
  <div class="outer">
    <div v-if="isExist==-1" class="inner_one">
      <span class="list_title">最近阅读</span>
      <div>还木有任何书籍( ˙﹏˙ )</div>
    </div>
    <div v-else class="inner_two">
      <recommend :list="list"></recommend>
    </div>
  </div>
</template>
<script>
  import Recommend from './Recommend_bs.vue'
  export default{
    data(){
      return{
        isExist:-1,
        list:[],
        local_str:""
      }
    },
    props:{

    },
    components:{
      "recommend":Recommend
    },
    methods:{
      getlocal(){
        var localarr = JSON.parse(localStorage.getItem("readed"));
        var local_arr = [];
        var i=0;
        for(local_arr[i++] in localarr);
        this.local_str = local_arr.toString();
      }
    },
    created() {
      this.getlocal();
      this.axios("/shelf/getbooks",{
         params:{
             str:this.local_str
         }
      }).then(res=>{
          this.isExist = res.data.code;
          this.list = res.data.data;
      })
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