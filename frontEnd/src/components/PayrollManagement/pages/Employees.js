import React from 'react';
import AddEmployeeForm from '../components/AddEmployeeForm';
import EmployeeTable from '../components/EmployeeTable';
import { Paper } from '@mui/material'; // Import Paper component from Material-UI

const Employees = () => {
  return (
    <Paper 
      elevation={0} // Remove the shadow
      sx={{
        backgroundImage: "url('/image.jpg')",
        backgroundSize: 'cover',
        height: '200vh', // Set the height to cover the entire viewport
        flexDirection: 'column',
      }}
    >
      <AddEmployeeForm />
      <EmployeeTable />
    </Paper>
  );
};

export default Employees;
