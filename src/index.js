const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database')

const app = express();

// Settings 
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev')); 
app.use(express.json());

// Routes    
const task_routes = require('./routes/task.routes.js');
app.use('/api/tasks', task_routes);

// Statics files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server 
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);

});

