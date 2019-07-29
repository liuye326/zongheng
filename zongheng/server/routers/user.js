const express = require("express");
const pool = require("../pool");
const bodyParser = require("body-parser");
var router = express.Router();
router.use( bodyParser.urlencoded({
    extended:false
}));
//注册
router.post("/regist",(req,res)=>{
  var uname = req.body.uname;
  var upwd = req.body.upwd;
  var email = req.body.email;
  var nickname = req.body.nickname;
  if(!uname){
    res.send({code:-3,msg:"uname不能为空"});
    return; 
  };
  if(!upwd){
    res.send({code:-2,msg:"upwd不能为空"});
    return; 
  };
  if(!email){
    res.send({code:-1,msg:"email不能为空"});
    return; 
  }
  pool.query("INSERT INTO user (`uid`, `uname`, `upwd`,`email`,`nickname`) VALUES (NULL,?,md5(?),?,?);",[uname,upwd,email,nickname],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
        res.send({code:1,msg:"注册成功"});
    }else{
        res.send({code:-1,msg:"注册失败"});
    } 
  })
})
//验证用户是否存在
router.post("/login",(req,res)=>{
  console.log(req.body);
  var uname = req.body.uname;
  var upwd = req.body.upwd;
  console.log(uname,upwd);
  if(!uname){
    res.send({code:-3,msg:"uname不能为空"});
    return; 
  };
  if(!upwd){
    res.send({code:-2,msg:"upwd不能为空"});
    return;
  };
  pool.query("SELECT * FROM user WHERE uname=? AND upwd = md5(?)",[uname,upwd],(err,result)=>{
      if(err) throw err;
      if(result.length>0){
          res.send({code:1,msg:"登陆成功",uid:result[0].uid});
      }else{
          res.send({code:-1,msg:"用户名或密码错误"});
      } 
  });
})
router.post("/check",(req,res)=>{
  var uname = req.body.uname;
  console.log(uname);
  if(!uname){
    res.send({code:-2,msg:"uname不能为空"});
    return; 
  };
  pool.query("SELECT * FROM user WHERE uname=?",[uname],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:-1,msg:"账号已存在",uid:result[0].uid});
    }else{
        res.send({code:1,msg:"账号可用"});
    } 
  })
})
module.exports = router;