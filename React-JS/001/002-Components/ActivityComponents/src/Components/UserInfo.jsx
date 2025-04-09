const UserInfo = () => {
    const userObj ={
        firstName: "Hanna",
        lastName: "Malana",
        bio: "I want to be a Software Tester or Engineer",
        hobbies: ['cooking','reading','coding']
    }

    // Array of objects
    const aliases = [
        {
            id: 1,
            alias: 'Hanna'
        },
        {
            id: 2,
            alias: 'Jopay'
        },
        {
            id: 3,
            alias: 'Magdalena'
        }
    ]

    // Destructuring the userObj 
    const {firstName, lastName, bio, hobbies} = userObj
    const fullName = `${firstName} ${lastName}`

    return (
        <>
        <h1>My Profile</h1>
        <p className="align-left">My Name: {fullName}</p>
        <p className="align-left">Bio: {bio}</p>
        <div>
            <p className="align-left">Hobbies: </p>
            <ul>
                {hobbies.map(hobby => (<li key={hobby}> {hobby.charAt(0).toUpperCase() + hobby.slice(1) } </li>))}
            </ul>
        </div>
        <div>
            <p className="align-left">Aliases: </p>
            <ul>
                {aliases.map(alias => (<li key={alias.id}>{alias.alias}</li>))}
            </ul>
        </div>
        </>


    )

}
export default UserInfo