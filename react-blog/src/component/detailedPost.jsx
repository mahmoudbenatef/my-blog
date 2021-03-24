
import { useEffect, useState } from "react";

export function DetailedPost({post_Id}){

    const [post, setpostState]= useState({})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${post_Id}`)
            .then(response => response.json())
            .then(json => setpostState(json))
        console.log(post)


    } ,[] );

    return(
        <div className="card">
            <div className="card-header">
                Post
            </div>
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
            </div>
        </div>
    )

}