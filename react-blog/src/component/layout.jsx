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
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">

                    <Link to={"/index/home/"+user_id}>
                    <span className="navbar-brand">Home</span>

                    </Link> {" "}
                    <Link to={"/index/profile/"+user_id}>
                        <span className="navbar-brand">   Profile </span>
                    </Link> {" "}
                    <Link to={"/index/addpost/"}>
                        <span className="navbar-brand">Add post </span>
                    </Link> {" "}
                    </div>
                    <br/>
                </nav>
                    <br/>
                    <br/>
                    {children}
                </>
            }
         </BlogContext.Consumer>
    )
}