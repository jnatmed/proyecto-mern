const express = require('express');
const morgan = require('morgan');
const app = express();
const router = express.Router();

// Settings 
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev')); 
app.use(express.json());

// Routes
app.use(require('./routes/task.routes'));
// router.get('/hola',(res, req)=>{
//     res.send('Hellow World');
// });

// Statics files

// Starting the server 
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);

});

