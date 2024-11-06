const { engine } = require('express-handlebars');
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlerbars = require('express-handlebars')
const cors = require('cors')

const route = require('./routes')
const db = require('./config/db');
//connect db  
db.connect()

  


const app = express()
const port = 3000

//cors
app.use(cors());


//http
app.use(morgan('combined'))

//Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
app.use(express.static(__dirname + '/public'));