<template>
  <div class="outer">
    <bookshelf_logout v-if="login_state==0"></bookshelf_logout>
    <Bookshelf_loggedin v-else :uid="uid" :login_state.sync="login_state" ></Bookshelf_loggedin>
    <statement></statement>
  </div>
</template>
<script>
  import Statement from './Common/Statement.vue';
  import Bookshelf_logout from './Bookshelf/Bookshelf_logout.vue';
  import Bookshelf_loggedin from './Bookshelf/Bookshelf_loggedin.vue';
  export default{
    data(){
      return{
        login_state:0,
        uid:""
      }
    },
    methods:{   
      getNewlogin_state: function(newState){
          this.login_state = newState;
      }
    },
    components:{
      "statement":Statement,
      "bookshelf_logout":Bookshelf_logout,
      "Bookshelf_loggedin":Bookshelf_loggedin
    },
    created() {
      var uid = sessionStorage.getItem("uid");
      if(uid != null){
        this.uid = uid;
        this.login_state = 1;
      }
    },
    watch:{
    }
  }  
</script>
<style scoped>
  .outer{
    background: #fafafa;
  }
  
</style>