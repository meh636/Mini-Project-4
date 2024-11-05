// src/components/EditPostForm.js
import React, { useState, useEffect } from 'react';

const EditPostForm = ({ postId, onCancel, onUpdate }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`http://localhost:8000/blogs/${postId}`);
            const data = await response.json();
            setTitle(data.title);
            setBody(data.body);
        };

        fetchPost();
    }, [postId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`http://localhost:8000/blogs/${postId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, body }),
        });
        onUpdate(); // Call the onUpdate prop to refresh the list
        onCancel(); // Close the edit form
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Post</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
            ></textarea>
            <button type="submit">Update</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default EditPostForm;
