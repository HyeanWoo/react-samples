import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

const CounterContainer = ({ count, increase, decrease }) => {
  return <Counter count={count} onIncrease={increase} onDecrease={decrease} />;
};

// 리덕스 연동 방법 1
// const mapStateToProps = state => ({
//   count: state.counter.count,
// });
// const mapDispatchToProps = dispatch => ({
//   increase: () => dispatch(increase()),
//   decrease: () => dispatch(decrease()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// 리덕스 연동 방법2
// export default connect(
//   state => ({
//     count: state.counter.count,
//   }),
//   dispatch => ({
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//   }),
// )(CounterContainer);

// bindActionCreators 쓰기
// export default connect(
//   state => ({
//     count: state.counter.count,
//   }),
//   dispatch =>
//     bindActionCreators(
//       {
//         increase,
//         decrease,
//       },
//       dispatch,
//     ),
// )(CounterContainer);

// 객체로 액션함수 넣어주기
export default connect(
  ({ counter }) => ({
    count: counter.count,
  }),
  {
    increase,
    decrease,
  },
)(CounterContainer);
