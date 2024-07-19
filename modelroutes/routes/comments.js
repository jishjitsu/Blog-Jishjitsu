const express = require('express');
const router = express.Router();
const Post = require('../modelroutes/post');

// Add a comment to a post
router.post('/:postId', async (req, res) => {
    const { postId } = req.params;
    const { author, content } = req.body;

    try {
        const post = await Post.findOne({ id: postId });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        post.comments.push({ author, content });
        await post.save();

        res.status(201).json(post);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all comments for a post
router.get('/:postId', async (req, res) => {
    const { postId } = req.params;

    try {
        const post = await Post.findOne({ id: postId }).select('comments');
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.json(post.comments);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
