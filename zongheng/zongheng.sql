#设置客户端向服务器端的传输编码
SET NAMES UTF8;
#丢弃数据库oppo如果存在
DROP DATABASE IF EXISTS zongheng;
#创建数据库cloudbrain，并设置数据库的存储编码
CREATE DATABASE zongheng CHARSET=UTF8;
#进入数据库
USE zongheng;
#表index_list----首页banner图
CREATE TABLE index_list(
  bid SMALLINT PRIMARY KEY AUTO_INCREMENT,#轮播图编号
  banner_pic VARCHAR(80),#轮播图图片
  b_link VARCHAR(80) #轮播图链接
);
#表recom_list----首页力荐
CREATE TABLE recom_list(
  rid SMALLINT PRIMARY KEY AUTO_INCREMENT,#力荐信息编号
  title VARCHAR(30),#大标题
  subtitle VARCHAR(60),#副标题
  label1 VARCHAR(10),#标签1
  label2 VARCHAR(10),#标签2
  author VARCHAR(10),#作者
  reco_pic VARCHAR(80),#力荐信息图片
  reco_link VARCHAR(80) #力荐信息链接
);
#表setBooks----首页男生必读/女生爱看
CREATE TABLE setBooks(
  rid SMALLINT PRIMARY KEY AUTO_INCREMENT,#必读id
  title VARCHAR(30),#标题
  s_pic VARCHAR(80),#图片
  s_status INT, #1为男生必读, 0为女生必读
  r_link VARCHAR(80) #必读链接
);
#表ind_other----首页玄幻、都市、科幻、热门四个模块数据
CREATE TABLE ind_other(
  id SMALLINT PRIMARY KEY AUTO_INCREMENT, #id
  title VARCHAR(30),#大标题
  subtitle VARCHAR(60),#副标题
  label1 VARCHAR(10),#标签1
  label2 VARCHAR(10),#标签2
  author VARCHAR(10),#作者
  reco_pic VARCHAR(80),#力荐信息图片
  reco_link VARCHAR(80) #力荐信息链接
);
#表book_list----首页完本经典、新书精选
CREATE TABLE book_list(
  bid SMALLINT PRIMARY KEY AUTO_INCREMENT, #bid
  title VARCHAR(20), #标题
  b_pic VARCHAR(80), #图片链接
  p_link VARCHAR(80) #链接
);
#表书籍类别 book_class----书籍类别列表
CREATE TABLE book_class(
  bid SMALLINT PRIMARY KEY AUTO_INCREMENT, #bid
  b_class_name VARCHAR(20), #书籍所属的小类名称
  b_class_no INT #书籍所属的大类
);
#排行榜 rank_list----排行榜列表
CREATE TABLE rank_list(
  rid SMALLINT PRIMARY KEY AUTO_INCREMENT, #rid
  title VARCHAR(40), #排行榜书籍名称
  support INT, #支持人数
  rank_sort INT #排行榜标号
);
#书籍列表 book_list
CREATE TABLE book_viewlist(
  bid SMALLINT PRIMARY KEY AUTO_INCREMENT, #bid
  title VARCHAR(40), #书名
  author VARCHAR(20), #作者
  renewal VARCHAR(40), #更新信息
  intro VARCHAR(500), #简介
  b_pic VARCHAR(80) #图片地址
);
#书籍详情 book_details
CREATE TABLE book_details(
  bid SMALLINT PRIMARY KEY AUTO_INCREMENT, #bid
  title VARCHAR(40), #书名
  author VARCHAR(20), #作者
  intro VARCHAR(500), #作品简介
  label1 VARCHAR(10), #标签1
  label2 VARCHAR(10), #标签2
  label3 VARCHAR(10), #标签3
  label4 VARCHAR(10) #标签4
);
#章节目录 section_list
CREATE TABLE section_list(
  sid SMALLINT PRIMARY KEY AUTO_INCREMENT, #sid
  bid SMALLINT, #书籍编号
  title VARCHAR(40), #标题
  link VARCHAR(80) #连接
);
#章节内容 EssayPage
CREATE TABLE EssayPage(
  eid SMALLINT PRIMARY KEY AUTO_INCREMENT, #sid
  bid SMALLINT, #书籍编号
  sid SMALLINT, #章节编号
  content VARCHAR(5000) #账内内容
);
#标签列表 label
CREATE TABLE label(
  lid SMALLINT PRIMARY KEY AUTO_INCREMENT, #lid
  content VARCHAR(10) #内容
);
#用户表 user
CREATE TABLE user(
  uid SMALLINT PRIMARY KEY AUTO_INCREMENT, #uid用户ID
  uname VARCHAR(20),#uname 用户名
  upwd VARCHAR(20),#upwd 密码
  email VARCHAR(40), #邮箱
  nickname VARCHAR(20) #昵称
);
#我的书架 bookshelf
CREATE TABLE bookshelf(
  id INT PRIMARY KEY AUTO_INCREMENT, #收藏信息ID
  bid INT #书本id
);