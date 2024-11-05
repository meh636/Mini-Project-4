const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const blogRoutes = require('./routes/blog'); // Make sure this path is correct

const app = express(); // Initialize the app

// Middleware
app.use(cors()); // Enable CORS for all requests
app.use(bodyParser.json()); // Parse JSON bodies

// Use the blog routes for any path starting with /blogs
app.use('/blogs', blogRoutes); 

const PORT = 8000; // Define the port

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
