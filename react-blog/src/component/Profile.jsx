import { Router, Link ,useParams} from "@reach/router"
import { useEffect, useState } from "react";
import { Post } from "../component/post";
import {User} from "../component/User"
export function Profile({userId}) {
    const params = useParams();

    console.log(params ,"params")
    const [posts, setpostState]= useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => response.json())
            .then(json => setpostState(json))
            console.log(posts)

    } ,[] );
    return (
        <div>

            <br>
            </br>
            <div className=" container p-3 mb-2 bg-secondary text-white">
            <User userID={userId}></User>
            </div>
            <br></br>
            <div className="container">
                <h1  container p-3 mb-2 bg-info text-white>My Posts</h1>
            {posts.map((post)=>{
                return <Post postId={post.id}></Post>
         })}
                <br></br>
                <br></br>

            </div>
        </div>
    ) 
}