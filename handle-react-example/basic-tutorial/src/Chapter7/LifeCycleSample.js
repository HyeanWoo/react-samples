import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상: ', snapshot);
    }
  }

  render() {
    console.log('render');

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {/* {this.props.missing.value} => 에러 캐치 확인용 코드*/}
        <h1 style={style} ref={ref => (this.myRef = ref)}>
          {this.state.color}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;

/*
컴포넌트 라이프사이클
  1. 마운트
    - DOM이 생성되고 웹 브라우저상에 나타나는 것
    - constructor: 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자
    - getDerivedStateFromProps: props에 있는 값을 state에 넣을 때 사용
    - render: UI렌더링
    - componentDidMount: 컴포넌트가 웹 브라우저상에 나타난 후 호출
  2. 업데이트
    - 업데이트는 다음과 같은 경우에 실행된다
      - props, state가 바뀔 때
      - 부모 컴포넌트가 리렌더링될 때
      - this.forceUpdate로 렌더링을 트리거(강제)
    - getDerivedStateFromProps: 마운트와 마찬가지로 props의 변화에 따라 state 값에 변화를 주고 싶을 때
    - shouldComponentUpdate: 컴포넌트가 리렌더링을 해야 할지 결정하는 메서드
      - true 또는 false를 반환하여 작업을 실행하거나 중지한다
      - this.forceUpdate()를 호출했다면 이 과정을 생략하고 render함수를 호출한다
    - render
    - getSnapshotBeforeUpdate: 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출
    - componentDidUpdate: 컴포넌트의 업데이트 작업이 끝난 후 호출
  3. 언마운트
    - 컴포넌트에서 DOM을 제거하는 것
    - componentWillUnmount: 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출
    
*/
