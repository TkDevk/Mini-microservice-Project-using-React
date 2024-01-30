import CommentCreate from "./CommentCreate"
import CommentList from "./CommentList"
import { usePostContext } from "../context/PostProvider"
import PropTypes from "prop-types"
import { useLocation } from "react-router-dom"



const PostCreated = () => {
    const location = useLocation('');
    const posts = usePostContext();
    let currentLocation = location.pathname.split('/')

    const renderedComments = Object.values(posts)
        .filter(post =>
            post.id === currentLocation[1]
        )
        .map((post) => {
            return (
                <>
                    <article className="form-text-container">
                        <h1 className={"title-post-created"} key={post.id}>{post.title}</h1>
                        <CommentCreate postId={post.id} />
                    </article>
                    <section className="container-comment-list">
                        <CommentList postId={post.id} />
                    </section>
                </>
            )

        })
    return (
        <>
            {renderedComments}
        </>
    )

}
PostCreated.propTypes = {
    postId: PropTypes.any,
    postTitle: PropTypes.any,
}

export default PostCreated