const { Schema, model } = require("mongoose");

const scheduleSchema = new Schema(
 
  {
    creatorEmail: {
      type: String,
      required:true
     
    },
    name: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },

    division: {
      type: String,
      required: true,
    },

    oldAddress: {
      type: String,
      required: true,
    },

    newAddress: {
      type: String,
      required: true,
    },

    sex: {
      type: String,
      required: true,
    },

    birthDate: {
      type: Date,
      required: true,
      default:Date.now()
    },
    religious: {
      type: String,
      required: true,
    },

    maritalStatus: {
      type: String,
      required: true,
    },

    height: {
      type: Number,
      required: true,
    },

    weight: {
      type: Number,
      required: true,
    },

    bloodGroup: {
      type: String,
      required: true,
    },
    familyMember: {
      type: Number,
      required: true,
    },
    motherIsDead: {
      type: String,
      required: true,
    },

    fatherIsDead: {
      type: String,
      required: true,
    },
    brother: {
      type:Number,
      required: true,
    },
    sister: {
      type: Number,
      required: true,
    },

    familyEconomicStatus: {
      type: String,
      required: true,
    },

    educationMethod: {
      type: String,
      required: true,
    },
    middleEducation: {
      type: String,
      required: true,
    },

    higherEducation: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("schedule", scheduleSchema);
