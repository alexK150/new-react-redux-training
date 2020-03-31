import React, {useState, useEffect} from "react";
import axios from 'axios';

import {PostItem} from "./PostItem";

export const Posts = () => {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const data = response.data;
                setPosts(data)
            })
            .catch(error => {
                console.log(error.message)});
    }, []);

    return (
        <div className='posts'>
            <h2>Posts</h2>
            {posts.map(p => <PostItem id={p.id} title={p.title} body={p.body}/>)}
        </div>
    )
};