import { useEffect, useState } from "react";
import {MyApis} from "../apis";
import {BlogContext} from "../context";

export function AddPost(){
    const api = new MyApis()
    const [postBody, updatePostBody] = useState("")
    const [postTitle, updatePostTitle] = useState("")
    const [postAdded, addSpecificPost] = useState(false)

    const add= ()=>{

    }
    return(
        <BlogContext.Consumer>
            {({user_id})=>
                <>
                    <label> Add post</label>
                    <br/>
                    <label>Title</label>
                    <br/>
                    <input type="text" value={postTitle} onChange={(e) => {
                        updatePostTitle(e.target.value)
                    }}/>
                    <br/>
                    <label>Body</label>
                    <br/>
                    <textarea value={postBody} onChange={(e) => {
                        updatePostBody(e.target.value)
                    }}></textarea>
                    <br/>

                    <button onClick={api.addPost(postBody,postTitle,user_id)} ></button>
                </>
            }
            </BlogContext.Consumer>

    )
}