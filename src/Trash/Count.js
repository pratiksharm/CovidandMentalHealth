import React, {useState, useEffect} from 'react';

export default function Example(){
    //Declare a state which is count = 0.
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })

    return(
        <div>
            <p>You cliked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}
