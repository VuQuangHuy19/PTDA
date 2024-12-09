const homeRouter = require('./home')
const authRoute = require('./auth');
const lienheRoute = require('./lienhe');
const plusRoute = require('./plus')
const tourRoutes = require('./tour');

function route(app)
{
    app.use('/', homeRouter);
    app.use('/', authRoute);
    app.use('/lienhe', lienheRoute);
    app.use('/plus', plusRoute);
    app.use('/', tourRoutes);

}

module.exports = route;
