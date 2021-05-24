import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>fixed:{fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('state is called');
                console.log(this.state);
              },
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;

/*
onClick등의 함수에서 두개 이상의 setState를 호출해 같은 state를 업데이트할 경우
반복 횟수만큼 바뀌지않고 한번만 실행된다.

이유는 setState가 비동기적으로 실행되어 state값이 바로 바뀌지않기 때문이다.

따라서 의도했던대로 setState를 조작하기 위해서는 setState에서 prevState나 prop를 받아와
비교후 넣어주는 식으로 해결할 수 있다
 */
