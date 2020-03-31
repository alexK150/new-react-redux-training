import React, {useState} from 'react';
import axios from 'axios';

export const AddPostForm = (props) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const onChangeHandler = (e) => {
        (e.target.name === 'title') ? setTitle(e.target.value) : setText(e.target.value)
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title,
            text
        })
            .then(data => setTitle(data.title))
    };

    return (
        <div>
            <h2>Post Form</h2>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Title: </label>
                    <input type="text" name="title" value={title} onChange={onChangeHandler}/>
                </div>
                <br/>
                <div>
                    <label>Text: </label>
                    <textarea name="body" value={text} onChange={onChangeHandler}/>
                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};
