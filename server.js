const express=require("express")
const app=express()

require('dotenv').config()
const mongoConfig = require('./config')
mongoConfig()
const PORT=8000
const jsxEngine = require('jsx-view-engine')
const flightsRoutes=require("./routes/flightsRoutes")
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())
app.use(express.urlencoded({ extended: true }))

app.use("/flights",flightsRoutes)
app.get('/',(req,res)=>{
    res.send("hello")
})




app.listen(PORT,()=>console.log('Listening on port: ' + PORT))