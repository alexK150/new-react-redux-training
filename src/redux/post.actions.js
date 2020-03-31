import {FETCH_POSTS, ADD_POST} from "./post.types";
import axios from "axios";

export const fetchPosts = () => dispatch => {
    console.log('fetching');
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(posts => {
            dispatch({
                type: FETCH_POSTS,
                payload: posts.data
            })
        })
        .catch(error => {
            console.log(error.message)
        });
};