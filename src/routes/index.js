const newsRouter = require('./home')
const loginRoute = require('./login');

function route(app)
{
    app.get('/', newsRouter);
    app.use('/login', loginRoute);
}

module.exports = route;