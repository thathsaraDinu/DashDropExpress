import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./form.css";
import MainMenu from "../../MainMenu";
import { jwtDecode } from "jwt-decode";

const TheForm = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const [usertype, setUserType] = useState("");
  const navigate = useNavigate();


  ////////import this to append the login section//////
  
  const [usertypetoken, setUserTypeToken] = useState("");
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token); // Corrected function call
      
      setUserTypeToken(decodedToken.usertypetoken);
    }
  }, [token]);
  //////////////////////////////////////////////////////


  const Submit = (e) => {
    e.preventDefault();
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
        if(usertypetoken === "Admin"){
          navigate("/Users");
        }
        else{
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

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const user1 = searchParams.get("usertype");
    if (user1) setUserType(user1);
    else setUserType("Customer");
    console.log("User Type:", user1);
    // Use paramName as needed
  }, [location]);

  return (
    <div>
      <MainMenu />
      <div className="cont" style={{ backgroundColor: "#333333" }}>
        <div className="imgform">
          <img
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              width: "100%",
              zIndex: "0",
            }}
            src="/pexels-pavel-danilyuk-6407556.jpg"
            className="brightness-50 object-cover"
            alt="background"
          ></img>
          <div
            style={{
              top: "150px",
              left: "100px",
              position: "absolute",
              textAlign: "center",
              zIndex: "1",
            }}
            className="sloganregister  text-4xl font-serif text-primary"
          >
            Set sail with StellarShip Courier! <br></br>
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
              className="text-3xl "
              style={{
                fontFamily: "serif",
                marginTop: "0px",
                marginBottom: "40px",
                fontWeight: "800",
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
              <input
                required
                name="password"
                type="password"
                placeholder="Enter a Strong Password"
                className="appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-2 px-2 py-2"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
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
          {token && usertypetoken === "Admin" ? ( <Link
           
              to={`/Users`}
              className="z-20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              type="button"
            >
              User List
            </Link>) : ("") }
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheForm;
