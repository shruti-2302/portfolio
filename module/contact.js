const mongoose = require("mongoose");

const {Schema}= mongoose;

let user = new Schema({
    _id:{
        type:String
    },
    name:{
        type: String
    },
    number:{
        type:Number
    },
    email:{
        type:String,
    },
    description:{
        type: String
    }
    
},
{
    collection: "contact"
});
module.exports= mongoose.model("contact",user);