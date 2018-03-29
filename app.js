const koa = require('koa');
const route = require('koa-router')();
const bodyParser = require('koa-bodyparser')
// 导入controller middleware:
const controller = require('./controller');

const app = new koa()

app.use(bodyParser());

// 使用middleware:
app.use(controller());
app.listen(3001)

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:3001/');

