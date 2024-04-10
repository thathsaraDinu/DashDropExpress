import * as React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

import MainMenu from "../../MainMenu";
import { jwtDecode } from "jwt-decode";
import FooterMain from "../../FooterMain";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
 

  ///////////get users to show
  useEffect(() => {
    Axios.get("http://localhost:3001/api/users")
      .then((response) => {
        setUsers(response.data?.response || []);
      })
      .catch((error) => {
        console.error("Axios Error : ", error);
      });
  }, []);

  /////////////import this to append the login section
  const [usertypetoken, setUserType] = useState("");
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token); // Corrected function call

      setUserType(decodedToken.usertypetoken);
    }
  }, [token]);
  ////////////////////////////////////////////////////

  //////delete function
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/api/deleteuser/" + id)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  ////////confirm alert for deletion
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
      {usertypetoken === "Admin" ? (
        <div>
          <MainMenu />
          <div>
            <div
              style={{
                position: "relative",
                backgroundImage: "url('/pexels-luo-chris-3171592.jpg')",
                backgroundSize: "cover",
              }}
              className=" backgroundimage"
            >
              <br></br>
              <div
                className="z-10 w-full"
                style={{
                  position: "relative",

                  paddingLeft: "30px",
                  paddingRight: "30px",
                  transition: "margin-left 0.5s",
                }}
              >
                <h1
                  className="text-3xl text-primary mb-5"
                  style={{
                    textAlign: "center",
                    marginTop: "80px",
                    fontFamily: "Jost, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  Users
                </h1>

                <div className="flex justify-end">
                  <div className="w-80 float-right">
                    <label
                      htmlFor="default-search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                        placeholder="Search Users"
                        onChange={(e) => setSearch(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "50px",
                    tableLayout: "fixed",
                    width: "",
                  }}
                  className="z-10 overflow-x-auto"
                >
                  <table className="  mx-5 w-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs  uppercase  bg-gray-700 text-gray-200">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3"
                          style={{ width: "250px" }}
                        >
                          Full Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3"
                          style={{ width: "200px" }}
                        >
                          Phone Number
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3"
                          style={{ width: "250px" }}
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3"
                          style={{ width: "300px" }}
                        >
                          Address
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3"
                          style={{ width: "150px" }}
                        >
                          UserType
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3"
                          style={{ width: "250px" }}
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users
                        .filter((user) => {
                          return search.toLowerCase() === ""
                            ? user
                            : user.fullName.toLowerCase().includes(search);
                        })
                        .map((user) => (
                          <tr
                            className="text-secondary  odd:bg-gray-50  even:bg-gray-200  border-b "
                            key={user._id}
                          >
                            <td className="px-6 py-4">{user.fullName}</td>
                            <td className="px-6 py-4">{user.phoneNumber}</td>
                            <td className="px-6 py-4">{user.email}</td>
                            <td className="px-6 py-4">{user.address}</td>
                            <td className="px-6 py-4">{user.usertype}</td>

                            <td
                              style={{
                                display: "flex",
                                marginTop: "7px",
                                marginBottom: "0px",
                              }}
                            >
                              <Link
                                to={`/TheUpdateForm/${user._id}?usertype=${user.usertype}`}
                                style={{ marginLeft: "5px" }}
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                              >
                                Update
                              </Link>
                              <button
                                onClick={() => {
                                  handleDeleteConfirmation(user._id);
                                }}
                                style={{ marginLeft: "5px" }}
                                type="button"
                                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <br></br>
                <div className="flex flex-col items-center">
                  <Link
                    variant="contained"
                    color="success"
                    type="button"
                    to={"/usertypeselect"}
                    className=" z-20 focus:outline-none text-white bg-green-700 hover:bg-green-800 ring-2 ring-white focus:ring-4 focus:ring-green-300 text-xl rounded-lg text-sm px-5 py-2.5 me-2 mb-10 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-900"
                  >
                    Add User
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <FooterMain></FooterMain>
        </div>
      ) : (
        <div>You need to be an admin to access this page</div>
      )}
    </div>
  );
};

export default Users;
