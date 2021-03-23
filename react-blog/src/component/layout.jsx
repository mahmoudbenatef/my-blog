import { useEffect, useState } from "react";
import { Post } from "../component/post";
import {User} from "../component/User"
import {Link} from "@reach/router";
import {BlogContext} from "../context";
export function Layout({ children }) {
    console.log(children)
    // const homelink = "/index/home/"

    return (
        <BlogContext.Consumer>
            {({user_id})=>
                <>
                    <Link to={"/index/home/"+user_id}>Home</Link> |{" "}
                    <Link to={"/index/profile/"+user_id}>Profile</Link> |{" "}
                    <Link to={"/index/addpost/"}>Add post </Link> |{" "}
                    <br/>
                    {children}
                </>
            }
         </BlogContext.Consumer>
    )
}