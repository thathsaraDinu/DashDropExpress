import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import MainMenu from "../MainMenu";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [togglepasswordview, setTogglePasswordView] = useState(false);
  const [existingUsername, setExistingUsername] = useState("");
  const [existingusertype, setExistingUserType] = useState("");
  const [existingemail, setExistingEmail] = useState("");
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [waitmessage, setWaitMessage] = useState(false);
  const [otp, setOTP] = useState("");

  async function submitotp(e) {
    e.preventDefault();
    const otpmod = otp.replaceAll(/\s/g, "");
    try {
      console.log(existingUsername, existingemail, existingusertype);
      axios
        .post("http://localhost:3001/api/verifyOTP", {
          existingUsername,
          existingemail,
          existingusertype,
          otpmod,
        })

        .then((res) => {
          const token = res.data.token;
          localStorage.setItem("token", token);
          alert(res.data.message);
          navigate("/");
        })
        .catch((err) => {
          if (err.response && err.response.data && err.response.data.message) {
            alert(err.response.data.message);
            if (err.response.status === 400 || err.response.status === 403) {
              setOTP("");
            } else {
              window.location.reload();
            }
          }
        });
    } catch (e) {
      console.log(e);
      alert("error occured");
    }
  }
  ///////submit function
  async function submit(e) {
    e.preventDefault();
    const tokencheck = localStorage.getItem("token");
    if (tokencheck) {
      setEmail("");
      setPassword("");
      return alert("Please logout from the currently logged in account first");
    }

    setWaitMessage(true);
    try {
      await axios
        .post("http://localhost:3001/api/loginuser", {
          email,
          password,
        })
        .then((res) => {
          setShowOTPForm(true);
          setExistingEmail(res.data.user.email);
          setExistingUsername(res.data.user.fullName);
          setExistingUserType(res.data.user.usertype);
          alert(res.data.msgotp);
          setWaitMessage(false);
        })
        .catch((err) => {
          if (err.response && err.response.data && err.response.data.message)
            alert(err.response.data.message);
          setWaitMessage(false);
          setEmail("");
          setPassword("");
        });
    } catch (e) {
      console.log(e);
    }
  }

  ////function for password visibility toggling
  useEffect(() => {
    const toggleview = document.getElementById("passwordtoggle");
    const toggleview2 = document.getElementById("passwordtoggle2");

    if (togglepasswordview === true) {
      toggleview.classList.add("hidden");
      toggleview2.classList.remove("hidden");
    } else {
      toggleview.classList.remove("hidden");
      toggleview2.classList.add("hidden");
    }

    const timer = setTimeout(() => {
      setTogglePasswordView(false); // Change the value back to false after 2 seconds
    }, 2000); // Change this value according to your requirement (in milliseconds)

    return () => clearTimeout(timer);
  }, [togglepasswordview]);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
      />
      <link rel="stylesheet" href="css/style.css" />
      <MainMenu></MainMenu>
      <div className="login flex flex-col items-center logincenter ">
        <img
          style={{
            position: "absolute",
            left: "0",
            top: "0",
            width: "100%",
            zIndex: "0",
          }}
          src="/paul-earle-wVjd0eWNqI8-unsplash.jpg"
          className="brightness-50 object-cover h-full"
          alt=""
        ></img>

        <div className="z-10 w-full max-w-xs">
          <form
            action="POST"
            onSubmit={submit}
            className="bg-white bg-opacity-80 shadow-md rounded-2xl px-8 pt-6 pb-5 mb-4"
          >
            <h1
              style={{ fontFamily: "Jost", fontWeight: "600" }}
              className="text-center text-2xl pb-8"
            >
              Login
            </h1>
            <div className="mb-4">
              <label
                style={{ fontFamily: "Jost", fontWeight: "500" }}
                className="block text-gray-700  font-bold mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                style={{ fontFamily: "Jost", fontWeight: "500" }}
                className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
                value={email}
              />
            </div>
            <div className="mb-6 ">
              {" "}
              {/* Added flex and items-center to make the SVG and input inline */}
              <label
                style={{ fontFamily: "jost", fontWeight: "500" }}
                className="block text-gray-700  font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative ">
                <input
                  style={{ fontFamily: "jost", fontWeight: "500" }}
                  className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700   leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type={togglepasswordview ? "text" : "password"}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="**********"
                  value={password}
                />

                {/* Added margin-left to create space between input and SVG */}
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
                  className="password-toggle-icon w-6 h-6"
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
                  className="password-toggle-icon2 w-6 h-6"
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
            <div
              style={{
                color: "green",
                fontFamily: "jost",
                fontWeight: "500",
                textAlign: "center",
                paddingBottom: "8px",
              }}
              className={waitmessage ? "" : "hidden"}
            >
              Please wait
            </div>
            <div
              style={{
                display: showOTPForm ? "none" : "flex",

                justifyContent: "center",
              }}
            >
              <button
                style={{ fontFamily: "jost", fontWeight: "600" }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
          <form
            style={{
              fontFamily: "jost",
              fontWeight: "600",
              display: showOTPForm ? "block" : "none",
              marginBottom: "4rem", // Adjust the value as needed
            }}
            className="bg-white p-5 rounded-2xl"
          >
            <label className="block text-gray-700   mb-2" htmlFor="otp">
              Enter the OTP. <span>(Check your email)</span>
            </label>
            <input
              className="shadow appearance-none mb-5 border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="otp"
              type="text"
              onChange={(e) => {
                setOTP(e.target.value);
              }}
              placeholder="OTP"
              value={otp}
            />
            <div className="otpsubmit flex items-center justify-center">
              <button
                style={{ fontFamily: "jost", fontWeight: "600" }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={submitotp}
              >
                Verify
              </button>
            </div>
          </form>
        </div>
        <div
          style={{
            fontFamily: "jost",
            fontWeight: "500",
            display: showOTPForm ? "none" : "",
          }}
          className="z-10 text-center text-primary"
        >
          <br />
          <p>OR</p>
          <br />

          <Link className="underline" to="/TheForm">
            Signup Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
