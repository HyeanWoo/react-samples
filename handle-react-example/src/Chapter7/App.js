import React, { Component } from 'react';
import LifeCycleSample from './Chapter7/LifeCycleSample';
import ErrorBoundary from './Chapter7/ErrorBoundary';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 1677215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />;
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
