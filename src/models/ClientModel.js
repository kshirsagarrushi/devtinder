const mongoose=require('mongoose');
const {Schema}=mongoose;

const clientSchema=new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:/.+\@.+\..+/,//regex for email
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    target:{
        type:String,
        required:true
    },
    preferableActivity:{
        type:String,
        required:true,
    }
},{timestamps:true});
const Client=mongoose.model('Client',clientSchema,'Clients');
module.exports=Client;