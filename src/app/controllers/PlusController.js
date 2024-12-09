

class PlusController {
    //GET
    index(req, res) {
        res.render('plus');
    }
}

module.exports = new PlusController();