import React, { useEffect, useState } from "react";
import "./AppMain.css";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function MainMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  ///////function for toggle the dropdown menu item
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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

  //////logout function
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem("token");
      window.location.href = "/loginuser";
    }
  };

  return (
    <div className="z-1000">
      {token && usertypetoken === "Admin" ? (
        <nav className="w-full z-20 bg-primary opacity-80 opacity menumain px-4 py-2 text-primary">
          <img
            src="/dashdrop-express-high-resolution-logo-transparent.png"
            style={{ width: "200px", fontFamily: "Georgia, serif" }}
            alt="logo"
            className="text-2xl "
          ></img>
          <ul className="menuetc ">
            <li>
              <Link
                to="/"
                className="transition-all duration-500 ease-in-out font-sans flex md:inline-flex p-3 pl-5 pr-5 items-center hover:bg-color4 "
              >
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Users"
                className="transition-all duration-500 ease-in-out flex md:inline-flex p-3 pl-5 pr-5 items-center hover:bg-ternary"
              >
                <span>Users</span>
              </Link>
            </li>
            <li className="relative parent">
              <Link
                to="!#"
                className="transition-all duration-500 ease-in-out flex justify-between md:inline-flex p-3 pl-5 pr-5  items-center hover:bg-ternary"
              >
                <span>Packages</span>
              </Link>
            </li>

            <li>
              <Link
                to="/userdelivery"
                className="transition-all duration-500 ease-in-out flex md:inline-flex p-3 pl-5 pr-5 items-center hover:bg-ternary"
              >
                <span>Deliveries</span>
              </Link>
            </li>

            <li>
              <button
                id="dropdownDefaultButton"
                onClick={toggleDropdown}
                datadropdowntoggle="dropdown"
                className="transition-all duration-500 ease-in-out flex md:inline-flex p-3 pl-5 pr-5 items-center hover:bg-ternary"
                type="button"
              >
                More Options{" "}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdown"
                className={`z-10 ${
                  isDropdownOpen ? "" : "hidden"
                } absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <Link
                      to="!#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Vehicles
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="!#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Feedbacks
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Help Desk
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      onClick={handleLogout}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      ) : token && usertypetoken === "Customer" ? (
        <nav className="w-full z-20 bg-primary opacity-80 opacity menumain px-4 py-2 text-primary">
          <img
            src="dashdrop-express-high-resolution-logo-transparent.png"
            style={{ width: "200px", fontFamily: "Georgia, serif" }}
            alt="logo"
            className="text-2xl "
          ></img>
          <ul className="menuetc ">
            <li>
              <Link
                to="/"
                className="transition-all duration-500 ease-in-out font-sans flex md:inline-flex p-3 pl-5 pr-5 items-center hover:bg-color4 "
              >
                <span>Home</span>
              </Link>
            </li>
            <li className="relative parent">
              <Link
                to="/myprofile"
                className="transition-all duration-500 ease-in-out flex justify-between md:inline-flex p-3 pl-5 pr-5  items-center hover:bg-ternary"
              >
                <span>My Profile</span>
              </Link>
            </li>
            <li>
              <Link
                to="!#"
                className="transition-all duration-500 ease-in-out flex md:inline-flex p-3 pl-5 pr-5 items-center hover:bg-ternary"
              >
                <span>Place an Order</span>
              </Link>
            </li>
            <li className="relative parent">
              <Link
                to="!#"
                className="transition-all duration-500 ease-in-out flex justify-between md:inline-flex p-3 pl-5 pr-5  items-center hover:bg-ternary"
              >
                <span>Add a Package</span>
              </Link>
            </li>

            <li>
              <Link
                to="!#"
                className="transition-all duration-500 ease-in-out flex md:inline-flex p-3 pl-5 pr-5 items-center hover:bg-ternary"
              >
                <span>Contact Us</span>
              </Link>
            </li>

            <li>
              <button
                id="dropdownDefaultButton"
                onClick={toggleDropdown}
                datadropdowntoggle="dropdown"
                className="transition-all duration-500 ease-in-out flex md:inline-flex p-3 pl-5 pr-5 items-center hover:bg-ternary"
                type="button"
              >
                More Options{" "}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdown"
                className={`z-10 ${
                  isDropdownOpen ? "" : "hidden"
                } absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <Link
                      to="!#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Vehicles
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="!#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Feedbacks
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="!#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Help Desk
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="!#"
                      onClick={handleLogout}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      ) : token && usertypetoken === "Driver" ? (
        <nav className="w-full z-20 bg-primary opacity-80 opacity menumain px-4 py-2 text-primary">
          <img
            src="dashdrop-express-high-resolution-logo-transparent.png"
            style={{ width: "200px", fontFamily: "Georgia, serif" }}
            alt="logo"
            className="text-2xl "
          ></img>
          <ul className="menuetc ">
            <li>
              <Link
                to="/"
                className="transition-all duration-500 ease-in-out font-sans flex md:inline-flex p-3 pl-5 pr-5 items-center hover:bg-color4 "
              >
                <span>Home</span>
              </Link>
            </li>{" "}
            <li className="relative parent">
              <Link
                to="/myprofile"
                className="transition-all duration-500 ease-in-out flex justify-between md:inline-flex p-3 pl-5 pr-5  items-center hover:bg-ternary"
              >
                <span>My Profile</span>
              </Link>
            </li>
            <li>
              <Link
                to="!#"
                className="transition-all duration-500 ease-in-out flex md:inline-flex p-3 pl-5 pr-5 items-center hover:bg-ternary"
              >
                <span>My Deliveries</span>
              </Link>
            </li>
            <li className="relative parent">
              <Link
                to="!#"
                className="transition-all duration-500 ease-in-out flex justify-between md:inline-flex p-3 pl-5 pr-5  items-center hover:bg-ternary"
              >
                <span>My Salary</span>
              </Link>
            </li>
            <li></li>
            <li>
              <button
                id="dropdownDefaultButton"
                onClick={toggleDropdown}
                datadropdowntoggle="dropdown"
                className="transition-all duration-500 ease-in-out flex md:inline-flex p-3 pl-5 pr-5 items-center hover:bg-ternary"
                type="button"
              >
                More Options{" "}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdown"
                className={`z-10 ${
                  isDropdownOpen ? "" : "hidden"
                } absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <Link
                      to="!#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      My Vehicles
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="!#"
                      onClick={handleLogout}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="w-full z-20 bg-primary opacity-80 opacity menumain px-4 py-2 text-primary">
          <img
            src="dashdrop-express-high-resolution-logo-transparent.png"
            style={{ width: "200px", fontFamily: "Georgia, serif" }}
            alt="logo"
            className="text-2xl "
          ></img>
          <ul className="menuetc ">
            <li>
              <Link
                to="/"
                className="transition-all duration-500 ease-in-out font-sans flex md:inline-flex p-3 pl-5 pr-5 items-center hover:bg-color4 "
              >
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/loginuser"
                className="transition-all duration-500 ease-in-out font-sans flex md:inline-flex p-3 pl-5 pr-5 items-center hover:bg-color4 "
              >
                <span>Login</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Theform"
                className="transition-all duration-500 ease-in-out font-sans flex md:inline-flex p-3 pl-5 pr-5 items-center hover:bg-color4 "
              >
                <span>Sign Up</span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
export default MainMenu;
