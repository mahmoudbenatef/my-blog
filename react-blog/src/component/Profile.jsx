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
            <h1>User Profile</h1>
            <User userID={userId}></User>
            {posts.map((post)=>{
                return <Post postId={post.id}></Post>
         })}
        </div>
    ) 
}