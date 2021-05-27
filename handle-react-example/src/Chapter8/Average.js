import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
  console.log('Calculating...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    inputEl.current.focus();
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;

/*
  useMemo, useCallback
  - 각각 이전 값, 이전 함수 상태를 저장 후 사용
  - 컴포넌트 렌더링 최적화에 사용된다

  useRef
  - ref를 쉽게 사용할 수 있도록 해준다
  - 렌더링과 관련없는 값을 관리할 수도 있다
*/
