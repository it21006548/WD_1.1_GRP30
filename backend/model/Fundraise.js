const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fundraiseSchema = new Schema({
  ffname: {
    type: String,
    // required: true
  },
  flname: {
    type: String,
    // required: true
  },
  faddress: {
    type: String,
    // require: true
  },
  femail: {
    type: String,
    // require: true
  },
  famount: {
    type: String,
    // required: true
  },
  fmethod: {
    type: String,
    // required: true
  },
  fexpiry: {
    type: String,
    //    required: true
  },
  fcvv: {
    type: String,
    // required: true
  },
  ftype: {
    type: String,
    // required: true
  },
});

module.exports = mongoose.model("Fundraise", fundraiseSchema);
