import React from 'react';
import { Route } from 'react-router-dom';
import Menu from './components/Menu';
import UsersContainer from './containers/UsersContainer';
import BluePage from './pages/BluePage';
import RedPage from './pages/RedPage';

const App = () => {
  return (
    <div>
      <Menu></Menu>
      <hr />
      <Route path="/red" component={RedPage} />
      <Route path="/blue" component={BluePage} />
      <Route path="/users" component={UsersContainer} />
    </div>
  );
};

export default App;
