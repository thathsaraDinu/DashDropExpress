import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AddSalaryForm = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    role: '',
    bonnus: 0,
    othours: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
  }, [id, formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let salary =
      parseFloat(formData.bonnus / 100) * 20000 +
      parseInt(formData.othours) * 500 +
      20000;

    const response = await fetch('/api/employee/salary/' + id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ salary }),
    });
    if (response.ok) {
      console.log('Salary added successfully');
      navigate('/salaries');
    }
  };

  return (
    <>
      <div className="flex justify-end min-h-screen" style={{ backgroundImage: "url('/image_1.jpg')", backgroundSize: 'cover' , backgroundPosition: 'left'}}>
      <div className="w-1/2 bg-gray-200">
        <div className="p-10 ">
          <form className="max-w-lg mx-auto bg-white shadow-md rounded-md px-10 pt-10 pb-10 mb-10 h-full" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold mb-8 text-center text-indigo-700">Add Employee Salary</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-md font-medium text-gray-700">Full Name</label>
                <input type="text" name="name" id="name" autoComplete="name" value={formData.firstname + ' ' + formData.lastname} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="role" className="block text-md font-medium text-gray-700">Role</label>
                <input type="text" name="role" id="role" autoComplete="role" value={formData.role} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0" />
              </div>
              <div className="max-w-screen-md mx-auto ">
                <p className="text-gray-600 text-md font-semibold ">Basic Salary: Rs 20,000</p>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="bonnus" className="block text-md font-medium text-gray-700">Bonus (%)</label>
                <input type="number" name="bonnus" id="bonnus" autoComplete="bonnus" value={formData.bonnus} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="othours" className="block text-md font-medium text-gray-700">OT Hours</label>
                <input type="number" name="othours" id="othours" autoComplete="othours" value={formData.othours} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0" />
              </div>
            </div>
            <button type="submit" className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default AddSalaryForm;
