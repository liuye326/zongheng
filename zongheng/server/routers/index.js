const express = require("express");
const pool = require("../pool");
const bodyParser = require("body-parser");
var router = express.Router();
router.use( bodyParser.urlencoded({
    extended:false
}));
router.get("/getindex",(req,res)=>{
  var arr = [];
  pool.query("select * from index_list",(err,result)=>{
    arr[0] = result;
    pool.query("select * from recom_list",(err,result)=>{
      arr[1] = result;
      pool.query("select * from setBooks",(err,result)=>{
        arr[2] = {
          male:result.slice(0,6),
          female:result.slice(6)
        }
        pool.query("select * from ind_other",(err,result)=>{
          if(err) throw err;
          arr[3] = {
            xuanhuan : result.slice(0,5),
            dushi : result.slice(5,10),
            kehuan : result.slice(10,15),
            remen : result.slice(15)
          }
          pool.query("select * from book_list",(err,result)=>{
            if(err) throw err;
            arr[4] = {
              wanben : result.slice(0,3),
              xinshu : result.slice(3)
            }
            res.send(arr);
          })
        })
      })
    })
  })
})
module.exports = router;