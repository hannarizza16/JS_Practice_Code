export default function ChildComponent(props) {

    // child recieving the props and destructuring it 
    const {id, playerName, rebounds, wins} = props
    return (
        <>
        <div>
            <h1>Player Profile {id}</h1>
            <h3>Player Name: {playerName}</h3>
                <h3>Rebounds: {rebounds}</h3>
                <h3>Wins {wins}</h3>

        </div>
        </>
    )
}