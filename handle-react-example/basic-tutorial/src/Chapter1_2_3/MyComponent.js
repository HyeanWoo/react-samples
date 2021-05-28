import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name: '기본 이름',
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, children, favoriteNumber } = this.props;
    return (
      <div>
        나의 새롭고 멋진 {name} 컴포넌트 <br />
        {children}
        <br />
        숫자 하나만 생각하면? {favoriteNumber}
      </div>
    );
  }
}

export default MyComponent;
