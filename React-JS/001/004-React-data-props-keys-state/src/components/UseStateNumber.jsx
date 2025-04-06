import React, { useState } from 'react'

const UseStateNumber = () => {
    // useState is a hook that allows you to add state to a functional component
    // useState returns an array with 2 elements
    // the 1stt eleemnt is the current state value
    // the 2nd element is a updater function that allow you to update the state value
    // the useState function takes one argumaent which is the initual state value [useState(0)]

    const [playerPoints, setPlayerPoints] = useState(0)
    return (
        <>
        <h2>useState Hook</h2>
        <h3>Player Points: {playerPoints}</h3>
        
        <button onClick={() => setPlayerPoints((prevPoints) =>(prevPoints > 0 ? playerPoints - 1 : prevPoints))}>-</button>

        <button onClick={() => setPlayerPoints(() => playerPoints + 1)}>+</button>

        </>
    )
}

export default UseStateNumber
