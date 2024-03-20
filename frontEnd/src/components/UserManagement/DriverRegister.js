import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./form.css";
import MainMenu from "../../MainMenu";

const DriverRegister = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [NIC, setNIC] = useState("");
  const [city, setCity] = useState("");
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
        NIC,
        city,
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
      className="bg-white"
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
              width: "550px",
            }}
            src="/pexels-tima-miroshnichenko-6169659.jpg"
            class="brightness-50 object-cover"
            alt=""
          ></img>
          <div
            style={{
              top: "120px",
              left: "40px",
              position: "absolute",

              zIndex: "10",
              fontStyle: "italy",
            }}
            className="italic text-3xl font-serif text-primary"
          >
            Set sail with StellarShip Courier! <br></br>Register now <br />
            swift and stellar deliveries
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            className="text-4xl "
            style={{ fontFamily: "Times New Roman, serif", marginTop: "80px" }}
          >
            Add User
          </h1>
          <form
            onSubmit={Submit}
            style={{
              width: "500px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "20px",
            }}
            className="bg-gray-100 p-8 w-full max-w-lg rounded-md  border border-gray-500"
          >
            <div class="flex flex-wrap -mx-3 mb-6 w-full px-3">
              <input
                required
                name="fullName"
                type="text"
                class="transition-all duration-500 ease-in-out placeholder-gray-400 appearance-none block w-full text-gray-700 border-2 border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-black"
                placeholder="Full Name"
                id="fullName"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap w-full -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  pattern="\d{10}"
                  title="Please enter a valid 10-digit phone number."
                  class="transition-all duration-500 ease-in-out placeholder-gray-400 appearance-none block w-full text-gray-700 border-2 border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-black"
                  id="phoneNumber"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <input
                  required
                  placeholder="Email"
                  name="email"
                  type="email"
                  class="transition-all duration-500 ease-in-out placeholder-gray-400 appearance-none block w-full text-gray-700 border-2 border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-black"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6 w-full px-3">
              <input
                required
                name="address"
                type="text"
                placeholder="Address"
                class="transition-all duration-500 ease-in-out placeholder-gray-400 appearance-none block w-full text-gray-700 border-2 border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-black"
                id="address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div class="flex flex-wrap -mx-3 mb-6 w-full px-3">
              <input
                required
                name="address2"
                type="text"
                placeholder="Bill Address"
                class="transition-all duration-500 ease-in-out placeholder-gray-400 appearance-none block w-full text-gray-700 border-2 border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-black"
                id="inputAddress2"
                onChange={(e) => setNIC(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap w-full -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  required
                  name="city"
                  type="text"
                  placeholder="City"
                  class="transition-all duration-500 ease-in-out placeholder-gray-400 appearance-none block w-full text-gray-700 border-2 border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-black"
                  id="inputCity"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <div>
                  <select
                    id="comPreff"
                    onChange={(e) => setComPreff(e.target.value)}
                    name="comPreff"
                    defaultValue={""}
                    class="transition-all duration-500 ease-in-out placeholder-gray-400 appearance-none block w-full text-gray-700 border-2 border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-black"
                  >
                    <option className="text-gray-400">Choose</option>
                    <option value={"SMS"}>SMS</option>
                    <option value={"Email"}>Email</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
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

export default DriverRegister;
