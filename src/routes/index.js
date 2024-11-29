const homeRouter = require('./home')
const authRoute = require('./auth');
const lienheRoute = require('./lienhe');

function route(app)
{
    app.use('/', homeRouter);
    app.use('/', authRoute);
    app.use('/lienhe', lienheRoute);

}

module.exports = route;