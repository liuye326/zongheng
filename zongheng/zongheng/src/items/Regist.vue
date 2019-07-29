<template>
  <div class="outer">
    <Header title_s="注册" :backTo="backTo"></Header>
    <statusBar :state="state"></statusBar>
    <step1 :user="user" :state.sync="state" v-if="state==0"></step1>
    <step2 :user="user" :state.sync="state" v-else-if="state==1"></step2>
    <step3 :user="user" :state="state" v-else></step3>
  </div> 
</template>
<script>
  import Header from './Regist/RegistHeader.vue'
  import statusBar from './Regist/statusBar.vue'
  import step1 from './Regist/RegistStep1.vue'
  import step2 from './Regist/RegistStep2.vue'
  import step3 from './Regist/RegistStep3.vue'
  export default{
    data(){
      return{
        user:{
          uname:"",
          upwd:"",
          reupwd:"",
          email:"",
          nickname:"",
          sex:"",
          birth:"",
          backTo:0
        },
        state:0
      }
    },
    components:{
      "Header":Header,
      "statusBar":statusBar,
      "step1":step1,
      "step2":step2,
      "step3":step3
    },
    watch:{

    },
    created() {
      var backTo = this.$route.query.back;
      if(backTo !== undefined){
        this.backTo = backTo;
      }
    },
  }
</script>
<style scoped>

</style> 