import { useState } from "react"

export default function OnSubmitEvents() {
    
const [inputValue, setInputValue] = useState('')
const [submittedValue, setSubmittedValue] = useState('')


const handleSubmitChange = (e) => {
    setInputValue(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedValue(inputValue)
    setInputValue('')
}

    return (
        <>
          <h3>onSubmit Event</h3>
        <form onSubmit={handleSubmit}>
            <label>
                <input type="text" value={inputValue} onChange={handleSubmitChange}/>
            </label>
            <button type="submit"> submit </button>
        </form>
        <h3>this is what you submit {submittedValue}</h3>

        </>
    )
}