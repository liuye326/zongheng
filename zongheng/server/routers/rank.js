const express = require("express");
const pool = require("../pool");
const bodyParser = require("body-parser");
var router = express.Router();
router.use( bodyParser.urlencoded({
    extended:false
}));
router.get("/getRank",(req,res)=>{
  var arr = [];
  pool.query("select * from rank_list",(err,result)=>{
    arr.push(result.slice(0,5));
    arr.push(result.slice(5,10));
    arr.push(result.slice(10,15));
    arr.push(result.slice(15));
    res.send(arr);
  });
})
router.get("/viewlist",(req,res)=>{
  var start = parseInt(req.query.start);
  var count = parseInt(req.query.count);
  var arr = [];
  pool.query("select * from book_viewlist LIMIT ?,?",[start,count],(err,result)=>{
    if(err) throw err;
    arr[0]=result;
    pool.query("select count(bid) as count from book_viewlist",(err,result)=>{
      if(err) throw err;
      arr[1] = result[0].count;
      res.send(arr);
    })
  })
})
module.exports = router;