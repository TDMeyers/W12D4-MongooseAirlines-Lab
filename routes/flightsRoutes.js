const express=require("express")
const router=express.Router()

const flightController=require("../controllers/flightController")
router.get("/",flightController.index)
router.post("/",flightController.create)
router.get("/New",flightController.New)
module.exports=router