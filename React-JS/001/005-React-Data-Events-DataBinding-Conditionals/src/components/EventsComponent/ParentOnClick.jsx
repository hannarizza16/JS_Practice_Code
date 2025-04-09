import { useState } from "react"
import ChildOnClick from "./ChildOnClick"

export default function ParentOnClick() {

    const [text, setText] = useState('Hanna')
    const [showUserInfo, setShowUserInfo] = useState(false)

    const userInformation = [
        {id: 1, name: 'hanna', lastName: 'malana', age: 27},
        {id: 2, name: 'hanna', lastName: 'malana', age: 27}

    ]

    const toggleClick = () => {
        setText(prevText => prevText === 'Hanna' ? 'Malana' : 'Hanna')
    }

    const togglePass = () => {
        setShowUserInfo(prevState => !prevState)


    }

    return (
        <>
        <h1>On Click Event</h1>
        <button onClick={toggleClick}>Change</button>
        <h3>{text}</h3>

        <h1>Passing it as a Prop</h1>
        <button onClick={togglePass}>Passing Props</button>
        
        {showUserInfo && userInformation.map(({id, name, lastName, age}) => 
        <ChildOnClick key={id}{...{id, name, lastName,age}}/>        
        )}
        </>
    )
}