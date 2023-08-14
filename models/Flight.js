const mongoose=require("mongoose")
const Schema=mongoose.Schema

const flightSchema = new Schema({
    airline:{
        type:String,
        enum:["american","southwest","united"],
        required:true
    },
    flightNo:{
        type:Number,
        min:10,
        max:9999,
        required:true
    },
    departs:{
        type:Date,
        default:()=>{
            const oneYearFromNow=new Date()
            oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
              return oneYearFromNow;
        }
    }
})
const Flight = mongoose.model("flights", flightSchema);
module.exports= Flight