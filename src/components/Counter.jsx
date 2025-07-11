import React, { useState } from 'react';
const Counter = () => {

    const [count, setCount] = useState(0);
    return (
        

        <div>
            <h1>Counter Component</h1>
            <p>This is a simple counter component.</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <p>Current Count: {count}</p>   
        </div>
        
    );
}
export default Counter;