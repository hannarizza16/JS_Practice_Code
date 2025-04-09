import { useState } from "react"

export default function ParentOnSubmit() {

    const [input, setInput] = useState("")
    const [submitted, setSubmitted] = useState("")


    const handleInput = (e) => {
        e.preventDefault()
        setSubmitted(input)
        setInput("")

    }
    
    const handleSubmission = (e) => {
        setInput(e.target.value)
    }
    return(
        <>
        <form onSubmit={handleInput} >
            <input type="text" value={input} onChange={handleSubmission} />
            <button type="submit">Submit</button>
        </form>
        <p>This is what you input {submitted}</p>
        </>
    )
}