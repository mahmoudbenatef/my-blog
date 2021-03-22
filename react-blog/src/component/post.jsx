
import { useEffect, useState } from "react";

export function Post(postId){
  
    const [post, setpostState]= useState({})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId.postId}`)
            .then(response => response.json())
            .then(json => setpostState(json))
            console.log(post)
       

    } ,[] );

    return(
        <div><h1>{post.title}</h1><p>{post.body}</p></div>
    )

}