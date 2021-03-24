import {useState, useEffect} from "react"

export function User (userID){
    const [user, setUser ] = useState([{}])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userID.userID}`)
            .then(response => response.json())
            .then(json => setUser(json))

    } ,[] );

    return(
        <div>
            <label htmlFor="">Username</label>
            <h1 > {user.name} </h1>
            <label htmlFor="">email</label>
            <h1 > {user.email} </h1>
            <br/>
            <br/>
        </div>
    )
}

