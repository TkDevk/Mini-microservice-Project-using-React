
import PropTypes from "prop-types";

const CommentContent = ({ commentId, commentContent }) => {



  return (
    <>
      <article key={commentId.id} className="comment-created-container">
        <aside 
       className="user-icon-container">
          <picture className="user-icon">
            <img src="message-regular.svg" alt="User Icon" />
          </picture>
        </aside>
        <section className="user-text-info-container">
          <span className="user-nickname">user</span>
          <h3 className="user-id">{commentId}</h3>
          <p className="user-comment-content">{commentContent}</p>
        </section>
      </article>
    </>
  );
};

CommentContent.propTypes = {
  commentId: PropTypes.any,
  commentContent: PropTypes.any,
};

export default CommentContent;
