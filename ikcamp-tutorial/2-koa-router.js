var Koa = require('koa');
var app = new Koa();
var router = require('koa-router')()

router.get('/', async (ctx, next) => {
    ctx.body = `<h1>Hello index</h1>`;
});

router.get('/home', async (ctx, next) => {
    ctx.body = `<h1>Hello home</h1>`;
});

router.get('/404', async (ctx, next) => {
    ctx.body = `<h1>Hello 404</h1>`;
});

app.use(router.routes());

app.listen(3000, () => {
    console.log('listen in 3000');
    
})