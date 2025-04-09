// destructuring
import { useState } from 'react'

const PlayerProfile = ({playerName, points, assists, rebounds}) => {
    const [isShowProfile, setShowProfile] = useState(false)
    
    return (
        <>
        <button onClick={() => setShowProfile(!isShowProfile)}> View {playerName}'s Profile </button>
        <div>
            {isShowProfile && (
                <div>
                    <h2>Player Profile</h2>
                    <h3>Player Name: {playerName}</h3>
                    <h3>Points: {points}</h3>
                    <h3>Assists: {assists}</h3>
                    <h3>Rebounds: {rebounds}</h3>
                </div>
            )}
        </div>
        </>
    )
}

export default PlayerProfile