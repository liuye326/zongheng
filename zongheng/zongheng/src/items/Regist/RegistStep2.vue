<template>
  <div class="outer">
    <div class="input">
      <mt-field label="昵称" placeholder="请输入你的昵称" v-model="user.nickname"></mt-field>
      <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="user.email"></mt-field>  
    </div>
    <div class="inner_two">
      <mt-button size="large" type="danger" @click="next">注册</mt-button>    
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
      user:{default:{}},
      state:{default:0}
    },
    methods:{
      next:function(){
        var reg_name = new RegExp("^[\u4e00-\u9fa5a-zA-Z0-9]{4,9}$");
        var reg_email = new RegExp("^([a-zA-Z0-9_-])+@([a-zA-Z0-0_-])+(.[a-zA-Z0-9_-])+$");
        if(!reg_name.test(this.user.nickname)){
          this.$toast("昵称格式为4~9位")
        }else if(!reg_email.test(this.user.email)){
          this.$toast("邮箱格式不正确")
        }else{
          this.axios.post("/user/regist",`uname=${this.user.uname}&upwd=${this.user.upwd}&nickname=${this.user.nickname}&email=${this.user.email}`).then(res=>{
            if(res.data.code == 1){
              var state = this.state+1;
              this.$emit('update:state', state);
            }else{
              this.$toast("注册失败，请稍后重试")
            }
          })
        }

      }
    }
  }
</script>
<style scoped>
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
  }
  .outer{
    padding:0 2rem;
  }
  .mint-cell{
    margin:0 auto;
  }
  .mint-button{
    margin-top:2rem;
  }
  .inner_two{
    padding:0 1rem;
  }
</style>