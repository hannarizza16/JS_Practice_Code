import { useState } from 'react'
import UseStateObjectDetails from './UseStateObjectDetails'
import { use } from 'react'
const UseStateObject = () => {

    const [team, setTeams] = useState(
        {teamName: 'Golden State Warriors', teamLocation: 'San Francisco'}
    )

    const [players, setPlayer] = useState([
        {playerName: 'Dwayne Wade', location: 'California'},
        {playerName: 'Lebron James', location: 'USA'},
        {playerName: 'Kobe Bryant', location: 'France'}
    ])



    const [showDetails, setShowDetails] = useState(false)
    return (
        <>
        <h1>Players for tonight</h1>
        <h2>using useState array of Object</h2>
        <h2>Team: {team.teamName}, {team.teamLocation}</h2>
        <button onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? 'Hide Players' : 'Show Players'}
        </button>
        {showDetails && <UseStateObjectDetails teamPlayers={players}/>}
        </>
    )
}
export default UseStateObject