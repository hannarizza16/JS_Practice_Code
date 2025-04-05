import Sample from "./sample"
import UpliftLogo from "../assets/UpliftLogo.png"
import ReactList from "./ReactList"
import Button from './Button'
import { use } from "react";

// UpliftLogoIcon ==> component name
const UpliftLogoIcon = () => {
    const isStudent = false
    const yearOfBirth = 1998
    const yearToday = 2025
    const firstName = "John"
    const lastName = "Doe"

    const fullName = () => {
        return `${firstName} ${lastName}`
    }

    const age = () => {
        const totalAge = yearToday - yearOfBirth
        return `${totalAge}`
    }

    
    return(
        <>
        <a href="https://www.upliftcodecamp.com/">
        <img src={UpliftLogo} alt="Uplift Code Camp Logo" />
        </a>
        <Sample/>

{/* jsx Interpolation combination of js and html */}
        <h3>My name is {fullName()} and my age is {age()}</h3>
        {isStudent ? <p> Yes, I am currently a student</p> : <p>No, I am not currently enrolled </p> }

        <ReactList/>

        <h2>Are you okay?</h2>
        {/* {
            Array.map(userProfile => {
                <Button /> 
            })
        } */}

        <Button buttonText = 'YES' textColor ='green'/>
        <Button buttonText ='No' textColor = 'red'/>
        <Button buttonText = 'MAYBE' textColor ='blue'/>
        
        </>
    )
}

export default UpliftLogoIcon