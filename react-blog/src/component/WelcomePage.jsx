import { useEffect, useState } from "react";
import { Profile } from "../component/Profile";
import { HomePage } from "../component/HomePage";
import { Login } from "../component/Login";
import { Router, Link ,Redirect, useNavigate } from "@reach/router"
import {Layout} from "../component/layout"
import {PrivateRoute} from "./PrivateRoute";
import {MyApis} from "../apis"
import{BlogContext}  from "../context"
import {AddPost} from "../component/AddPost"
import {DetailedPost} from "./detailedPost";
export function WelcomePage() {
    const [user_id, setAllUserState]= useState(0)
    const [auth, setAuth]= useState(false)
    const api = new MyApis();

   const handleLogin = (email) => {
       console.log("logggg")
       setAllUserState( api.handleLogin(email))
       setAuth(true)
       console.log(user_id)
       if (user_id)
       {

           return true
       }
       else
       {
           console.log("hello")
           return false
       }
   }
    return (
        <BlogContext.Provider value={{user_id:user_id}}>
        <Router>
              <PrivateRoute as={Layout} path="/index" isLoggedin={auth}>
                  <DetailedPost path="/post/:post_Id"></DetailedPost>
                  <HomePage  path="/home/:userId"/>
                  <Profile  path="profile/:userId"/>
                  <AddPost  path="addpost/"/>
              </PrivateRoute>
          <Login handleLogin={{handleLogin:handleLogin,userId:user_id}}   path="/login" />
      </Router>
</BlogContext.Provider>
  );
}
