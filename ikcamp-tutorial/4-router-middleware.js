var Koa = require('koa');
var app = new Koa();
var router = require('koa-router')()

router.get(
    '/users/:id',
    async (ctx, next) => {
        ctx.body = '<h1>hello world!</h1>';
        ctx.user = { id: 3, name: 'huniu'};
        await next();
    },
    async ctx => {
        console.log(ctx.user);
        
    }
);

app.use(router.routes());
app.listen(3000, () => {
    console.log('listen in 3000');
    
})