const userModel = require("../models/userModels");
const bcrypt = require('bcryptjs');

const registerController = async (req,res) => {
    try{
        const existingUser = await userModel.findOne({email:req.body.email});
        if(existingUser) return res.status(200).send({success:true,message:"User already exist"});
        const password = req.body.password;
        const salt = bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hash(password,salt);
        req.body.password = hashedPassword;
        const newUser = new userModel(req.body);
        await newUser.save();
        return res.status(200).send({success:true,message:"User Registered Successfully"});

    }catch(error){
        console.log(error);
        return res.status(500).send({success:false,message:`Register Controller ${error.message}`});
    }
}
const loginController = () => {}

module.exports = {loginController,registerController};