import { useState } from "react"

// export default function ParentMouseOver() {

//     const [, setHover] = useState(false)
//     const [color, setColor] = useState({
//         color: 'black', 
//         cursor: 'pointer',

//     })

//     const handleMouseOver = () => {
//         setHover(true)
//         setColor(prevColor => ({ ...prevColor, color: 'green' , backgroundColor: 'black'}))
        
//     }

//     const handleMouseOut = () => {
//         setHover(false)
//         setColor(prevColor => ({ ...prevColor, color: 'black',  backgroundColor: ""}))
//     }

//     return(
//         <>
//         <div>
//             <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={color}>Mouse Over</h1>
//         </div>
        
//         </>
//     )
// }

export default function ParentMouseOver() {
    const [style, setStyle] = useState({ color: 'black' });

    const handleMouseOver = () => {
        setStyle({ color: 'green' });
    };

    const handleMouseOut = () => {
        setStyle({ color: 'black' });
    };

    return (
        <>
            <div>
                <h1 
                    onMouseOver={handleMouseOver} 
                    onMouseOut={handleMouseOut} 
                    style={style}>
                    Mouse Over
                </h1>
            </div>
        </>
    );
}