import React from 'react';
import useInputs from './useInputs';
// import { useState, useEffect } from 'react';

const Info = () => {
  // const [name, setName] = useState('');
  // const [nickname, setNickname] = useState('');
  // useEffect(() => {
  //   console.log('Effect');
  //   console.log(name);
  //   return () => {
  //     console.log('Clean');
  //     console.log(name);
  //   };
  // }, []);

  const [state, onChange] = useInputs({ name: '', nickname: '' });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        {/* <input value={name} onChange={e => setName(e.target.value)} />
        <input value={nickname} onChange={e => setNickname(e.target.value)} /> */}
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;

/*
- useEffect
  - 클래스 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태로 봐도 된다
  - useEffect에 설정한 함수는 컴포넌트가 화면에 렌더링될 때마다 실행된다
  - 두번째 파라미터로 빈배열([])을 넣어주면 마운트될때만 실행된다
  - 위의 빈배열에 특정값을 넣어주면 해당값이 업데이트될 때마다 실행된다
  - 업데이트되기 직전이나 언마운트되기 전에 작업은 리턴값으로 넣어주면 실행된다(뒷정리 함수)
*/
