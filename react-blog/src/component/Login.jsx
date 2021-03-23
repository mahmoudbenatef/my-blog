import { useEffect, useState, useRef } from "react";
import { Post } from "../component/post";
import {User} from "../component/User"
import {MyApis} from "../apis";
import {handleLogin} from "./WelcomePage";
import {Router, Link, Redirect, useNavigate, navigate} from "@reach/router"
export function Login({handleLogin}) {
    // const navigate = useNavigate();

    const [users, setAllUserState]= useState([{}])
    const [user,setUserState]= useState({email:""})
    const [authedUserID,setAuthedUserIDState]= useState()
    const api = new MyApis();
    const handleMyLogin = (email) => {
        var allUsers=[]
        const users = api.getAllUsers().then( json => allUsers=json).then()
        setTimeout( () => {

            let authedUser = allUsers.filter((tmpUser)=>{
                if(tmpUser.email == email)
                {
                    console.log(tmpUser.email)
                    return tmpUser
                }
            })
            if (authedUser[0].id)
            {
                // this.currentUser= authedUser[0].id;
                // return authedUser[0].id
                navigate(`/index/home/${authedUser[0].id}` )
            }
            else return {

            }
        },1000)

    }
    return (
        <div>
            <div className="mb-3">
                <label  className="form-label">
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
                <button className="btb btn-primary" onClick={()=> handleMyLogin(user.email)}> </button>
            </div>
        </div>

    )
}