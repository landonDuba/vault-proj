function Greeting() {
    const names = ["James", "John", "Jimmy", "Jacob", "Bartholmew"];

    return (
        <>
        <h1>Hello: </h1>
            <List names={names}></List>
        </>
    )

}


function List(props) {
    return (
        <>
        <ul>
            {props.names.map((name) => {
                return <li>{name}</li>
            })
            }
        </ul>
        </>
    )
}

export default Greeting;