const express = require('express');
const router = express.Router();

const posts = [
    {
        id: 1,
        title: "First Blog Post",
        preview: "This is the preview of the first blog post.",
        content: "This is the content of the first blog post.",
        date: new Date(),
    },
    {
        id: 2,
        title: "Second Blog Post",
        preview: "This is the preview of the second blog post.",
        content: "This is the content of the second blog post.",
        date: new Date(),
    },
    // Add more posts here
];

// Get all posts
router.get('/', (req, res) => {
    res.json(posts);
});

// Get a single post by ID
router.get('/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

module.exports = router;
