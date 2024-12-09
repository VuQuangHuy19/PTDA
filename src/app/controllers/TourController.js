// controllers/tourController.js
const Tour = require("../models/tour");

// Lấy tất cả các tour từ MongoDB
const getAllTours = async (req, res) => {
  try {
    // Lấy tất cả các tour
    const tours = await Tour.find();

    // Render view và truyền danh sách tour
    res.render("tours", { tours });
  } catch (err) {
    console.error(err);
    res.status(500).send("Có lỗi khi lấy danh sách tour");
  }
};

module.exports = {
  getAllTours,
};
