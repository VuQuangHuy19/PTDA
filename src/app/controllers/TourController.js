const  Tour  = require('../models/Tours');

class TourController {
    index(req, res, next) {
        Tour.find({}, function(err, tours)
        {
            if(!err) res.json(tours);
            res.status(400).json({error: 'Error'})
        });
    }
}

module.exports = new TourController();