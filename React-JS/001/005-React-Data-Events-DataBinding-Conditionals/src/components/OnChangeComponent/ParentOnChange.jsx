import { use } from "react"
import { useState } from "react"

export default function ParentOnChange() {
    const [name, setName] = useState('Guest')
    const [quantity, setQuantity] = useState(0)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [color, setColor] = useState("")
    const [shipping, setShipping] = useState("")

    const handleOnChange = (e) =>{
        setName(e.target.value)
    }
 
    // if the quantity hits 0
    const handleQuantity = (e) => {
        const value = e.target.value
        if(value >=0){
            setQuantity(value)
        }
    }

    const handleComment = (e) => {
        setComment(e.target.value)
    }

    const handlePayment = (e) => {
        setPayment(e.target.value)
    }
    
    const handleColor = (e) => {
        setColor(e.target.value)
    }

    const handleShipping = (e) => {
        setShipping(e.target.value)
    }

    return (
        <>
        <input type="text" value={name} onChange={handleOnChange} />
        <p>Name: {name}</p>

        <input type="number" value={quantity} onChange={handleQuantity}></input>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleComment} placeholder="Input Comment here."></textarea>
        <p>Review: {comment}</p>

        <select value={payment} onChange={handlePayment}>
            <option value="" disabled hidden>Select an option</option>
            <option value="Gcash" >Gcash</option>
            <option value="Visa" >Visa</option>
        </select>
        <p>Payment Method: {payment}</p>

        <select value={color} onChange={handleColor}>
            <option value="" disabled hidden>Select a color</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="pink">Pink</option>
        </select>
        <p style={{color: color}}>Change my color</p>
        <label>
        <input type="radio" value="Delivery" checked={shipping=== "Delivery"} onChange={handleShipping}/>
        Delivery
        </label>
        <label>
        <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShipping}/>
        Pick Up 
        </label>
        <p>Shipping Method: {shipping}</p>
        
        </>

    ) 
}