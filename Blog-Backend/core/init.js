const requireDirectory = require("require-directory");
const Rouuter = require("koa-router");
// Init Module test
class InitManager {
    static initCore(app){
        InitManager.app = app
        InitManager.initLoadRouters()
    }

    static initLoadRouters() {
       const apiDirectory = `${process.cwd()}/app/api/v1`;
       requireDirectory(module, apiDirectory, { visit: whenLoadModule });

       function whenLoadModule(obj) {
         if (obj instanceof Rouuter) {
           InitManager.app.use(obj.routes());
         }
       }
    }

}


module.exports = InitManager