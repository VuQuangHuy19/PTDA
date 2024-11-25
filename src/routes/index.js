const homeRouter = require('./home')
const authRoute = require('./auth');
const lienheRoute = require('./lienhe');
const plusRoute = require('./plus')

function route(app)
{
    app.use('/', homeRouter);
    app.use('/', authRoute);
    app.use('/lienhe', lienheRoute);
    app.use('/plus', plusRoute)

}

module.exports = route;