const express = require("express");
const pool = require("../pool");
const bodyParser = require("body-parser");
var router = express.Router();
router.use( bodyParser.urlencoded({
    extended:false
}));
router.get("/getlist",(req,res)=>{
  var arr = [];
  for(var i=0;i<7;i++){arr[i]=[]};
  pool.query("select * from book_class",(err,result)=>{
    if(err) throw err;
    for(var item of result){
      switch(item.b_class_no){
        case 1:
          arr[0].push(item);
          break;
        case 2:
          arr[1].push(item);
          break;
        case 3:
          arr[2].push(item);
          break;
        case 4:
          arr[3].push(item);
          break;
        case 5:
          arr[4].push(item);
          break;
        case 6:
          arr[5].push(item);
          break;
        case 7:
          arr[6].push(item);
          break;
        default:
          break;
      }
    }
    res.send(arr);
  })
})
module.exports = router;