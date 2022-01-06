const express = require('express');
const morgan = require('morgan');
const app = express();
var router = express.Router();

// Settings 
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev')); 
app.use(express.json());

// Routes    
const task_routes = require('./routes/task.routes.js');
app.use('/task', task_routes);

// Statics files

// Starting the server 
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);

});

