const Fundraise = require("../model/Fundraise");

//get all fundraises
const getAllFundraise = async (req, res, next) => {
  let fundraise;
  try {
    fundraise = await Fundraise.find();
  } catch (err) {
    console.log(err);
  }

  if (!fundraise) {
    return res.status(404).json({ message: "Nothing found" });
  }
  return res.status(200).json(fundraise);
};

//add fundraise
const addFundraise = async (req, res, next) => {
  const { ffname, flname, faddress, femail, famount, fmethod, fexpiry, fcvv, ftype } =
    req.body;
  let fundraise;
  try {
    fundraise = new Fundraise({
        ffname, 
        flname, 
        faddress, 
        femail, 
        famount, 
        fmethod, 
        fexpiry, 
        fcvv, 
        ftype
    });
    await fundraise.save();
  } catch (err) {
    console.log(err);
  }
  if (!fundraise) {
    return res.status(500).json({ message: "Unable to add" });
  }
  return res.status(201).json(fundraise);
};

//get fundraises by id
const getById = async (req, res, next) => {
  const id = req.params.id;
  let fundraise;
  try {
    fundraise = await Fundraise.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!fundraise) {
    return res.status(404).json({ message: "No fundraise found" });
  }
  return res.status(200).json(fundraise);
};

//update fundraises
const updateFundraise = async (req, res, next) => {
  const id = req.params.id;
  const { ffname, flname, faddress, femail, famount, fmethod, fexpiry, fcvv, ftype } = req.body;
  let fundraise;
  try {
    fundraise = await Fundraise.findByIdAndUpdate(id, {
        ffname, 
        flname, 
        faddress, 
        femail, 
        famount, 
        fmethod, 
        fexpiry, 
        fcvv, 
        ftype
    });
    fundraise = await fundraise.save();
  } catch (err) {
    console.log(err);
  }
  if (!fundraise) {
    return res.status(404).json({ message: "Unable to Update by id" });
  }
  return res.status(200).json({ fundraise });
};

//delete fundraises
const deleteFundraise = async (req, res, next) => {
  const id = req.params.id;
  let fundraise;
  try {
    fundraise = await Fundraise.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!fundraise) {
    return res.status(404).json({ message: "Unable to Delete by id" });
  }
  return res.status(200).json({ message: "Fundraise Successfully Deleted" });
};

exports.addFundraise = addFundraise;
exports.getAllFundraise = getAllFundraise;
exports.getById = getById;
exports.updateFundraise = updateFundraise;
exports.deleteFundraise = deleteFundraise;
