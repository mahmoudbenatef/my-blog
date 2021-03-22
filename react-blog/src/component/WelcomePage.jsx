import { useEffect, useState } from "react";
import { Profile } from "../component/Profile";
import { HomePage } from "../component/HomePage";


export function WelcomePage() {

    const [users, setAllUserState]= useState([{}])
    const [login, setLoginState]= useState(false)
    const [user,setUserState]= useState({email:""})
    const [authedUserID,setAuthedUserIDState]= useState("")
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(json => setAllUserState(json))
            console.log(users)
       

    } ,[] );

const handleLogin = ()=> {
    let authedUser = users.filter((tmpUser)=>{
        if(tmpUser.email == user.email)
        {
            console.log(tmpUser.email)
            return tmpUser
        }
    })
    setAuthedUserIDState(authedUser[0].id)
    console.log(authedUser)
    setLoginState(true)
}
  return (
    <div>
        {!login &&
            <div>
        <div className="mb-3">
            <label forName="exampleFormControlInput1" className="form-label">
                Email address
            </label>
            <input

                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email Address"
                value={user.email}
                onChange={(e) => {
                    setUserState({email: e.target.value})
                }}

            />
        </div>
            <div className="mb-3">
            <label forName="exampleFormControlInput1" className="form-label">
            Password
            </label>
            <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Password"
            value={user.password}
            />
            </div>
            <div className="mb-3">
            <button className="btb btn-primary" onClick={()=>handleLogin()}> </button>
            </div>
            </div>
        }
        { login &&
             // <HomePage userId={1}> </HomePage>
            <Profile userId={1}> </Profile>
        }
    </div>
  );
}
