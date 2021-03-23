
import { useEffect, useState } from "react";
import { Post } from "../component/post";
import {Link} from "@reach/router";
import {blogContext} from "../context"

export function HomePage(userId) {

  const [posts, setpostState]= useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then(json => setpostState(json))
            // console.log(posts)
       

    } ,[] );
  return(
      <>
      <div>
       <h1>Home page </h1>
     {posts.map((post)=>{
       return <div><Post postId={post.id}></Post></div>
      })} 
      </div>
     
      
      </>
  )

}
