const Router = require('koa-router');
const posts = require('./posts');

const api = new Router();

api.use('/posts', posts.routes()); // routes 라우트 적용

module.exports = api;
