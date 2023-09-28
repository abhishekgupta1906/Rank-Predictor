const path = require('path');
const express = require('express');
const router = express.Router();

router.route('/result').post((req,res,next)=>{
    console.log('data: ',req.body.name);
    res.send("<h1>"+ req.body.name +"</h1>");
});

module.export = router;