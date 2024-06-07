const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Employee = require("./models/employeeModel");
const Attandance = require("./models/attendanceModel");

const app = express();
const port = 5000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect("mongodb+srv://jone:jone@cluster0.gsiqie4.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });

app.listen(port, () => {
  console.log("Server is running on port 5000");
});

//endpoint to register employee
app.post("/addEmployee", async (req, res) => {
  try {
    const {
      employeeId,
      employeeName,
      designation,
      joiningDate,
      dateOfBirth,
      salary,
      activeEmployee,
      phoneNumber,
      address,
    } = req.body;

    //create new employee
    const newEmployee = new Employee({
      employeeId,
      employeeName,
      designation,
      joiningDate,
      dateOfBirth,
      salary,
      activeEmployee,
      phoneNumber,
      address,
    });

    await newEmployee.save();

    res
      .status(201)
      .json({ mesaage: "Employee saved successfully", employee: newEmployee });
  } catch (error) {
    console.log("Error creating employeee", error);
    res.status(500).json({ message: "failed to create employee" });
  }
});

//endpoint to fetch all employees

app.get("/employees", async (req, res) => {
  try {
    const employes = await Employee.find();
    res.status(200).json(employes);
  } catch (error) {
    res.status(500).json({ message: "failed to get all employees" });
  }
});
