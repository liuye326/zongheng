const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
/*引入路由模块*/
const indexRouter = require("./routers/index");
const blRouter = require("./routers/book_list");
const rankRouter = require("./routers/rank");
const detailsRouter = require("./routers/details");
const nsRouter = require("./routers/navseek");
const userRouter = require("./routers/user");
const shelfRouter = require("./routers/shelf");
var app = express();
app.listen(4000);

//使用cors同意设置响应头信息
app.use(cors({
  origin:["http://localhost:8080"],
  credentials:true  //路由器跨域
}));
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));

//托管静态资源到public目录下
app.use(express.static('public'));
/*使用路由器来管理路由*/
app.use("/index",indexRouter);
app.use("/bl",blRouter);
app.use("/rank",rankRouter);
app.use("/details",detailsRouter);
app.use("/ns",nsRouter);
app.use("/user",userRouter);
app.use("/shelf",shelfRouter);