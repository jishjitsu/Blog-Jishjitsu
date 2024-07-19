const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Blog') // Replace 'mydatabase' with your actual database name
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(bodyParser.json());

// Import routes using forward slashes
const postRoutes = require('./routes/posts');
const subscriberRoutes = require('./routes/subscribers');
const commentRoutes = require('./routes/comments');

app.use('/posts', postRoutes);
app.use('/subscribers', subscriberRoutes);
app.use('/comments', commentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
