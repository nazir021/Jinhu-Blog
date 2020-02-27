
const config = require("../config/redis");
var redisStore = require("koa-redis");

var redis = require("redis");
var client = redis.createClient(config.redis.port, config.redis.host);
var options = { client: client, db: 1 };

var store = redisStore(options);
app.use(
  session({
    store: store
  })
);

class Auth {
    constructor(){
        this.priority = priority || 1;
        AuthException.USER = 8;
        AuthException.ADMIN = 16;
    }

    get m(){
        return async (ctx,next) =>{

    }

    }
}


module.exports = {
    Auth
}