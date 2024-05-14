import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AddSalaryForm = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    accountnumber: '',
    role: '',
    bonnus: 0,
    othours: 0,
    employmentStatus: '',
  });
  const [popupData, setPopupData] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      const response = await fetch('/api/employee/' + id);
      const json = await response.json();
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...json,
      }));
    };
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const calculateSalary = () => {
    const baseSalary = 20000;
    const bonusAmount = (formData.bonnus / 100) * baseSalary;
    const otAmount = formData.othours * 500;
    let salary = baseSalary + bonusAmount + otAmount;

    const incomeTax = salary > 25000 ? salary * 0.03 : 0;
    const providentFund = salary * 0.02;

    const finalSalary = salary - incomeTax - providentFund;

    setPopupData({
      ...formData,
      incomeTax,
      providentFund,
      finalSalary,
    });
  };

  const handleConfirm = async () => {
    const { finalSalary } = popupData;

    const response = await fetch('/api/employee/salary/' + id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ salary: finalSalary }),
    });
    if (response.ok) {
      console.log('Salary added successfully');
      navigate('/salaries');
    }
  };

  return (
    <>
      <div className="flex justify-end min-h-screen" style={{ backgroundImage: "url('/image_1.jpg')", backgroundSize: 'cover', backgroundPosition: 'left' }}>
        <div className="p-10">
          <form className="max-w-lg mx-auto bg-white shadow-md rounded-md px-10 pt-10 pb-10 mb-10 h-full" onSubmit={(e) => e.preventDefault()}>
            <h2 className="text-2xl font-semibold mb-8 text-center text-indigo-700">Add Employee Salary</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-md font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={`${formData.firstname} ${formData.lastname}`}
                  readOnly
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="role" className="block text-md font-medium text-gray-700">Role</label>
                <input
                  type="text"
                  name="role"
                  id="role"
                  value={formData.role}
                  readOnly
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-md font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  readOnly
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0"
                />
              </div>
              
              
              <div className="sm:col-span-2">
                <label htmlFor="employmentStatus" className="block text-md font-medium text-gray-700">Employment Status</label>
                <select
                  name="employmentStatus"
                  id="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0"
                >
                  <option value="">Select status</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Temporary">Temporary</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <p className="text-gray-600 text-md font-semibold">Basic Salary: Rs 20,000</p>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="bonnus" className="block text-md font-medium text-gray-700">Bonus (%)</label>
                <input
                  type="number"
                  name="bonnus"
                  id="bonnus"
                  value={formData.bonnus}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="othours" className="block text-md font-medium text-gray-700">OT Hours</label>
                <input
                  type="number"
                  name="othours"
                  id="othours"
                  value={formData.othours}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0"
                />
              </div>
            </div>
            <button
              type="button"
              className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={calculateSalary}
            >
              Calculate
            </button>
          </form>
        </div>
      </div>

      {popupData && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75"></div>
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">Salary Details</h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Name: {popupData.firstname} {popupData.lastname}</p>
                    <p className="text-sm text-gray-500">Role: {popupData.role}</p>
                    <p className="text-sm text-gray-500">Email: {popupData.email}</p>
                    <p className="text-sm text-gray-500">Phone: {popupData.phonenumber}</p>
                    <p className="text-sm text-gray-500">Account Number: {popupData.accountnumber}</p>
                    <p className="text-sm text-gray-500">Employment Status: {popupData.employmentStatus}</p>
                    <p className="text-sm text-gray-500">Income Tax Deduction: Rs {popupData.incomeTax}</p>
                    <p className="text-sm text-gray-500">Provident Fund Deduction: Rs {popupData.providentFund}</p>
                    <p className="text-sm text-gray-500">Final Salary: Rs {popupData.finalSalary}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handleConfirm}
              >
                Confirm
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                onClick={() => setPopupData(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddSalaryForm;
