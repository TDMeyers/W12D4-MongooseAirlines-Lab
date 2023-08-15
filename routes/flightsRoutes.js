const express=require("express")
const router=express.Router()

const flightController=require("../controllers/flightController")
router.get("/",flightController.index)
router.post("/",flightController.create)
router.get("/New",flightController.New)
router.get("/:id",flightController.show)
router.put('/:id', flightController.update)
module.exports=router