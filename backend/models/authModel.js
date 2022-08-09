const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false
    },
   
    role: {
      type: String,
      default: "user"
    },
   
   
  },
  { timestamps: true }
);
module.exports = model("user", userSchema)