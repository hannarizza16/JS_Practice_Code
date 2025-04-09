const UseStateObjectDetails = ({teamPlayers}) => {

    return (
        <>
        <div>
            <h3>Team Deatails</h3>

            {teamPlayers.map(({playerName, location}, index) => (

                <div key={playerName} className="align-left">

                    <p><strong>{index + 1}. </strong> {playerName},

                    <strong>Location:</strong> {location}</p>
                    
                </div>
            ))}
        </div>
        </>
    )
}
export default UseStateObjectDetails