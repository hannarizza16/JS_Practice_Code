import { captureOwnerStack, useState } from "react"

export default function HoverEvents() {
    const [isHover, setIsHovered] = useState(false)
    const [hoverStyle, setHoverStyle] = useState({
        color: 'black',
        cursor: 'pointer'
    })

    const handleMouseOver = () => {
        setIsHovered(true)
        setHoverStyle({ color: 'green' })
    }

    const handleMouseOut = () => {
        setIsHovered(false)
        setHoverStyle({ color: 'black' })
    }

    return (
        <>
            <div>
                <h1 
                    onMouseOver={handleMouseOver} 
                    onMouseOut={handleMouseOut}
                    style={hoverStyle}
                >
                    Hover Me
                </h1>
            </div>
        </>
    )
}
