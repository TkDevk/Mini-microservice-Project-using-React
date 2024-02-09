import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CommentContent from "./CommentContent";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  let count = 0;
  const fecthData = async () => {
    const res = await axios.get(
      `https://vp3o2ces1k.execute-api.us-east-1.amazonaws.com/dev/posts/${postId}/comments`
    );
    //
    //https://vp3o2ces1k.execute-api.us-east-1.amazonaws.com/dev/posts/${postId}/comments

    //const res = await axios.get(`http://localhost:4001/posts/${postId}/comments/`);
    setComments(res.data);
  };

  useEffect(() => {
    fecthData();
  }, []);

  const renderedComments = comments
    .map((comment) => {
     count++
      return (
        <li className="list-comment" key={comment.id}>
          <CommentContent
            commentId={comment.id}
            postId={postId}
            commentContent={comment.content}
          />
        </li>
      );
    })
    .reverse();

  return (
    <>
      <section className="comments-advisor">
        <h3 className="comments-advisor-title">Comments ( {count} ) </h3>
      </section>

      <ul className="comment-list-container">{renderedComments}</ul>
    </>
  );
};

CommentList.propTypes = {
  postId: PropTypes.any,
};
export default CommentList;

//Import commment content
