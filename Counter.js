import React, { useState } from 'react';

const Counter = () => {
  const [count, xyz] = useState(0);

  const incrementCount = () => {
    xyz(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default Counter;
