import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router';
import App from './App';

const app = express();

// 서버사이드 렌더링을 처리할 핸들러 함수
// 404를 띄우지않고 처리해준다
const serverRender = (req, res, next) => {
  const context = {};
  const jsx = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const root = ReactDOMServer.renderToString(jsx);
  res.send(root);
};

app.use(serverRender);

app.listen(5000, () => {
  console.log('Running on http://localhost:5000');
});
