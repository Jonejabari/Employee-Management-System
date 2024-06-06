const mongoose = require("mongoose");

const attandanceSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
  },
  employeeName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const Attandance = mongoose.model("Attandance", attandanceSchema);

module.exports = Attandance;
