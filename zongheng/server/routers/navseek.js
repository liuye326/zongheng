const express = require("express");
const pool = require("../pool");
const bodyParser = require("body-parser");
var router = express.Router();
router.use( bodyParser.urlencoded({
    extended:false
}));
router.get("/navseek",(req,res)=>{
    var arr = [];
    pool.query("select title,author from book_details",(err,result)=>{
        arr.push(result.slice(0,5));
        pool.query("select * from label",(err,result)=>{
            arr.push(result);
            res.send(arr);
        })
    })
})
//模糊搜索
router.get("/searchlimit",(req,res)=>{
    var keywords = "%"+req.query.key+"%";
    pool.query("select * from book_viewlist where title like ?",[keywords],(err,result)=>{
        if(err) throw err;
        res.send(result);
    }) 
})
module.exports = router;