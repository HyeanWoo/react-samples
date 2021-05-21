import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('Welcome!');
  const onClickLeave = () => setMessage('Bye, Have a Great Time!');

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        Red
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        Green
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        Blue
      </button>
    </div>
  );
};

export default Say;
