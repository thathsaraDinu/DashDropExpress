import React, { useState } from 'react';

const AddEmployeeForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Handle successful response here
        console.log('Employee added successfully');
      } else {
        // Handle error response here
        console.error('Failed to add employee');
      }
    } catch (error) {
      // Handle network error here
      console.error('Error:', error);
    }
  };

  return (
    <>
      <form className="max-w-screen-md mx-auto" onSubmit={handleSubmit}>
        <h2 className="pt-10 text-[34px] text-base text-center font-semibold leading-7 text-gray-900">
          Add Employee
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="firstname"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="firstname"
                id="firstname"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0"
                value={formData.firstname}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="lastname"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="lastname"
                id="lastname"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0"
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0 max-w-[372px]"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="role"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Role
            </label>
            <div className="mt-2">
              <input
                id="role"
                name="role"
                type="text"
                autoComplete="role"
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0 max-w-[372px]"
                value={formData.role}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </form>
    </>
  );
};

export default AddEmployeeForm;
