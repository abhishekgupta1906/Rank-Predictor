const asyncHandler = require('express-async-handler');

const College = require('./collegeModel');

const getCollege = asyncHandler(async(req,res)=>{

    const { name, mainsrank, advrank, yourcategory } = req.body;

    if(!name || !mainsrank || !advrank || !yourcategory){
        console.log("Please fill all the field");
        return res.sendStatus(400);
    }

    var college = await College.find({ rank: { $gt: mainsrank } });
    console.log(college);
        res.json(college);
    });

const addToDB = asyncHandler(async(req,res)=>{
    const college = await College.create({
        collegeName: "NIT Raipur",
        branch: "Computer Science",
        category: "General",
        rank: 1000,
    });
    // console.log(college);
    // if(college){
    //     res.json({
    //         collegeName: college.collegeName,
    //         branch: college.branch,
    //         category: college.category,
    //         rank: college.rank,
    //     });
    // }else{
    //     res.status(401);
    //     throw new Error('Failed to create college');
    // }
});
module.exports = { getCollege, addToDB }

