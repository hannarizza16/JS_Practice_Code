export default function Child({toggleCard, isCardVisible}) {
    return (
        <>
        <button onClick={toggleCard}> Click to Pop Up</button>
        {isCardVisible && (
            <div className="popupCard">
                <h2>I am the child</h2>
                <h2>This is a centered card</h2>
                <p>Content passed from parent</p>
            </div>
        )}
        </>
    )
}