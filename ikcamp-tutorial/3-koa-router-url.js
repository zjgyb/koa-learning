var Koa = require('koa');
var app = new Koa();
var router = require('koa-router')()

router.get('user', '/users/:id', async (ctx, next) => {
    ctx.redirect(ctx.router.url('home'));
    ctx.body = `<h1>Hello World!</h1>`;
});

// router.get('/home', async (ctx, next) => {
//     ctx.body = `<h1>Hello Home!</h1>`;
// });
//  =>路由/user/3
const userUrl3 = router.url('user', 3);
console.log(`userUrl3 = ${userUrl3}`);

// 方法二
const userUrl4 = router.url('user', {id: 4});
console.log(`userUrl4 = ${userUrl4}`);

// router.use((ctx, next) => {
//     ctx.redirect(ctx.router.url('home'));
// });

app.use(router.routes());

app.listen(3000, () => {
    console.log('listen in 3000');
    
})
