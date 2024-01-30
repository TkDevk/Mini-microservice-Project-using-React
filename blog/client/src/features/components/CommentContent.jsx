
import PropTypes from "prop-types"

const CommentContent = ({commentId, commentContent}) => {


    return (
        <>
            <article className="comment-created-container">
                <aside className="user-icon-container">
                    <picture className="user-icon">
                        <img
                            src="user-regular.svg"
                            alt="User Icon" />
                    </picture>
                </aside>
                <section className="user-text-info-container">
                    <span className="user-nickname">User</span>
                    <h2 className="user-id">{commentId}</h2>
                    <p className="user-comment-content">{commentContent}</p>
                </section>
            </article>
            
        </>
    )
    
}

CommentContent.propTypes = {
    commentId: PropTypes.any,
    commentContent: PropTypes.any,
}

export default CommentContent