// src/components/PostList.js
import React, { useEffect, useState } from 'react';
import EditPostForm from './EditPostForm';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [editingPostId, setEditingPostId] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('http://localhost:8000/blogs');
            const data = await response.json();
            setPosts(data);
        };

        fetchPosts();
    }, []);

    const handleEdit = (id) => {
        setEditingPostId(id);
    };

    const handleDelete = async (id) => {
        await fetch(`http://localhost:8000/blogs/${id}`, { method: 'DELETE' });
        setPosts(posts.filter(post => post.id !== id));
    };

    const handleUpdate = () => {
        setEditingPostId(null);
        // Optionally, refresh the post list
        const fetchPosts = async () => {
            const response = await fetch('http://localhost:8000/blogs');
            const data = await response.json();
            setPosts(data);
        };

        fetchPosts();
    };

    return (
        <div>
            <h2>Blog Posts</h2>
            {posts.map(post => (
                <div key={post.id}>
                    {editingPostId === post.id ? (
                        <EditPostForm
                            postId={post.id}
                            onCancel={() => setEditingPostId(null)}
                            onUpdate={handleUpdate}
                        />
                    ) : (
                        <>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <button onClick={() => handleEdit(post.id)}>Edit</button>
                            <button onClick={() => handleDelete(post.id)}>Delete</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default PostList;
