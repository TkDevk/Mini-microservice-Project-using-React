import { useState } from "react"
import axios from 'axios'
const PostCreate = ()=>{
    const [title, setTitle] = useState('');

    const handleText = (e)=>{
       setTitle( e.target.value)
    }
    //The server will try to submit the form itself, the thing is i want to send it whenever i want

    //With the next function i will fecth the api so make the Function async

    const onSubmit = async (e)=>{
      e.preventDefault();

      await axios.post('http://localhost:4000/posts',{
         title,
      });
      setTitle('');
    }

    return(
    <>
    <form onSubmit={onSubmit} 
    className="form-container" 
    action="">
        <label className="title-post">
            Title
        </label>
        <input 
        onChange={handleText}
        value={title} 
        className="input-title" 
        type="text" 
        placeholder="Wite a title..."/>
        <button 
        className="create-btn">
            Submit
        </button>
    </form>
    </>
    )
}

export default PostCreate   