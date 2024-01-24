import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types"

const CommentCreate = ({postId}) =>{
    const [content, setContent] = useState('');
    const inputHandle = (e)=>{
        setContent(e.target.value);
    }
    const onSubmit = async(e)=>{
       e.preventDefault();
       //Make the call post request to the server
       await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
        content,
       });
       setContent('');
    };
  
    return(
        <>
        <form 
        onSubmit={onSubmit}
        className="form-comment-container">
            <label 
            className="title-comment">
                New Comment
            </label>
            <input 
            value={content}
            onChange={inputHandle}
            className="input-comment"
            type="text" 
            placeholder="Write a comment...."/>
            <button
            className="comment-btn">
              Submit
            </button>
        </form>
        </>
    )
}
CommentCreate.propTypes = {
    postId: PropTypes.any,
}
export default CommentCreate