import React from 'react';

export const PostItem = ({id, title, body}) => (
    <div key={id}>
        <p><strong>{title}</strong></p>
        <span>{body}</span>
    </div>
);