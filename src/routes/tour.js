const express = require('express');
const router = express.Router();
const Tour = require('../app/models/Tours');

// API để lấy danh sách tour
router.get('/api/tours', async (req, res) => {
    try {
        const tours = await Tour.find();
        res.json(tours);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving tours', error });
    }
});

module.exports = router;