
import PropTypes from "prop-types"

const PostHome = ({postId})=>{
    return (
        <>
          
        <h1 className="title-post-created">
           {postId} Hola
        </h1>
        
        <article className="textbox-container">
              <form className="form-text-container">
                  <textarea 
                  className="text-area"
                  name=""
                  id="" 
                  cols="50" 
                  rows="10"
                  placeholder="Write a comment ..."
                  >
                  </textarea>
                <button 
                  className="btn-submit-comment">
                    Submit
                </button>  
              </form>
        </article>
        <section className="container-comment-list">
                 
        </section>
      
        </>
    )
}
PostHome.propTypes = {
   postId: PropTypes.any,
}
export default PostHome