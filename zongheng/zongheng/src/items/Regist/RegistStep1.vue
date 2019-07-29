<template>
  <div class="outer">
  <div class="input">
    <mt-field label="用户名" placeholder="请输入用户名" v-model="user.uname"></mt-field>
    <mt-field label="密码" placeholder="请输入登录密码" type="password" v-model="user.upwd"></mt-field>
    <mt-field label="确认密码" placeholder="请重复输入密码" type="password" v-model="user.reupwd"></mt-field>
  </div>
  <div class="button">
    <mt-button size="large" type="danger" @click="next">下一步</mt-button>
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
        var reg_uname = new RegExp("^[0-9a-zA-z_]{6,12}$");
        var reg_upwd = new RegExp("^[0-9a-zA-z_]{6,16}$");
        if(!reg_uname.test(this.user.uname)){
          this.$toast("用户名格式不正确");
        }else if(!reg_upwd.test(this.user.upwd)){
          this.$toast("密码格式不正确");
        }else if( this.user.upwd != this.user.reupwd){
          this.$toast("两次密码不一致");
        }else{
          this.axios.post("/user/check",`uname=${this.user.uname}`).then(res=>{
            if(res.data.code==1){
              var state = this.state+1;
              this.$emit('update:state', state);
            }else{
              this.$toast("用户名已存在")
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
    padding:0 3rem;
  }
  .mint-cell{
    margin:0 auto;
  }
  .mint-button{
    margin-top:2rem;
  }
</style>