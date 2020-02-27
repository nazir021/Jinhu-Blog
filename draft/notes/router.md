## Router

```javascript



if (ctx.path === 'test/api' && ctx.method === 'GET'){
        ctx.body = {key:'jinhu'}
}


router.get('test/api',(ctx,next) => {
    ctx.body = { key: "jinhu" };
})


```