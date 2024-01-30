import { useState, useEffect,useContext, createContext } from "react";
import axios from 'axios'
import PropTypes from "prop-types"

//Create contexts
const postContext = createContext();
const loadingContext = createContext();

// Creating a function with useContext allow to use the state where ever i want to.
export function usePostContext()  {
    return useContext(postContext);
}

export function useLoadingContext() {
    return useContext(loadingContext);
}

const PostProvider = ({children}) => {

    //useStates
    //Create state for the post, to store the data
    //to get request it's an object, so ({})
    const [posts, setPosts] = useState({});
    //
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        //route/port
        //http://localhost:4001/posts
        const res = await axios.get('http://localhost:4000/posts');
        // any request from axios i get back a response data but the object is nested inside this data
        setPosts(res.data);
        setLoading(false);
    };
    //When call fetchPosts function?, so in order to run the function only when the component it's displayed i can use useEffect
    useEffect(() => {
        fetchPosts();
    }, []) //  [] as second argument it means that will be call only once

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