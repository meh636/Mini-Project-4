const express = require('express');
const fs = require('fs');
const router = express.Router();
const filePath = './data/blogs.json'; // Path for your blog data file

// Read blogs
router.get('/', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return res.status(500).send(err);
        res.json(JSON.parse(data));
    });
});

// Create a new blog post
router.post('/', (req, res) => {
    const newPost = req.body;
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return res.status(500).send(err);
        const blogs = JSON.parse(data);
        blogs.push(newPost); // Add the new post to the existing array
        fs.writeFile(filePath, JSON.stringify(blogs, null, 2), (err) => {
            if (err) return res.status(500).send(err);
            res.status(201).send(newPost); // Send back the created post
        });
    });
});

module.exports = router;