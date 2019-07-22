const express = require('express')
const app = express();
const swagger    = require('./lib/swagger');
const config     = require('./lib/config')();
var bodyParser = require('body-parser');

app.get('/', (req, res) => {
    res.send('todo app with jwt swagger UI doc => <a href="/docs">/docs</a>');
  });


  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

  
  
const todo = require('./routes/todo');

app.use('/todo', todo);

// init swagger
if (config.environment === 'local' || config.environment === 'dev') {
    swagger(app);
  }
console.log(config.environment)
app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});