const express = require("express");
const pool = require("../pool");
const bodyParser = require("body-parser");
var router = express.Router();
router.use( bodyParser.urlencoded({
  extended:false
}));
router.get("/getshelf",(req,res)=>{
  var uid = req.query.uid;
  var arr_list = [];
  var str_list;
  var arr=[];
  pool.query("select bid from bookshelf where uid =?",[uid],(err,result)=>{
    if(err) throw err;
    for(var item of result){
      arr_list.push(item.bid);
    }
    str_list = arr_list.join(",");
    var sql = "select * from book_viewlist where bid in ("+str_list+")";
    pool.query("select nickname from user where uid = ?",[uid],(err,result)=>{
      if(err) throw err;
      arr[0] = result[0];
      if(str_list===""){
        arr[1]=[];
        res.send(arr)
      }else{
        pool.query(sql,(err,result)=>{
          if(err) throw err;
          arr[1] = result;
          res.send(arr);
        })
      }
    })
  })
})
router.get("/getbooks",(req,res)=>{
  var str_list = req.query.str;
  if(str_list.trim()==""){
    res.send({code:-1,msg:[]});
    return;
  }
  var sql = "select * from book_viewlist where bid in ("+str_list+")";
  pool.query(sql,(err,result)=>{
     if(err) throw err;
     res.send({code:1,data:result});
  })
})
router.get("/joinshelf",(req,res)=>{
  var uid = parseInt(req.query.uid);
  var bid = parseInt(req.query.bid);
  pool.query("INSERT INTO `bookshelf` (`id`, `bid`, `uid`) VALUES (NULL, ?, ?)",[bid,uid],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"插入成功"});
    }else{
      res.send({code:-1,msg:"插入失败"});
    }
  })
})
router.get("/delshelf",(req,res)=>{
  var uid = parseInt(req.query.uid);
  var bid = parseInt(req.query.bid);
  pool.query("delete from bookshelf where bid=? and uid=?",[bid,uid],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"删除成功"});
    }else{
      res.send({code:-1,msg:"删除失败"});
    }
  })
})
//是否在书架
router.get("/ifInshelf",(req,res)=>{
  var uid = parseInt(req.query.uid);
  var bid = parseInt(req.query.bid);
  pool.query("select * from bookshelf where bid=? and uid=?",[bid,uid],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:1,msg:"已存在"});
    }else{
      res.send({code:-1,msg:"未存在"});
    }
  })
})
module.exports = router;