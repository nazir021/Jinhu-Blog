const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('test/api',(ctx,next) => {
    ctx.body = { key: "jinhu" };
})




app.use (async (ctx,next) => {
    console.log(ctx.path)
    console.log(ctx.method)
    if (ctx.path === 'test/api' && ctx.method === 'GET'){
        ctx.body = {key:'jinhu'}
    }
}) 


app.listen(3001)