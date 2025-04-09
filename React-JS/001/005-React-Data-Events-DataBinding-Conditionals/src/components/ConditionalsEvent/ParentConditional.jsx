import { useState } from "react"
import ChildLogInConditional from "./ChildLogInConditional"
import ChildUnauthorizeConditional from "./ChildUnauthorizeConditional"
import './ConditionalEvent.css'
export default function ParentConditional() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const user = "Hanna"

    const toggleLogIn = () => {
        setIsLoggedIn(prev => !prev)
    }
     return (
        <>
        <h2>Conditional Rendering</h2>
        <button onClick={toggleLogIn}>
            {isLoggedIn ? 'unauthorized' : 'authorized'}
        </button>


        {
            isLoggedIn ? <ChildLogInConditional user={user}/> : <ChildUnauthorizeConditional/>
        }

        </>
    )
}