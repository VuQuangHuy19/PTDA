// routes/tourRoutes.js
const express = require("express");
const router = express.Router();
const tourController = require("../controllers/tourController");

// Định tuyến cho trang danh sách tour
router.get("/tours", tourController.getAllTours);

module.exports = router;
