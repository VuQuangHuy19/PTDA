

class LienheController {
    // [GET] /
    index(req, res) {
        res.render('kienhe');
    }
}

module.exports = new LienheController();
