import { useState } from "react";
import axios from "axios";
const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [close, setClose] = useState(true);
  const [postContent, setPostContent] = useState("");
  const regex = /^(https?:\/\/)/i;

  const handleClick = () => {
    setClose((prev) => !prev);
  };

  const handleText = (e) => {
    setTitle(e.target.value);
  };

  const handleImg = (e) => {
    setImg(e.target.value);
  };
  const handlePostContent = (e) => {
    setPostContent(e.target.value);
  };
  //The server will try to submit the form itself, the thing is i want to send it whenever i want

  //With the next function i will fecth the api so make the Function async

  //https://q62uaj5kmc.execute-api.us-east-1.amazonaws.com/dev/posts
  const onSubmit = async (e) => {
    e.preventDefault();
    if (regex.test(img) && title && postContent) {
      //http://localhost:4000/posts
      //https://q62uaj5kmc.execute-api.us-east-1.amazonaws.com/dev/posts
      await axios.post("https://q62uaj5kmc.execute-api.us-east-1.amazonaws.com/dev/posts", {
        title,
        img,
        postContent,
      });
      setImg("");
      setTitle("");
      setPostContent("");
      window.location.reload(false);
    } else {
      alert("Please enter a valid URL link");
    }
  };

  return (
    <>
      {close && (
        <article className="create-post-figure-container">
          
          <form onSubmit={onSubmit} className="form-container" action="">
            <label className="title-post">Every Post require a Title, Image & Text</label>
            <input
              onChange={handleText}
              value={title}
              className="input-title"
              type="text"
              placeholder="Title..-"
            />
            <input
              onChange={handleImg}
              value={img}
              className="input-title"
              type="text"
              placeholder="Image URL"
            />
            <textarea
              cols="30"
              rows="5"
              onChange={handlePostContent}
              value={postContent}
              className="input-title"
              type="text"
              placeholder="Comment..."
            />

            <button className="create-btn">Submit</button>
          </form>
          <figure className="icon-close-figure">
            <picture onClick={handleClick} className="icon-close-pop-up">
              <img src="circle-xmark-regular.svg" alt="" />
            </picture>
          </figure>
        </article>
      )}
    </>
  );
};

export default PostCreate;
