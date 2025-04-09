import Child from "./Child"
import './PropsHandling.module.css'

import { useState } from "react"

export default function Parent() {

    const [isCardVisible, setIsCardVisible] = useState(false)

    const toggleCard = () => {
        setIsCardVisible(!isCardVisible)
    }
    return (
        <>
        <h1>Parent</h1>
        <Child toggleCard={toggleCard} isCardVisible={isCardVisible}/>
        </>
    )
}