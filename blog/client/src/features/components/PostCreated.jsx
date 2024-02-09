import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
import { usePostContext } from "../context/posts/PostProvider";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useThemeContext } from "../context/theme/ThemeProvider";
const PostCreated = () => {
  const location = useLocation("");
  const posts = usePostContext();
  const { theme } = useThemeContext();
  let currentLocation = location.pathname.split("/");

  const renderedComments = Object.values(posts)
    .filter((post) => post.id === currentLocation[1])
    .map((post) => {
      return (
        <>
          <section key={post.id} 
          className="test" 
          id={theme}>
            <article 
            key={post.img}
            className="post-content-created">
              <picture 
              className="img-post-created"
              key={post.img}
              >
                <a
                  key={post.img}
                  href={post.img}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="anchor-post-created-container"
                >
                  <img src={post.img} alt="Post image" />
                </a>
              </picture>

              <header 
              key={post.title}
              className="post-content-front">
                <h1 className="title-post-created" key={post.title}>
                  {post.title}
                </h1>
                <p className="body-text-post-created">{post.postContent}</p>
              </header>
            </article>
            <section 
            className="container-comment-list"
            key={post.id}
            >
              <CommentCreate postId={post.id} />
              <CommentList postId={post.id} />
            </section>
          </section>
        </>
      );
    });
  return <>{renderedComments}</>;
};
PostCreated.propTypes = {
  postId: PropTypes.any,
  postTitle: PropTypes.any,
};

export default PostCreated;
