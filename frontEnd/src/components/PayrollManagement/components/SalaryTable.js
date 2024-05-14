import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Button from '@mui/material/Button';
import Footer from '/Users/navin/Desktop/Naveen copy/frontend/src/Footer.js'; // Import the Footer component
import './styles.css'; // Import the CSS file

const SalaryTable = () => {
  const [result, setResult] = useState();

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch('/api/employee/');
      const json = await response.json();
      setResult(json);
    };
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    const response = await fetch('/api/employee/salary/' + id, {
      method: 'DELETE',
    });
    if (response.ok) {
      console.log('Salary deleted successfully');
      setResult(result.filter(employee => employee._id !== id));
    }
  };

  const confirmDelete = (employeeName, employeeRole, id) => {
    if (window.confirm(`Are you sure you want to delete salary for ${employeeName}, ${employeeRole}?`)) {
      handleDelete(id);
    }
  };

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: '#salary-table' });
    doc.save('Employee_Salary_Table.pdf');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-screen-lg mx-auto mt-10 bg-white p-8">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">
          Employee Salary Table
        </h2>
        <table id="salary-table" className="w-full text-sm text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-4 py-3">No.</th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Role</th>
              <th scope="col" className="px-6 py-3">Salary</th>
              <th scope="col" className="px-6 py-3">Confirmation Date</th>
              <th scope="col" className="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {result &&
              result.map(
                (employee, index) =>
                  employee.salary && (
                    <tr key={employee._id} className="bg-gray-100 border-b">
                      <td className="px-4 py-4">{index + 1}</td>
                      <td className="px-6 py-4 font-medium text-gray-900">{employee.firstname} {employee.lastname}</td>
                      <td className="px-6 py-4">{employee.role}</td>
                      <td className="px-6 py-4">{employee.salary}</td>
                      <td className="px-6 py-4">{employee.confirmationDate ? new Date(employee.confirmationDate).toLocaleString() : 'Not confirmed'}</td>
                      <td className="px-6 py-4 flex justify-center gap-4">
                        <Button component={Link} to={`/addsalary/${employee._id}`} variant="contained" color="primary">Update</Button>
                        <Button variant="contained" color="error" onClick={() => confirmDelete(employee.firstname, employee.lastname, employee._id)}>Delete</Button>
                      </td>
                    </tr>
                  )
              )}
          </tbody>
        </table>
        <div className="text-center mt-4">
          <Button variant="contained" color="primary" onClick={handleDownloadPdf}>Download PDF</Button>
        </div>
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default SalaryTable;
