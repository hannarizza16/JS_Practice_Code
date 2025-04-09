
// destructuring 
import PlayerProfile from "./PlayerProfile"

const Props = (props) => {

    const {id, playerName, points, assists, rebounds} = props
    return (
        <>
            <div className="props-info">
                <h2 className="props-header">Score Widget {id}</h2>
                <h3>Player Name: {playerName}</h3>
                <h3>Points: {points}</h3>
                <h3>Assists: {assists}</h3>
                <h3>Rebounds: {rebounds}</h3>

                {/* Pass all the props by spread operator */}
                <PlayerProfile {...props}/>
        </div>
        

        </>
    )
}

// everytime we pass a prop from the parent to the child component,
// we need to define the prop type in the child component
// Props.propTypes = {
//     points: Proptypes.number,
//     playerName: Proptypes.string
// }

export default Props

// // Props drilling
// import PlalyerProfile from "./PlayerProfile"
// const Props = (props) => {
//     return (
//         <>
//             <div className="props-info">
//                 <h2 className="props-header">Score Widget {props.id}</h2>
//                 <h3>Player Name: {props.playerName}</h3>
//                 <h3>Points: {props.points}</h3>
//                 <h3>Assists: {props.assissts}</h3>
//                 <h3>Rebounds: {props.rebounds}</h3>
//                 <PlalyerProfile {...props}/>
//         </div>
        

//         </>
//     )
// }

// // everytime we pass a prop from the parent to the child component,
// // we need to define the prop type in the child component
// // Props.propTypes = {
// //     points: Proptypes.number,
// //     playerName: Proptypes.string
// // }

// export default Props

