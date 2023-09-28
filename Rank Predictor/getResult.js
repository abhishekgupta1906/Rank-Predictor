const asyncHandler = require('express-async-handler');
const getResult = asyncHandler(async(req,res)=>{
    const { name, mainsscore, advscore, yourcategory } = req.body;

    res.json({
        name,
        mainsscore,
        advscore,
        yourcategory,
    })
});

module.exports = { getResult }