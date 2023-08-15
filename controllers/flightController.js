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
module.exports.show=async(req,res)=>{
    let flight;
    try{
        flight=await Flight.findById(req.params.id)
    }catch(err){
        console.log(err)
    }
    if (flight) {
        res.render('Show', { flight })
    } else {
        res.redirect('/flights')
    }
}
module.exports.update=async (req,res)=>{
      try{

       let flights= await Flight.findById(req.params.id)
        flights.destination.push(req.body)
           await flights.save()
        res.redirect(`/flights/${req.params.id}`)
      
    }catch(err){
        console.log(err)
        res.redirect(`/flights/${req.params.id}`)
      
      }
}