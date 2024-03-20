import React, { useState } from "react";
import "./AppMain.css";
import { Link } from "react-router-dom";

function MainMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="mainmenu">
      <nav className="w-full z-20 bg-primary menumain px-4 py-2 text-primary">
        <img
          src="dashdrop-express-high-resolution-logo-transparent.png"
          style={{ width: "200px", fontFamily: "Georgia, serif" }}
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
              <span>Product Tracking</span>
            </Link>
          </li>

          <li>
            <Link
              to="/userdelivery"
              className="transition-all duration-500 ease-in-out flex md:inline-flex p-3 pl-5 pr-5 items-center hover:bg-ternary"
            >
              <span>Order Delivery</span>
            </Link>
          </li>

          <li>
            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              data-dropdown-toggle="dropdown"
              className="transition-all duration-500 ease-in-out flex md:inline-flex p-3 pl-5 pr-5 items-center hover:bg-ternary"
              type="button"
            >
              More Options{" "}
              <svg
                class="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <Link
                    to="!#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Drivers
                  </Link>
                </li>
                <li>
                  <Link
                    to="!#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Feedbacks
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Inventory
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default MainMenu;
