"use strict";

const {
  LinRouter,
  NotFound,
  groupRequired,
  disableLoading
} = require("lin-mizar");
const { getSafeParamId } = require("../../libs/util");

const {
  LoginValidator
} = require("../../validators/user");

const { PositiveIdValidator } = require("../../validators/common");

const { BookNotFound } = require("../../libs/err-code");
const { BookDao } = require("../../dao/book");

// book 的红图实例
const accountApi = new LinRouter({
     prefix: "/api/auth"
});

// book 的dao 数据库访问层实例
const userDao = new userDao();

authApi.post("/",async ctx => {
  // verfy the parameter
  const validateResult = await new LoginValidator().validate(ctx);
  let user = await ctx.manager.userModel.verify(
    validateResult.get("body.username"),
    validateResult.get("body.password")
  );

  const { accessToken, authPriority } = getTokens(user);
  ctx.json({
      access_token: accessToken,
      auth_priority: authPriority
  });

})


authApi.post("/reauth", async ctx => {
  // verfy the parameter
  const validateResult = await new LoginValidator().validate(ctx);
  let user = await ctx.manager.userModel.verify(
    validateResult.get("body.username"),
    validateResult.get("body.password")
  );

  const { accessToken, authPriority } = getTokens(user);
  ctx.json({
    access_token: accessToken,
    auth_priority: authPriority
  });
});







module.exports = { bookApi, [disableLoading]: false };
