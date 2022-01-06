const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send('Hola mundo.!');
});

/**
 * ?dio error, no exportaba porque 
 * ?estaba escrito "export" en ves de "exports"..inedito
 */
module.exports = router;