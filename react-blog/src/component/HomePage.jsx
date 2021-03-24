
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
          <div className="container">
     {posts.map((post)=>{
         return <><div className="p-3 mb-2 bg-light text-dark"> <Post postId={post.id}></Post></div> <br></br></>
      })}
          </div>
      </div>
     
      
      </>
  )

}
