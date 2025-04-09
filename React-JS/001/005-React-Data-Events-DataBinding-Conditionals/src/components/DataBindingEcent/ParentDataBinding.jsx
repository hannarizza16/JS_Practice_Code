import { useState } from "react"

export default function ParentDataBinding() {

    const [info, setInfo] = useState({
        firstName: "",
        lastName: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo(prev => ({
            ...prev,
            [name]: value
        }));
    };



    const handleReset = (e) => {
        e.preventDefault();
        setInfo({firstName:"", lastName:""});
    }

    return (
        <>
        <div className="dataBindingContainer">
            <h1>Data Binding</h1>
            <form action="" >
                <div className="formSection">
                    <label>First Name:
                        <input type="text" name="firstName" value={info.firstName} onChange={handleChange}/>
                    </label>

                </div>
                <div className="formSection">
                    <label>Last Name:
                        <input type="text" name="lastName" value={info.lastName} onChange={handleChange}/>
                    </label>
                </div>

                <button onClick={handleReset}>Reset</button>
            </form>

            <p>Welcome, {info.firstName} {info.lastName}!</p>
        </div>
        </>
    )
}