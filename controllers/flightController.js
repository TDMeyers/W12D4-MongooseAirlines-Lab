const Flight=require("../models/Flight")

module.exports.index=async(req,res)=>{
    let flights;
    try{
        flights=await Flight.find()
    }catch(err){
        console.log("No Flights Found",err)
    }
    res.render("Index",{flights})
}