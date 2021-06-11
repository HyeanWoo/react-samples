const loggerMiddleware = store => next => action => {
  console.group(action && action.type);
  console.log('prev state:', store.getState());
  console.log('action:', action);
  next(action);
  console.log('next prev:', store.getState());
  console.groupEnd();
};

export default loggerMiddleware;

// 미들웨어 기본 구조
// const middleware = function middleware(store) {
//   // do something
//   return function(next) {
//     // do something
//     return function(action) {
//       // do something
//     }
//   }
// }
