var koa = require('koa');
var app = new koa();

// logger

app.use(ctx=> {
  var start = new Date;
  var ms = new Date - start;
  ctx.body = 'Hello Koa:'+ms;
});

// response
app.listen(3000);
