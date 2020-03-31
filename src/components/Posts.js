import React, {useState, useEffect} from "react";
import axios from 'axios';

export const Posts = () => {
    let [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const data = response.data;
                setPosts(data)
            });
    }, []);
    console.log(posts);
    return(
        <div className='posts'>
            <h2>Posts</h2>
            {posts.map(p =>
                <div>
                    <p key={p.id}><strong>{p.title}</strong></p>
                    <span>{p.body}</span>
                </div>
                )}
        </div>
    )
};