import { useState, useEffect } from "react";
import axios from 'axios'
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = ()=>{
const [loading, setLoading] = useState(true);
//Create state for the post, to store the data
//the get request it's an object, so ({})
 const [posts,setPosts] = useState({}); 
 const fetchPosts = async ()=>{
    //route/port
    const res = await axios.get('http://localhost:4000/posts');
    // any request from axios i get back a response data but the object is nested inside this data
    setPosts(res.data);
    setLoading(false);
 };
 //When call fetchPosts function?, so in order to run the function only when the component it's displayed i can use useEffect

//With useEffect it will only fetch the post once is created

useEffect(()=>{
    fetchPosts();
},[]) //  [] as second argument it means that will be call only once

if (loading) {
    return <p>Loading...</p>;
  }
//static method returns an array of a given object's own enumerable string-keyed property values. it's brings only the content

 const renderedPosts = Object.values(posts).map((post)=>{
     return (
     <>
        <article 
        key={post.id}
        className="card-container">
            <h2 
            className="title-card">
             {post.title}
            </h2>
            <CommentCreate postId={post.id}/>
            <CommentList postId={post.id}/>
        </article>
     </>
     )
 });
 //Fetch and get the posts created and put it inside the card

    return(
        <>
         {renderedPosts}
        </>
    )
};

export default PostList
