import Router from 'koa-router';
import posts from './posts';
import auth from './auth/index';

const api = new Router();

api.use('/posts', posts.routes()); // routes 라우트 적용
api.use('/auth', auth.routes());

export default api;
