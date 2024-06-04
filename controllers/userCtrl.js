const userModel = require("../models/userModels");
const bcrypt = require('bcryptjs');

const registerController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).send({ success: false, message: "User already exists" });
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;

    const newUser = new userModel(req.body);
    await newUser.save();

    res.status(201).send({ success: true, message: "User Registered Successfully" });

  } catch (error) {
    console.error(error); // Log the complete error for debugging
    res.status(500).send({ success: false, message: "Registration Failed" });
  }
}

const loginController = () => {} // Implement login logic here

module.exports = { loginController, registerController };
