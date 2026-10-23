import React, { useState } from 'react';

// Child Component
function IncrementButton({ onIncrement }) {
  return (
    <button onClick={onIncrement}>
      Increment
    </button>
  );
}

// Parent Component
export default function ParentCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Current Count: {count}</h1>
      {/* Passing the increment function to the child via onIncrement prop */}
      <IncrementButton onIncrement={increment} />
    </div>
  );
}