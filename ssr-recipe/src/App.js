import React from 'react';
import { Route } from 'react-router-dom';
import Menu from './components/Menu';
import loadable from '@loadable/component';
const BluePage = loadable(() => import('./pages/BluePage'));
const RedPage = loadable(() => import('./pages/RedPage'));
const UsersPage = loadable(() => import('./pages/UsersPage'));

const App = () => {
  return (
    <div>
      <Menu></Menu>
      <hr />
      <Route path="/red" component={RedPage} />
      <Route path="/blue" component={BluePage} />
      <Route path="/users" component={UsersPage} />
    </div>
  );
};

export default App;
