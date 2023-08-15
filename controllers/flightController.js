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
module.exports.create=async(req,res)=>{
    
    try{
     let flight=await Flight.create(req.body)
    }catch(err){
 console.log(err)
    }
    res.redirect("/flights")
}
module.exports.New = (req, res) => {
    res.render('New')
}