const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const connectDB = require('./db');
const { getCollege,addToDB } = require('./collegeController');

connectDB();
// addToDB();
app.use(express.static('./'));

app.use(bodyParser.urlencoded({ extended: false }));


router.route('/').get((req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})

router.route('/result').post(getCollege);


const port = 5000;

app.use('/',router);


app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})
