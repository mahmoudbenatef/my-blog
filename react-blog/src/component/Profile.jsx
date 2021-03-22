import { useEffect, useState } from "react";
import { Post } from "../component/post";
import {User} from "../component/User"
export function Profile(userId) {
    const [posts, setpostState]= useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId.userId}`)
            .then(response => response.json())
            .then(json => setpostState(json))
            // console.log(users)

    } ,[] );
    return (
        <div>
            <span> Home  |</span>
            <span>Posts |</span>
            <span>Profile|</span>
            <br>
            </br>
            <h1>User Profile</h1>
            <User userID={userId.userId}></User>
            {posts.map((post)=>{
                return <Post postId={post.id}></Post>
         })}
        </div>
    ) 
}