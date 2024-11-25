const experess = require('express')
const router = experess.Router();

const LienheController = require('../app/controllers/LienheController');

router.get('/', LienheController.index);

module.exports = router;
