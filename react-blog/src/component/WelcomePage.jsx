import { useEffect, useState } from "react";
import { Profile } from "../component/Profile";
import { HomePage } from "../component/HomePage";
import { Login } from "../component/Login";
import {Router, Link, Redirect, useNavigate} from "@reach/router"
import {Layout} from "../component/layout"
import {PrivateRoute} from "./PrivateRoute";
import {MyApis} from "../apis"

export function WelcomePage() {
   const api = new MyApis();
    // const navigate = useNavigate();
    const handleLogin = (email)=>{
   const user_id = api.handleLogin(email).then(()=>{
       // navigate(`/home/1`)
       console.log(user_id)
       }
   );
   }
    return (
      <Router>
              <PrivateRoute as={Layout} path="/index" isLoggedin={true}>
                  <HomePage  path="/home/:userId"/>
                  <Profile  path="profile/:userId"/>
              </PrivateRoute>
          <Login handleLogin={handleLogin} path="/login" />
      </Router>
  );
}
