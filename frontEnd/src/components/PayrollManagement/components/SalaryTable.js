import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Button from '@mui/material/Button';

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
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-screen-lg mx-auto mt-10">
      <h2 className="mt-10 text-[24px] text-base text-center font-semibold leading-7 text-gray-900">
        Employee Salary Table
      </h2>
      <table id="salary-table" className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Salary
            </th>
            <th scope="col" className="px-6 py-3">
              Confirmation Date
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {result &&
            result.map(
              (employee) =>
                employee.salary && (
                  <tr key={employee._id} className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {employee.firstname + ' ' + employee.lastname}
                    </th>
                    <td className="px-6 py-4">{employee.role}</td>
                    <td className="px-6 py-4">{employee.salary}</td>
                    <td className="px-6 py-4">{employee.confirmationDate ? new Date(employee.confirmationDate).toLocaleString() : 'Not confirmed'}</td>
                    <td className="px-1 py-4 flex justify-center gap-2">
                      <Button>

                      <Link
                       
                        to={'/addsalary/' + employee._id}
                      >
                        Update
                      </Link>
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => confirmDelete(employee.firstname + ' ' + employee.lastname, employee.role, employee._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                )
            )}
        </tbody>
      </table>
      <div className="text-center mt-4">
        <Button
          variant="contained"
          color="primary"
          onClick={handleDownloadPdf}
        >
          Download PDF
        </Button>
      </div>
    </div>
  );
};

export default SalaryTable;
