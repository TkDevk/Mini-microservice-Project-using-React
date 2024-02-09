import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const inputHandle = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    //Make the call post request to the server
    //http://localhost:4001/posts/${postId}/comments
    //https://vp3o2ces1k.execute-api.us-east-1.amazonaws.com/dev/posts/${postId}/comments

    if (content) {
      await axios.post(`https://vp3o2ces1k.execute-api.us-east-1.amazonaws.com/dev/posts/${postId}/comments`, {
        content,
      });
      setContent("");
    }else{
        alert('Please place some comment')
    }
  };

  return (
    <>
      <article className="textbox-container">
        <form onSubmit={onSubmit} className="form-text-container">
          <textarea
            className="text-area"
            maxLength="4000"
            spellCheck="false"
            cols="30"
            rows="5"
            placeholder="Write a comment ..."
            value={content}
            onChange={inputHandle}
            type="text"
          ></textarea>
          <button className="btn-submit-comment">Submit</button>
        </form>
      </article>
    </>
  );
};
CommentCreate.propTypes = {
  postId: PropTypes.any,
};
export default CommentCreate;
