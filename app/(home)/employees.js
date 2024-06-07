import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from 'axios';

const employees = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/employees");
        setEmployees(response.data);
      } catch (error) {
        console.log("error fetching employee data", error);
      }
    };
    fetchEmployeeData();
  }, []);
  console.log(employees);
  return (
    <View>
      <Text>employees</Text>
    </View>
  );
};

export default employees;

const styles = StyleSheet.create({});
