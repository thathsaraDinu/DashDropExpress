import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const EmployeeTable = () => {
  const [result, setResult] = useState();
  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch('/api/employee/');
      const json = await response.json();
      setResult(json);
    };
    fetchEmployees();
  }, [result]);
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-screen-lg mx-auto mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {result &&
              result.map((employee) => (
                <tr key={employee._id} className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {employee.firstname + ' ' + employee.lastname}
                  </th>
                  <td className="px-6 py-4">{employee.email}</td>
                  <td className="px-6 py-4">{employee.role}</td>
                  <td className="px-1 py-4">
                    <Link
                      to={'/addsalary/' + employee._id}
                      className="block font-medium text-blue-600 hover:underline cursor-pointer text-center"
                    >
                      Add Salary
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        
      </div>
    </>
  );
};

export default EmployeeTable;
