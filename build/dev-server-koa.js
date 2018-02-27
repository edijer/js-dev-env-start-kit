import koa from 'koa';
const app = module.exports = new koa();

/* eslint-disable no-console */

app.use(async (ctx) => {
  ctx.body = "Koa says hi!";
});

var port = process.env.PORT || 3000;

app.listen(port);
console.log('Started App. Listening on port:' + port);