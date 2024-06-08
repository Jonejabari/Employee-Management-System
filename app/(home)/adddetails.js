import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";

const adddetails = () => {
  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [dob, setDob] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddreess] = useState("");
  const [designation, setDesignation] = useState("");
  const handleRegister = () => {
    const employeeData = {
      employeeName: name,
      employeeId: employeeId,
      designation: designation,
      phoneNumber: mobileNo,
      dateOfbirth: dob,
      joiningDate: joiningDate,
      aciveEmployee: true,
      salary: salary,
      address: address,
    };

    axios
      .post("http://localhost:5000/addEmployee", employeeData)
      .then((response) => {
        Alert.alert("Registration Successfully", "You have registered");
        setName("");
        setEmployeeId("");
        setDob("");
        setDesignation("");
        setAddreess("");
        setMobileNo("");
        setSalary("");
        setJoiningDate("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration Fail",
          "An error occured during registration"
        );
        console.log("Registration failed", error);
      });
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Add New Employee
        </Text>

        <TextInput
          style={{
            padding: 10,
            borderColor: "#DDDDDD",
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
          }}
          placeholder="Lesotho"
          placeholderTextColor={"black"}
        />
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Full Name (first and last name)
          </Text>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            style={{
              padding: 10,
              borderColor: "#DDDDDD",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Jone Jeremia Jabari"
            placeholderTextColor={"black"}
          />
        </View>

        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Employee Id</Text>
          <TextInput
            value={employeeId}
            onChangeText={(text) => setEmployeeId(text)}
            style={{
              padding: 10,
              borderColor: "#DDDDDD",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Employee Id"
            placeholderTextColor={"black"}
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Designation</Text>
          <TextInput
            value={designation}
            onChangeText={(text) => setDesignation(text)}
            style={{
              padding: 10,
              borderColor: "#DDDDDD",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Designation"
            placeholderTextColor={"black"}
          />
        </View>

        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Mobile Number
          </Text>
          <TextInput
            value={mobileNo}
            onChangeText={(text) => setMobileNo(text)}
            style={{
              padding: 10,
              borderColor: "#DDDDDD",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Mobile No"
            placeholderTextColor={"black"}
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Date of Birth
          </Text>
          <TextInput
            value={dob}
            onChangeText={(text) => setDob(text)}
            style={{
              padding: 10,
              borderColor: "#DDDDDD",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter Date Of Birth"
            placeholderTextColor={"black"}
          />
        </View>

        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Joining Date</Text>
          <TextInput
            value={joiningDate}
            onChangeText={(text) => setJoiningDate(text)}
            style={{
              padding: 10,
              borderColor: "#DDDDDD",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Joining Date"
            placeholderTextColor={"black"}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text>Active Employee</Text>
          <Text>true</Text>
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Salary</Text>
          <TextInput
            value={salary}
            onChangeText={(text) => setSalary(text)}
            style={{
              padding: 10,
              borderColor: "#DDDDDD",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter Salary"
            placeholderTextColor={"black"}
          />
        </View>

        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Address</Text>
          <TextInput
            value={address}
            onChangeText={(text) => setAddreess(text)}
            style={{
              padding: 10,
              borderColor: "#DDDDDD",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter Address"
            placeholderTextColor={"black"}
          />
        </View>

        <Pressable
        onPress={handleRegister}
          style={{
            backgroundColor: "#ABCABA",
            padding: 10,
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>
            Add Employee
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default adddetails;

const styles = StyleSheet.create({});
