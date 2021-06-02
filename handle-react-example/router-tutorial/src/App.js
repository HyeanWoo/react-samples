import React from 'react';
import { Route } from 'react-router-dom';
import About from './router/About';
import Home from './router/Home';

const App = () => {
  return (
    <div>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;
