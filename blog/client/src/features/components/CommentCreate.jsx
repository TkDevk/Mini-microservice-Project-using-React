import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types"

const CommentCreate = ({ postId }) => {
    const [content, setContent] = useState('');
    const inputHandle = (e) => {
        setContent(e.target.value);
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        //Make the call post request to the server
        //http://localhost:4001/posts
        await axios.post(`http://localhost:4001/posts/${postId}/comments/`, {
            content,
        });
        setContent('');
    };

    return (
        <>
            <article className="textbox-container">
                <form
                    onSubmit={onSubmit}
                    className="form-text-container">
                    <textarea
                        className="text-area"
                        name=""
                        id=""
                        cols="50"
                        rows="10"
                        placeholder="Write a comment ..."
                        value={content}
                        onChange={inputHandle}
                        type="text"
                    >
                    </textarea>
                    <button
                        className="btn-submit-comment">
                        Submit
                    </button>
                </form>
            </article>
        </>
    )
}
CommentCreate.propTypes = {
    postId: PropTypes.any,
}
export default CommentCreate