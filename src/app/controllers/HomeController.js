const UserModel = require('../models/Test');

class HomeController {
    index(req, res, next) {
        UserModel.getAllMark()
            .then(users => {
                res.render('home');  // Send the data as JSON
            })
            .catch(error => {
                next(err);
            });
    }
}

module.exports = new HomeController;