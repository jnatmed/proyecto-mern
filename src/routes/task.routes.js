const express = require('express');
const router = express.Router();
// const router = require("express").Router;

router.get('/',(res, req)=>{
    res.send('Hellow World');
});

module.export = router;