import React, { useState } from 'react'


const Test = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }


  return (
    <div>
      <h3>First Counter App with React JS</h3>

    <div>
        <button onClick={() => {
            increment();
        }}>Increment+</button>
        <p>{count}</p>
        <button onClick={
            () => {
                decrement();

                if(count == 0) return alert('Count can not less than 0');
            }
        }>Decrement-</button>
    </div>
      
    </div>
  )
}

export default Test
