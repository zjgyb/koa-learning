const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    next();
    ctx.response.type = 'html';
    ctx.response.body = '<h1>Hello World!</h1>';
});

app.listen(3000, () => {
    console.log('success in 3000');
    
});
