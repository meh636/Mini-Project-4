// src/App.js
import React from 'react';
import './styles.css'; // Import the CSS file
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import BlogPostForm from './components/BlogPostForm';
import PostList from './components/PostList';

function App() {
    return (
        <div className="App">
            <SignUp />
            <SignIn />
            <BlogPostForm />
            <PostList />
        </div>
    );
}

export default App;
