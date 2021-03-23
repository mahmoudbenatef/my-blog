import {Redirect} from "@reach/router";

export function PrivateRoute({as:Comp, isLoggedin,...props}) {
return isLoggedin? <Comp {...props}/> : <Redirect to={"/login"} noThrow/>
}