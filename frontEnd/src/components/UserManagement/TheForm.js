import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./form.css";
import MainMenu from "../../MainMenu";

const TheForm = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfpassword] = useState("");
  const [comPreff, setComPreff] = useState("");
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/createuser", {
        fullName,
        phoneNumber,
        email,
        address,
        password,
        confpassword,
        comPreff,
      })
      .then((result) => {
        console.log(result);
        navigate("/Users");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <MainMenu />
      <div className="cont">
        <div class="imgform ">
          <img
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              width: "100%",
              zIndex: "0",
            }}
            src="/pexels-pavel-danilyuk-6407556.jpg"
            class="brightness-50 object-cover"
            alt=""
          ></img>
          <div
            style={{
              top: "120px",
              left: "40px",
              position: "absolute",

              zIndex: "1",
              fontStyle: "italy",
            }}
            className="sloganregister italic text-4xl font-serif text-primary"
          >
            Set sail with StellarShip Courier! <br></br>Register now <br></br>
            <br />
            Swift and Stellar deliveries
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form
            onSubmit={Submit}
            style={{
              width: "500px",
              display: "flex",
              color: "black",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "100px",
              backgroundColor: "rgba(255,255,255,0.8)",
              zIndex: "2",
            }}
            className="bg-gray-100 p-8 w-full max-w-lg rounded-md  border border-gray-500"
          >
            <h1
              className="text-4xl "
              style={{
                fontFamily: "serif",
                marginTop: "0px",
                marginBottom: "40px",
                fontWeight: "800",
              }}
            >
              Sign Up
            </h1>
            <div class="flex flex-wrap -mx-3 mb-6 w-full px-3">
              <label
                htmlFor="fullName"
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-1"
              >
                Full Name
              </label>
              <input
                required
                name="fullName"
                type="text"
                class="appearance-none w-full block border-b-2 border-grey outline-none focus:border-black  hover:border-gray-400 py-2 px-2 py-2"
                placeholder="Enter your full name"
                id="fullName"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap w-full -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  htmlFor="phoneNumber"
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-1"
                >
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  placeholder="Valid Phone Number"
                  name="phoneNumber"
                  pattern="\d{10}"
                  title="Please enter a valid 10-digit phone number."
                  class="appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-2 px-2 py-2"
                  id="phoneNumber"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  htmlFor="email"
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-1"
                >
                  Email
                </label>
                <input
                  required
                  placeholder="Valid Email"
                  name="email"
                  type="email"
                  class="appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-2 px-2 py-2"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6 w-full px-3">
              <label
                htmlFor="address"
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-1"
              >
                Address
              </label>
              <input
                required
                name="address"
                type="text"
                placeholder="Enter your Address"
                class="appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-2 px-2 py-2"
                id="address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div class="flex flex-wrap -mx-3 mb-6 w-full px-3">
              <label
                htmlFor="password"
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-1"
              >
                Password
              </label>
              <input
                required
                name="password"
                type="password"
                placeholder="Enter a Strong Password"
                class="appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-2 px-2 py-2"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap -mx-3 mb-6 w-full px-3">
              <label
                htmlFor="confpassword"
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-1"
              >
                Confirm Password
              </label>
              <input
                required
                name="confpassword"
                type="password"
                placeholder="Re-enter the Password"
                class="appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-2 px-2 py-2"
                id="confpassword"
                onChange={(e) => setConfpassword(e.target.value)}
              />
            </div>

            <div className="col-12">
              <div className="form-check">
                <input
                  required
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />

                <label className="form-check-label" htmlFor="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <br></br>
            <div className="col-12">
              <button
                type="submit"
                class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Add User
              </button>
            </div>
          </form>
          <br></br>
          <hr />
          <br></br>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <Link
              to={`/Users`}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              type="button"
            >
              User List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheForm;
