const experess = require('express')
const router = experess.Router();

const PlusController = require('../app/controllers/PlusController');

router.get('/', PlusController.index)


module.exports = router;
