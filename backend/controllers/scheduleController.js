const ScheduleModel = require("../models/scheduleModel");
const AuthModel = require("../models/authModel");

// add
module.exports.add_schedule = async (req, res) => {
  const {
    creatorEmail,
    name,
    age,
    division,
    oldAddress,
    newAddress,
    sex,
    birthDate,
    religious,
    maritalStatus,
    height,
    weight,
    bloodGroup,
    familyMember,
    motherIsDead,
    fatherIsDead,
    brother,
    sister,
    familyEconomicStatus,
    educationMethod,
    middleEducation,
    higherEducation,
    profession,
    salary,
  } = req.body;

  try {
    await ScheduleModel.create({
      creatorEmail,
      name,
      age,
      division,
      oldAddress,
      newAddress,
      sex,
      birthDate,
      religious,
      maritalStatus,
      height,
      weight,
      bloodGroup,
      familyMember,
      motherIsDead,
      fatherIsDead,
      brother,
      sister,
      familyEconomicStatus,
      educationMethod,
      middleEducation,
      higherEducation,
      profession,
      salary,
    });
    res.status(201).json({ successMessage: "Bio Data added success" });
  } catch (error) {
    res.status(500).json({ errorMessage: { error: "Internal server error" } });
  }
};

//   get all schedule

module.exports.get_all_schedules = async (req, res) => {
  const { page } = req.query;
  const perPage = 8;
  const skipPage = parseInt(page - 1) * perPage;

  try {
    const scheduleCounts = await ScheduleModel.find({}).countDocuments();
    const getSchedule = await ScheduleModel.find({})
      .skip(skipPage)
      .limit(perPage)
      .sort({ createdAt: -1 });
    res.status(200).json({
      allSchedule: getSchedule,
      perPage,
      scheduleCounts,
    });
  } catch (error) {
    res.status(500).json({
      errorMessage: {
        error: "There was some issue",
      },
    });
  }
};
// get single

module.exports.get_single_schedule = async (req, res) => {
  const { id } = req.params;

  const getSingleSchedule = await ScheduleModel.findOne({ _id: id });
  try {
    res.status(200).json({
      getSingleSchedule,
    });
  } catch (error) {
    res.status(500).json({
      errorMessage: {
        error: "There was some issue",
      },
    });
  }
};
// get single schedule by user

module.exports.get_single_schedule_by_user = async (req, res) => {
  const { email } = req.params;

  const getSingleScheduleByUser = await ScheduleModel.find({
    creatorEmail: email,
  })
    .sort({ createdAt: -1 })
    .limit(1);

  try {
    res.status(200).json({
      getSingleScheduleByUser,
    });
  } catch (error) {
    res.status(500).json({
      errorMessage: {
        error: "There was some issue",
      },
    });
  }
};
// delete

module.exports.delete_schedule = async (req, res) => {
  const { id } = req.params;
  try {
    await ScheduleModel.findByIdAndDelete(id);
    res.status(200).json({ successMessage: "bio data delete success" });
  } catch (error) {
    res.status(500).json({
      errorMessage: {
        error: "There was some issue",
      },
    });
  }
};


// edit
module.exports.edit_schedule = async (req, res) => {
  const { id } = req.params;

  try {
    const getSingleSchedule = await ScheduleModel.findOne({ _id: id });
    res.status(200).json({ editSchedule: getSingleSchedule });
  } catch (error) {
    res.status(500).json({ errorMessage: { error: "Internal server error" } });
  }
};



// update 

module.exports.update_schedule = async (req, res) => {
  const { id } = req.params;

  try {
     await ScheduleModel.findByIdAndUpdate(id,{
      creatorEmail,
      name,
      age,
      division,
      oldAddress,
      newAddress,
      sex,
      birthDate,
      religious,
      maritalStatus,
      height,
      weight,
      bloodGroup,
      familyMember,
      motherIsDead,
      fatherIsDead,
      brother,
      sister,
      familyEconomicStatus,
      educationMethod,
      middleEducation,
      higherEducation,
      profession,
      salary,
    });
    res.status(200).json({
      successMessage: "Category update successful" 
     });
  } catch (error) {
    res.status(500).json({ errorMessage: { error: "Internal server error" } });
  }
};