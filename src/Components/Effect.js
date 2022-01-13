import React, { useState, useEffect } from 'react';

export default function Effect() {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);

  useEffect(()=>{
    alert("I am clicked");
  },[num]);

  return (
    <div>
      <button onClick={
        (() =>{
          setCount(count + 1);
        })}>
        Click {count}
      </button>
      <button onClick={
        (() =>{
          setNum(num + 1);
        })}>
        Click {num}
      </button>
    </div>
  );
}