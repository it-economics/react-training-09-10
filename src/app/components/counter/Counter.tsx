import { useEffect, useState } from 'react';

export const Counter = () => {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('useEffect body')
    document.title = 'My cool Counter : ' + counter;

    return () => {
      console.log('useEffect cleanup')
    }
  }, [counter])
  
  return (
    <>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        Increment
      </button>
      <span>Count: {counter}</span>
    </>
  );
};
