const express = require("express");
const pool = require("../pool");
const bodyParser = require("body-parser");
var router = express.Router();
router.use( bodyParser.urlencoded({
    extended:false
}));
//获取目录列表信息
router.get("/getsection",(req,res)=>{
  var start = parseInt(req.query.start);
  var count = parseInt(req.query.count);
  var arr = [];
  pool.query("select * from section_list limit ?,?",[start,count],(err,result)=>{
    if(err) throw err;
    arr[0]=result;
    pool.query("select count(*) as count from section_list",(err,result)=>{
      if(err) throw err;
      arr[1]=result[0].count;
      res.send(arr);
    })
  })
})
//获取详情页信息
router.get("/getdetails",(req,res)=>{
  var id = req.query.id;
  var arr = [];
  pool.query("select * from book_details where bid = ?",[id],(err,result)=>{
    if(err) throw err;
    arr[0] = result[0];
    pool.query("select * from book_viewlist",(err,result)=>{
      var a = Math.floor(Math.random()*29);
      var b = Math.floor(Math.random()*29);
      do{
        b = Math.floor(Math.random()*20);
      }while(a==b);
      var c = Math.floor(Math.random()*20);
      do{
        c = Math.floor(Math.random()*20);
      }while(a==c||b==c);
      arr[1]=[];
      arr[1].push(result[a]);
      arr[1].push(result[b]);
      arr[1].push(result[c]);
      pool.query("select * from section_list limit 0,5",(err,result)=>{
        if(err) throw err;
        arr[2]=result;
        res.send(arr)
      })
    })
  })
})
//获取小说章节内容
router.get("/getessay",(req,res)=>{
  var sid = req.query.sid;
  var arr=[];
  pool.query("select * from essaypage where sid=?",[sid],(err,result)=>{
    if(err) throw err;
    arr[0] = result[0];
    pool.query("select count(*) as count from essaypage",(err,result)=>{
      arr[1] = result[0].count;
      res.send(arr);
    })
  })
})
module.exports = router;