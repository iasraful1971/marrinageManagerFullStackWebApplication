const UserModel = require("../models/authModel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//  


//register
module.exports.register = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const oldUser = await UserModel.findOne({ email });
    if (oldUser) {
      return res.status(400).json({
        message: "user already existed",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 12);


    const result = await UserModel.create({
      email,
      password: hashedPassword,
      name: name,
    
     

    });
    const token = jwt.sign(
      {
        
            id: result._id,
            email: result.email,
            name: result.name,
            role: result.role,
            createdAt: result.createdAt,
       },
      process.env.SECRET,
      {
        expiresIn: process.env.TOKEN_EXP,
      }
    );
    const option = {
      expires : new Date(Date.now() +  3 *24*60*60*1000)
     }
    res.status(201).cookie('auth_token' , token , option)
    res.status(200).json({ 
      successMessage: 'Your register have been success',
      token 
    });
  } catch (error) {
    res.status(500).json({
      message: "server error has occurred",
    });
    console.log(error);
  }
};

//handle login

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const getUser = await UserModel.findOne({ email }).select("+password");
    if (getUser) {
      const matchPassword = await bcrypt.compare(password, getUser.password);
      if (matchPassword) {
        const token = jwt.sign(
          {
            id: getUser._id,
            email: getUser.email,
            name: getUser.name,
            role: getUser.role,
            createdAt: getUser.createdAt,
          },
          process.env.SECRET,
          {
            expiresIn: "7d",
          }
        );
        const option = {
          expires : new Date(Date.now() +  3 *24*60*60*1000)
         }
        res.status(201).cookie('auth_token' , token , option)
        res.status(200).json({
          successMessage: 'Your login have been success',
          token,
        });
      } else {
        return res
          .status(500)
          .json({ errorMessage: { error: "password does not match" } });
      }
    } else {
      return res
        .status(500)
        .json({ errorMessage: { error: "Email does not exist" } });
    }
  } catch (error) {
    res.status(500).json({
      errorMessage: { error: "Internal Server Error" },
    });
    console.log(error);
  }
};
