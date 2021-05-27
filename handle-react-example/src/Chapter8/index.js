import React, { useState } from 'react';
import Counter from './Counter';
import Info from './Info';
import Average from './Average';

const Index = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Average />
      <Counter />
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      {visible && <Info />}
    </div>
  );
};

export default Index;
