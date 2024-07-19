const express = require('express');
const router = express.Router();
const Subscriber = require('../modelroutes/subscriber');

// Add subscriber
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        email: req.body.email,
    });

    try {
        const newSubscriber = await subscriber.save();
        res.status(201).json(newSubscriber);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
