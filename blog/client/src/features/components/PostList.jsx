
import {usePostContext, useLoadingContext} from "../context/posts/PostProvider"
import { Link } from 'react-router-dom';
import {PropTypes} from "prop-types"


const PostList = ()=>{

    const posts = usePostContext();
    const loading = useLoadingContext();

    if (loading) {
        return <p>Loading...</p>;
    }
//Object.values(posts): static method returns an array of a given object's own enumerable string-keyed property values. it's brings only the content

 const renderedPosts = Object.values(posts).map((post)=>{
     return ( 
        
       <Link to={`/${post.id}`} key={post.id}> 
        <article 
        key={post.id}
        className="card-container"> 
            <h2 
            className="title-card">
             {post.title}
            </h2> 
        </article>    
        </Link>
        
     )
 });
 //Fetch and get the posts created and put it inside the card <Link to={`/${post.id}`}/>

    return(
        <>
          {renderedPosts}
        </>
    )
};

PostList.propTypes = {
    children : PropTypes.any,
}

export default PostList
