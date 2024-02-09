import {
  usePostContext,
  useLoadingContext,
} from "../context/posts/PostProvider";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const PostList = () => {
  const posts = usePostContext();
  const loading = useLoadingContext();

  if (loading) {
    return (
      <article className="loading-p-container">
        <p className="loading-p">Loading...</p>
      </article>
    );
  }
  //Object.values(posts): static method returns an array of a given object's own enumerable string-keyed property values. it's brings only the content

  const renderedPosts = Object.values(posts)
    .map((post) => {
      return (
        <article
          key={post.id}
          className="card-container"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url(${post.img}) no-repeat`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Link to={`/${post.id}`} key={post.id}>
            <article
              className="post-content-home"
              style={{
                height: "calc(100vw/6.5)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "0.5rem",
              }}
            >
              <h2 className="title-card">{post.title}</h2>
            </article>
          </Link>
        </article>
      );
    })
    .reverse();
  //Fetch and get the posts created and put it inside the card <Link to={`/${post.id}`}/>

  return (
    <>
      <article className="card-container-home">
        <Link to="/rules">
          <article className="post-content-home">
            <h2 className="title-card-home">Welcome!</h2>
          </article>
        </Link>
      </article>
      {renderedPosts}
    </>
  );
};

PostList.propTypes = {
  children: PropTypes.any,
};

export default PostList;
