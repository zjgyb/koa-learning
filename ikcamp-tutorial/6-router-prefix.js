const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');

// 路由前缀
const router = new Router({
    prefix: '/users'
});

router.get('/', async (ctx, next) => {
    ctx.body = `<h1>hello users!</h1>`;
});

router.get('/:id', async (ctx, next) => {
    ctx.body = `<h1>hello users id!</h1>`;
    // 获取url参数
    console.log(ctx.params);
    
});

app.use(router.routes());

app.listen(3000, () => {
    console.log('success in 3000');
    
})