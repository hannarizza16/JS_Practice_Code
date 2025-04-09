import { useState } from "react"
import OnSubmitEvents from "./OnSubmitEvents"
import HoverEvents from "./HoverEvents"


export default function ReactEvents() {

const [value, setValue] = useState('')
const [isShowing, setShow] = useState(false)

const [inputValue, setInputValue] = useState('')
const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: 'green',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
});

const onClickChange = () => {
    setShow(!isShowing)
    if (!isShowing) {
        setValue("I dont know what im doing")
        setButtonStyle({
            ...buttonStyle, backgroundColor: 'red'
        })
    } else {
        setValue(null),
        setButtonStyle({
            ...buttonStyle, backgroundColor: 'green'
        })
    }
}

const handleChange = (e) => {
    setInputValue(e.target.value)
}


    return (
        <>
        <h3>onClick Event</h3>
        <button onClick={onClickChange} style={buttonStyle}>
            {isShowing ? 'Hide Text' : 'Show Text'}
        </button>
        <h1>{value}</h1>
        
        <h3>onChange Event</h3>
        <label>Name: 
            <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <h3>Hello, {inputValue}</h3>

        <OnSubmitEvents/>
        
        <HoverEvents/>

      
        

        </>
    )
} 



