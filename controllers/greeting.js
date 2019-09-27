class GreetingCtrl {
    constructor() {}

    view(req, res, next) {
        try {
            const { name } = req.query;
            res.render('greeting', { name : name });
        } catch (e) {
            next(e);
        }
    }
}

module.exports = GreetingCtrl;
