import ChildComponent from "./ChildComponent"
export default function ParentComponent() {
    const players = [
        {id: 1, playerName: 'Lebron James', rebounds: 10, wins: 16},
        {id: 2, playerName: 'Kobe Bryant', rebounds: 10, wins: 16},
        {id: 3, playerName: 'Dwayne Wade', rebounds: 10, wins: 16},
        {id: 4, playerName: 'James Harden', rebounds: 10, wins: 16},
    ]

    return (
        <>
        <h1> This is a parent Component</h1>
        {players.map(({id, playerName, rebounds, wins}) => (
            // you are passing props to child
            <ChildComponent key={id}{...{id, playerName, rebounds, wins}} />
        ))}
       
        </>
    )
}