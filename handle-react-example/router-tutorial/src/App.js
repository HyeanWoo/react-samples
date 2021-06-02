import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './router/About';
import Home from './router/Home';
import Profile from './router/Profile';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/spaceboy">spaceboy 프로필</Link>
        </li>
        <li>
          <Link to="/profile/hunter">hunter 프로필</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact />
      <Route path={['/about', '/info']} component={About} />
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
};

export default App;
