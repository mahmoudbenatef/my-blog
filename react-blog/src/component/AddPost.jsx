import { useEffect, useState, useCallback } from "react";
import {MyApis} from "../apis";
import {BlogContext} from "../context";
import {Link, useNavigate} from "@reach/router";

export function AddPost(){
    const navigate = useNavigate();

    const api = new MyApis()
    const [postBody, updatePostBody] = useState("")
    const [postTitle, updatePostTitle] = useState("")
    const [postAdded, addSpecificPost] = useState(false)

    const add= useCallback((postBody,postTitle,user_id) =>{
        addSpecificPost(true);
        api.addPost(postBody,postTitle,user_id);
    },[addSpecificPost])

    const addPost = (postBody,postTitle,user_id)=> {
        console.log(api.addPost(postBody,postTitle,user_id));
        navigate(`/index/home/${user_id}` )

        // addSpecificPost(true)
    }

    return(
        <BlogContext.Consumer>
            {({user_id})=>
                <div className="container p-3 mb-2 bg-warning text-white">
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
                    {/*<Link to={"/index/profile/"+user_id}>*/}
                    {/*    <button onClick={add(postBody,postTitle,user_id)} >Add post</button>*/}
                    {/*</Link> {" "}*/}

                    <button onClick={()=>addPost(postBody,postTitle,user_id)} >Add post</button>
                </div>
            }
            </BlogContext.Consumer>

    )
}