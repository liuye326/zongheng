<template>
    <div class="outer">
      <Header></Header>
      <div class="main">
				<div  class="myimg">
							<img src="http://freely.applinzi.com/images/login.png">
				</div>
					<div class="myform">
							<mt-field label="账号" placeholder="Input username" v-model="username" :attr="{ maxlength: 12 }"  ></mt-field>
							<mt-field label="密码" placeholder="Input password" type="password" v-model="password" :attr="{ maxlength: 16 }"></mt-field>
					</div>
					<mt-button type="danger" class="btns" @click="btns">登录</mt-button>
			</div>
    </div>
    
</template>

<script>
import Header from './LoginHeader.vue';
export default{
  data(){ 
      return{
        username:"",
        password:"",
        backTo:0
      }
  }, 
  props:{
  },
  methods:{
    btns(){
        var uname = new RegExp("^[0-9a-zA-z_]{6,12}$");
        var upwd = new RegExp("^[0-9a-zA-z_]{6,16}$");
        if(!uname.test(this.username)){
            this.$toast("用户名格式不正确")
        }else if(!upwd.test(this.password)){
            this.$toast("密码格式不正确")
            
        }else{
            var url = "/user/login";
            this.axios.post(url,`uname=${this.username}&upwd=${this.password}`).then(res=>{
                if(res.data.code!=1){
                    this.$toast("用户名或密码不正确");
                }else{
                    sessionStorage.setItem("uid",res.data.uid);
                    this.$store.commit('setSelected',"4")
                    this.$router.push("/")
                }
            })
        }  
    }
  },
  watch:{
      username(){
         // console.log(this.username);
      },
      password(){
         // console.log(this.password);
      }
  },
  created(){ 
    var backTo = this.$route.query.back;
    if(backTo !== undefined){
        this.backTo = backTo;
    }
  },
  components:{
      "Header":Header
  }

}
</script>
<style>
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }
    .main{
        width:100%;
        padding:2rem 3rem;
    }
    .main .myimg{
        width:100%;
        padding:2rem 0;
        text-align:center;
    }
    .main .myimg img{
        width:5rem;
        height:5rem;
    }
    .main .mint-button{
        width:100% !important;
        background-color:#df3d3d !important;
        margin:2rem 0;
    }
</style>
