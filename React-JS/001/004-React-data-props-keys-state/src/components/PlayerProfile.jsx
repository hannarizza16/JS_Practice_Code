import { useState } from 'react'

const PlayerProfile = (props) => {
    const [isShowProfile, setShowProfile] = useState(false)
    
    return (
        <>
        <button onClick={() => setShowProfile(!isShowProfile)}>View {props.playerName}'s Profile</button>
        <div>
            {isShowProfile && (
                <div>
                    <h2>Player Profile</h2>
                    <h3>Player Name: {props.playerName}</h3>
                    <h3>Points: {props.points}</h3>
                    <h3>Assists: {props.assists}</h3>
                    <h3>Rebounds: {props.rebounds}</h3>
                </div>
            )}
        </div>
        </>
    )
}

export default PlayerProfile