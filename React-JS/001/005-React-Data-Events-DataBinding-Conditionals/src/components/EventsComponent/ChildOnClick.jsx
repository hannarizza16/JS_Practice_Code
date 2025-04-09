export default function ChildOnClick(userInfo) {
    const {id, name, lastName, age} = userInfo

    const fullName = `${name} ${lastName}`
 
    return (
        <>
        <h3>{id}. Name: {fullName}</h3>

        <h3>Age: {age}</h3>

        </>
    )
}