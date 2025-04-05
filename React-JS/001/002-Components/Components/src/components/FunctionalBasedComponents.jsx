import React, { useState} from "react"


// component name should be in capital letter.
const Greet = (props) => {
    return <h1> Hello, {props.userName} </h1>

}
const FunctionalBasedComponents = () => {
    const [count, setCount] = useState(0)

    // const incrementalCount = () => {
    //     setCount ( count + 1)
    // }

    return (
        <div>
            <h1> Functional Component</h1>
            <p>Count : {count}</p> 
            {/* <button onClick={incrementalCount}>Increment</button> */}
            <button onClick={() => setCount(count => count + 1)}>Increment</button>
            <button onClick = {() => setCount (count => count -1 )}>Decrement</button>

            <div> <Greet userName = "John"/>
            
            </div>
        </div>
    )
}

export default FunctionalBasedComponents