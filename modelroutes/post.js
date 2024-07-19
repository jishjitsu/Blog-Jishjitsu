const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    author: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

const postSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    preview: { type: String, required: true },
    date: { type: Date, default: Date.now },
    comments: [commentSchema],
});

module.exports = mongoose.model('Post', postSchema);