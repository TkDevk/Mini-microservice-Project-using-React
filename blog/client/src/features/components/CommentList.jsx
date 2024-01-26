import axios from "axios"
import { useEffect, useState } from "react"
import PropTypes from "prop-types"

const CommentList = ({postId})=>{

  const [comments, setComments] = useState([]);

  const fecthData = async()=>{
    const res = await axios.get(`https://vp3o2ces1k.execute-api.us-east-1.amazonaws.com/dev/posts/${postId}/comments`);

    setComments(res.data);
  };

useEffect(()=>{
     fecthData();
  },[]);

  const renderedComments = comments.map((comment)=>{
    return <li 
    className="list-comment"
    key={comment.id}>
        {comment.content}
        </li>
  })

    return(
        <ul className="comment-list-container">
        {renderedComments}
        </ul>
    )
}

CommentList.propTypes = {
    postId: PropTypes.any,
}
export default CommentList