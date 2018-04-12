const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const forums = new Router();
const posts = new Router();

posts.get('/', function (ctx, next) {
    ctx.body = `<h1>hello index!</h1>`;
});
posts.get('/:pid', function (ctx, next) {
    ctx.body = `<h1>hello pid!</h1>`;
});
forums.use('/forums/:fid/posts', posts.routes(), posts.allowedMethods());

// 可以匹配到的路由为 "/forums/123/posts" 或者 "/forums/123/posts/123"
app.use(forums.routes());

app.listen(3000, () => {
    console.log('listen in 3000');

})