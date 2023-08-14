const express=require("express")
const router=express.Router()

const flightController=require("../controllers/flightController")
router.get("/",flightController.index)

module.exports=router