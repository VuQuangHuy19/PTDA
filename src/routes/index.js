const newsRouter = require('./home')

function route(app)
{
    app.get('/', newsRouter);
    
}

module.exports = route;