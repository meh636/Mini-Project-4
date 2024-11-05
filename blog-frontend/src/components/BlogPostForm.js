import React, { useState } from 'react';

const BlogPostForm = ({ onPostCreated }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = { title, body };

        const response = await fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        });

        if (response.ok) {
            const post = await response.json();
            onPostCreated(post);
            setTitle('');
            setBody('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
            />
            <button type="submit">Create Post</button>
        </form>
    );
};

export default BlogPostForm;
