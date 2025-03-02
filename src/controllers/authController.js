const Client=require('../models/ClientModel');
exports.signup=async(req, res)=>{
    const {firstName,lastName,email,password,target,preferableActivity}=req.body;
    try{
        //check is the user already exist
        const existingClient=await Client.findOne({email});
        if(existingClient){
            return res.status(400).send("Client already exist");
        }
        const newClient=new Client({firstName,lastName,email,password,target,preferableActivity});
        console.log(newClient);
        await newClient.save();
        res.status(201).send("Client created successfully");
    }catch(err){
        res.status(500).send("Internal server error");
    }
}