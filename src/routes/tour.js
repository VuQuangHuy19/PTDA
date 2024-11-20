const experess = require('express')
const router = experess.Router();

const HomeController = require('../app/controllers/TourController');

router.get('/', TourController.index)


module.exports = router;
