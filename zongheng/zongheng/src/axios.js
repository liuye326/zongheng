//将引入axios库单独保存在一个文件中,减少main.js代码量
//1.引入vue实例
import Vue from "vue";
//2.引入axios库
import axios from "axios";
//3.发送请求时保存session信息
axios.defaults.withCredentials = true;
//4.设置请求基础路径
axios.defaults.baseURL = "http://freely.applinzi.com";
//5.将axios注册vue实例（不支持use注册的方式，需将其放入到Vue的原型对象中）
Vue.prototype.axios = axios;
//6.在main.js中引入axios.js