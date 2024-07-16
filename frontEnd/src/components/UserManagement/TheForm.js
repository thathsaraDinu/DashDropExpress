import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./form.css";
import MainMenu from "../../MainMenu";
import { jwtDecode } from "jwt-decode";
import FooterMain from "../../FooterMain";

const TheForm = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const [usertype, setUserType] = useState("");
  const navigate = useNavigate();

  const [togglepasswordview, setTogglePasswordView] = useState(false);

  ////////import this to append the login section//////

  const [usertypetoken, setUserTypeToken] = useState("");
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);

      setUserTypeToken(decodedToken.usertypetoken);
    }
  }, [token]);
  //////////////////////////////////////////////////////

  //////password visibility timout
  useEffect((e) => {
    const timer = setTimeout(() => {
      setTogglePasswordView(false);
    }, 2000);
    return () => clearTimeout(timer);
  });

  ////////submit function
  const Submit = (e) => {
    e.preventDefault();
    if (phoneNumber.length !== 10) {
      alert("The Phone Number should be 10 digits");
      setPhoneNumber("");
      return; // Stop execution if passwords don't match
    }
    if (!email.includes("@")) {
      alert("Please Enter a valid Email");
      setEmail("");
      return; // Stop execution if passwords don't match
    }

    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const isValidPassword = regex.test(password);
    if (!isValidPassword) {
      alert("Please match the requested password format");
      return;
    }

    if (password !== confpassword) {
      alert("Password and confirm password do not match");
      setConfPassword("");
      return; // Stop execution if passwords don't match
    }
    axios
      .post("http://localhost:3001/api/createuser", {
        fullName,
        phoneNumber,
        email,
        address,
        password,
        usertype,
      })
      .then((result) => {
        console.log(result);
        alert("Account created successfully");
        if (usertypetoken === "Admin") {
          navigate("/Users");
        } else {
          navigate("/loginuser");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.data && err.response.data.message) {
          alert(err.response.data.message);
          // Clear email field

          setEmail("");
        } else {
          alert("An error occurred while processing your request.");
        }
      });
  };

  const location = useLocation();

  /////get usertype from the url
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const user1 = searchParams.get("usertype");
    if (user1) setUserType(user1);
    else setUserType("Customer");
  }, [location]);

  return (
    <div>
      <MainMenu />
      <div className="cont" style={{ backgroundColor: "#333333" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            backgroundImage: "url('/pexels-francesco-ungaro-2325446.jpg')",
            backgroundSize: "cover",
          }}
          className="backgroundimage imgform relative "
        >
          <div
            style={{
              width: "500px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="registerform"
          >
            <form
              onSubmit={Submit}
              style={{
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
                className="text-3xl "
                style={{
                  fontFamily: "tajawal",
                  marginTop: "0px",
                  marginBottom: "40px",
                  fontWeight: "500",
                }}
              >
                Create an account - {usertype}
              </h1>
              <div className="flex flex-wrap -mx-3 mb-6 w-full px-3">
                <label
                  htmlFor="fullName"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-1"
                >
                  Full Name
                </label>
                <input
                  required
                  name="fullName"
                  type="text"
                  className="appearance-none w-full block border-b-2 border-grey outline-none focus:border-black  hover:border-gray-400 py-2 px-2 py-2"
                  placeholder="Enter full name"
                  id="fullName"
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                />
              </div>
              <div className="flex flex-wrap w-full -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    htmlFor="phoneNumber"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-1"
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
                    className="appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-2 px-2 py-2"
                    id="phoneNumber"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    htmlFor="email"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-1"
                  >
                    Email
                  </label>
                  <input
                    required
                    placeholder="Valid Email"
                    name="email"
                    type="email"
                    className="appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-2 px-2 py-2"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6 w-full px-3">
                <label
                  htmlFor="address"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-1"
                >
                  Address
                </label>
                <input
                  required
                  name="address"
                  type="text"
                  placeholder="Enter the Address"
                  className="appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-2 px-2 py-2"
                  id="address"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                />
              </div>
              <div className="flex flex-wrap -mx-3 mb-6 w-full px-3">
                <label
                  htmlFor="password"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-1"
                >
                  Password
                </label>
                <div className="relative w-full">
                  <input
                    required
                    name="password"
                    type={togglepasswordview ? "text" : "password"}
                    placeholder="Enter a Strong Password"
                    className="appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-2 px-2 py-2"
                    id="password"
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$"
                    title="Password must be at least 6 characters with at least one number, one uppercase and one lower case"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <svg
                    style={{
                      zIndex: "10",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    id="passwordtoggle"
                    className={`password-toggle-icon w-6 h-6 ${
                      togglepasswordview ? "hidden" : ""
                    }`}
                    onClick={(e) => setTogglePasswordView(true)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                  <svg
                    style={{
                      zIndex: "20",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    id="passwordtoggle2"
                    className={`password-toggle-icon2 w-6 h-6 ${
                      togglepasswordview ? "" : "hidden"
                    }`}
                    onClick={(e) => setTogglePasswordView(false)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6 w-full px-3">
                <label
                  htmlFor="confpassword"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-1"
                >
                  Confirm Password
                </label>
                <input
                  required
                  name="confpassword"
                  type="password"
                  placeholder="Re-enter the Password"
                  className="appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-2 px-2 py-2"
                  id="confpassword"
                  onChange={(e) => setConfPassword(e.target.value)}
                  value={confpassword}
                />
              </div>

              <br></br>
              <div className="col-12">
                <button
                  type="submit"
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
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
              {token && usertypetoken === "Admin" ? (
                <Link
                  to={`/Users`}
                  className="z-20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-10 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  type="button"
                >
                  User List
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
          <div
            className="sloganregister"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              height: "500px",
              width: "650px",
              zIndex: "1",
              textAlign: "center",
            }}
          >
            <div
              style={{
                
              }}
              className="text-4xl font-serif text-primary"
            >
              Set sail with StellarShip Courier! <br></br>
              <br />
              Swift and Stellar deliveries
            </div>
            <div>
              <img style={{ width: "600px" }} src="/141.png" alt="img"></img>
            </div>
          </div>
        </div>
      </div>
      <FooterMain></FooterMain>
    </div>
  );
};

export default TheForm;
