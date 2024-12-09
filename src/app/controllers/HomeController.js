const Tour = require("../models/tour");
const { mutipleMongooseToObject } = require("../../until/mongoose");

class HomeController {
  index(req, res, next) {
    Tour.find({})
      .then((tours) => {
        res.render("home", {
          tours: mutipleMongooseToObject(tours),
        });
      })
      .catch(next);
  }
}

module.exports = new HomeController();
