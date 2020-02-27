const Koa = require('koa2')
const axios = require("axios");
const auth = require('./api/v1/auth')
const requireDirectory = require('require-directory')

const Init = require('../core/init')




const app = new Koa()
Init.initCore(app);



app.use(auth.routes())

app.listen(3000)
