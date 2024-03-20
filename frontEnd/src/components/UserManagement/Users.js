import * as React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

import MainMenu from "../../MainMenu";

const Users = () => {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/users")
      .then((response) => {
        setUsers(response.data?.response || []);
      })
      .catch((error) => {
        console.error("Axios Error : ", error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/api/deleteuser/" + id)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  function handleDeleteConfirmation(userId) {
    const isConfirmed = window.confirm("Are you sure you want to delete?");

    if (isConfirmed) {
      handleDelete(userId);
      // Additional logic for deletion confirmation
    } else {
      // User chose not to delete, handle accordingly
    }
  }

  return (
    <div>
      <MainMenu />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "30px",
          paddingRight: "30px",
          transition: "margin-left 0.5s",
        }}
      >
        <img
          style={{
            position: "absolute",
            left: "0",
            top: "0",
            width: "100%",
            zIndex: "0",
          }}
          src="/pexels-pavel-danilyuk-6407556.jpg"
          class="brightness-50 object-cover h-full"
          alt=""
        ></img>
        <br></br>
        <h1
          className="text-3xl"
          style={{ textAlign: "center", marginTop: "80px" }}
        >
          Customers{" "}
        </h1>
        <table
          class="z-10 overflow-x-auto mx-5 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
          style={{ marginTop: "50px" }}
        >
          <thead class="text-xs  uppercase  bg-gray-700 text-gray-200">
            <tr>
              <th scope="col" class="px-6 py-3">
                Full Name
              </th>
              <th scope="col" class="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Address
              </th>

              <th scope="col" class="px-6 py-3">
                UserType
              </th>

              <th scope="col" class="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {user.map((users) => (
              <tr
                class="text-secondary dark:text-primary odd:bg-gray-50 odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700"
                key={users._id}
              >
                <td class="px-6 py-4">{users.fullName}</td>
                <td class="px-6 py-4">{users.phoneNumber}</td>
                <td class="px-6 py-4">{users.email}</td>
                <td class="px-6 py-4">{users.address}</td>

                <td class="px-6 py-4">{users.usertype}</td>

                <td
                  style={{
                    display: "flex",
                    marginTop: "7px",
                    marginBottom: "0px",
                  }}
                >
                  <Link
                    to={`/TheUpdateForm/${users._id}`}
                    style={{ marginLeft: "5px" }}
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => {
                      handleDeleteConfirmation(users._id);
                    }}
                    style={{ marginLeft: "5px" }}
                    type="button"
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br></br>

        <Link
          variant="contained"
          color="success"
          type="button"
          to={"/TheForm"}
          class="z-20 focus:outline-none text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:ring-green-300 text-base rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-900"
        >
          Add
        </Link>
      </div>
    </div>
  );
};

export default Users;
