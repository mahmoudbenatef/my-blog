import { useEffect, useState } from "react";
import { Post } from "../component/post";
import {User} from "../component/User"
import {Link} from "@reach/router";
export function Layout({ children }) {
    console.log(children)
    return (
        <>
            <Link to="/index/home">Home</Link> |{" "}
            <Link to="/index/profile">Profile</Link> |{" "}
    <br/>
            {children}
        </>
    )
}