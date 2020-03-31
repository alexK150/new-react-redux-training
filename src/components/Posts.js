import React, { useEffect } from "react";
import {connect} from 'react-redux';

import {PostItem} from "./PostItem";
import {fetchPosts} from "../redux/post.actions";

const Posts = (props) => {
    console.log(props.posts);
    useEffect(() => {
        props.fetchPosts();
    }, []);

    return (
        <div className='posts'>
            <h2>Posts</h2>

            {props.posts.map(p => <PostItem key={p.id} id={p.id} title={p.title} body={p.body}/>)}
        </div>
    )
};

const mapStateToProps = state => ({
    posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Posts);