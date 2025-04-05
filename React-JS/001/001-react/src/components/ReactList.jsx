const ReactList = () => {
    const items = ["rice", "chicken", "cookies"];
    return (
        <>
            <h2>Array List Menu</h2>
            <ol>
                {items.map(item => (<li key={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</li>)).reverse()}
            </ol>
        </>
    )
}

export default ReactList