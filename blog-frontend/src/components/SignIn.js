// src/components/SignIn.js
import React, { useState } from 'react';

const SignIn = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add signin logic here (e.g., send to backend)
        console.log({ userId, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <input
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignIn;
