import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './router/About';
import Home from './router/Home';
import Profiles from './router/Profiles';

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
          <Link to="/profiles">프로필</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact />
      <Route path={['/about', '/info']} component={About} />
      <Route path="/profiles" component={Profiles} />
    </div>
  );
};

export default App;
