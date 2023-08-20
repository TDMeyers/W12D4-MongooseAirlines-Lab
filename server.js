const express=require("express")
const app=express()

require('dotenv').config()
const mongoConfig = require('./config')
mongoConfig()
const PORT=8080
const jsxEngine = require('jsx-view-engine')
const flightsRoutes=require("./routes/flightsRoutes")
const methodOverride = require('method-override')
app.use(methodOverride('_method'))
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())
app.use(express.urlencoded({ extended: true }))

app.use("/flights",flightsRoutes)
app.get('/',(req,res)=>{
    res.redirect("/flights")
})
//styling
app.use(express.static("public"));



app.listen(PORT,()=>console.log('Listening on port: ' + PORT))