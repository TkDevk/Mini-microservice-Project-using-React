import { useState, useEffect, createContext, useContext } from "react";
import axios from 'axios'
import PropTypes from "prop-types"


const postContext = createContext();
const loadingContext = createContext();

export const usePostContext = ()=>{
    return useContext(postContext)
}
export const useLoadingContext = ()=>{
    return useContext(loadingContext)
}

const PostProvider = ({ children }) => {
    //useStates
    //Create state for the post, to store the data
    //to get request it's an object, so ({})
    const [posts, setPosts] = useState({});
    //
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        //route/port
        //https://q62uaj5kmc.execute-api.us-east-1.amazonaws.com/dev/posts
        //http://localhost:4000/posts
        const res = await axios.get('https://q62uaj5kmc.execute-api.us-east-1.amazonaws.com/dev/posts');
        // any request from axios i get back a response data but the object is nested inside this data
        setPosts(res.data);
        setLoading(false);
    };
    //When call fetchPosts function?, so in order to run the function only when the component it's displayed i can use useEffect
    useEffect(() => { 
        // set as soon as render the state
        fetchPosts(); //Also, the state is changing inside
    },[]) //  [] as second argument it means that will be call only once

    return (
        <postContext.Provider value={posts}>
            <loadingContext.Provider value={loading}>
                {children}
            </loadingContext.Provider>
        </postContext.Provider>
    );
}
PostProvider.propTypes = {
    children: PropTypes.any,
}
export default PostProvider