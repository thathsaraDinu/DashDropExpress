import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation, useParams } from "react-router-dom";

import MainMenu from "../../MainMenu";

import FooterMain from "../../FooterMain";
import { jwtDecode } from "jwt-decode";

const TheUpdateForm = () => {
  const { id } = useParams();
  const [userid, setUserID] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const [tokenemail, setTokenEmail] = useState("");
  const [page, setPage] = useState("");
  const [oldpassword, setOldPassword] = useState("");

  const navigate = useNavigate();

  const [togglepasswordview, setTogglePasswordView] = useState(false);

  /////////////import this to append the login section

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token); // Corrected function call

      setTokenEmail(decodedToken.useremail);
    }
  }, [token]);
  ////////////////////////////////////////////////////

  /////get the user information before updating function
  useEffect(() => {
    axios
      .get("https://dashdropexpress.onrender.com/api/getuserbyid/" + id)
      .then((response) => {
        console.log(response);
        setUserID(response.data.userid);
        setFullName(response.data.fullName);
        setPhoneNumber(response.data.phoneNumber);
        setEmail(response.data.email);
        setAddress(response.data.address);
      })

      .catch((error) => console.error("Axios Error : ", error));
  }, [id]);

  /////////////update function on submit
  const Update = (e) => {
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

    e.preventDefault();
    if (page === "pass") {
      axios
        .post("https://dashdropexpress.onrender.com/api/checkpassword/" + id, {
          oldpassword,
        })
        .then((result) => {
          console.log(password);
          if (password === "") {
            alert("Please Enter the new password");
            return;
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
            .put("https://dashdropexpress.onrender.com/api/updateuser/" + id, {
              fullName,
              phoneNumber,
              email,
              address,
              password,
            })
            .then((result) => {
              alert(result.data.message);
              navigate("/myprofile");
              console.log(result);
            })
            .catch((err) => {
              if (
                err.response &&
                err.response.data &&
                err.response.data.message
              )
                alert(err.response.data.message);
              setEmail("");
            });
          console.log(result);
        })
        .catch((err) => {
          if (err.response && err.response.data && err.response.data.message)
            alert(err.response.data.message);
          setOldPassword("");
        });
    }

    if (page === "profile" || page === null) {
      if (password !== confpassword) {
        alert("Password and confirm password do not match");
        setConfPassword("");
        return; // Stop execution if passwords don't match
      }
      axios
        .put("https://dashdropexpress.onrender.com/api/updateuser/" + id, {
          fullName,
          phoneNumber,
          email,
          address,
          password,
        })
        .then((result) => {
          alert(result.data.message);
          if (page !== "profile") navigate("/Users");
          else navigate("/myprofile");
          console.log(result);
        })
        .catch((err) => {
          if (err.response && err.response.data && err.response.data.message)
            alert(err.response.data.message);
          setEmail("");
        });
    }
  };
  const location = useLocation();
  const [updatetype, setUpdateType] = useState("");
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const user1 = searchParams.get("usertype");
    setPage(searchParams.get("page"));
    if (user1) setUpdateType(user1);
    else setUpdateType("Customer");
  }, [location]);

  ////////timout function for password visibility
  useEffect((e) => {
    const timer = setTimeout(() => {
      setTogglePasswordView(false);
    }, 2000);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      {(token && tokenemail === "thathsaradinuwan@gmail.com") ||
      (token && tokenemail === email) ? (
        <div>
          <MainMenu />

          <div
            style={{
              position: "relative",
              backgroundImage: "url('/pexels-francesco-ungaro-2325446.jpg')",
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="backgroundimage pb-10"
          >
            <form
              onSubmit={Update}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "100px",
                width: "550px",
                zIndex: "1",
                backgroundColor: "rgba(255,255,255,0.8)",
              }}
              className="p-8  rounded-md  border border-gray-500"
            >
              <h2
                style={{
                  fontFamily: "tajawal",
                  fontWeight: "500",
                  display: page === "pass" ? "none" : null,
                }}
                className="text-3xl pb-10 "
              >
                Update User - {updatetype}
              </h2>
              <h2
                style={{
                  fontFamily: "tajawal",
                  fontWeight: "500",
                  display:
                    page === "profile" ? "none" : page === null ? "none" : null,
                }}
                className="text-3xl pb-10 "
              >
                Change Password
              </h2>
              <div className="flex flex-wrap -mx-3 mb-6 w-full px-3">
                <label
                  htmlFor="userid"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-1"
                >
                  User ID
                </label>
                <input
                  disabled
                  required
                  name="userid"
                  type="text"
                  className="rounded-full appearance-none w-full block  border-grey outline-none py-2 px-4"
                  id="userid"
                  value={userid}
                />
              </div>
              <div
                style={{ display: page === "pass" ? "none" : null }}
                className="flex flex-wrap -mx-3 mb-6 w-full px-3"
              >
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
                  className="rounded-full appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-3 px-4"
                  placeholder="John Doe"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div
                style={{ display: page === "pass" ? "none" : null }}
                className="flex flex-wrap w-full -mx-3 mb-6"
              >
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
                    name="phoneNumber"
                    pattern="[0-9]{10}"
                    className="rounded-full appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-3 px-4"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
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
                    name="email"
                    type="email"
                    className="rounded-full appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-3 px-4"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div
                style={{ display: page === "pass" ? "none" : null }}
                className="flex flex-wrap -mx-3 mb-6 w-full px-3"
              >
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
                  className="rounded-full appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-3 px-4"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div
                style={{
                  display:
                    page === "profile" ? "none" : page == null ? "none" : null,
                }}
                className="flex flex-wrap -mx-3 mb-6 w-full px-3"
              >
                <label
                  htmlFor="oldpass"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-1"
                >
                  Old Password
                </label>
                <input
                  name="oldpass"
                  type="password"
                  className="rounded-full appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-3 px-4"
                  id="oldpass"
                  onChange={(e) => setOldPassword(e.target.value)}
                  value={oldpassword}
                />
              </div>
              <div
                style={{ display: page === "profile" ? "none" : null }}
                className="flex flex-wrap -mx-3 mb-6 w-full px-3"
              >
                <label
                  htmlFor="password"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-1"
                >
                  <span style={{ display: page === null ? "none" : null }}>
                    New{" "}
                  </span>{" "}
                  Password
                </label>
                <div className="relative w-full">
                  <input
                    name="password"
                    type={togglepasswordview ? "text" : "password"}
                    className="rounded-full appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-3 px-4"
                    id="password"
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    autoComplete="off"
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

              <div
                style={{ display: page === "profile" ? "none" : null }}
                className="flex flex-wrap -mx-3 mb-6 w-full px-3"
              >
                <label
                  htmlFor="confpassword"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-1"
                >
                  Confirm Password
                </label>
                <input
                  name="confpassword"
                  type="password"
                  className="rounded-full appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-3 px-4"
                  id="confpassword"
                  onChange={(e) => setConfPassword(e.target.value)}
                  value={confpassword}
                />
              </div>
              <div className="w-full md:w-1/2 px-3"></div>

              <br></br>
              <div className="col-12">
                <button
                  type="submit"
                  className=" z-20 focus:outline-none text-white bg-green-700 hover:bg-green-800 ring-2 ring-white focus:ring-4 focus:ring-green-300 text-base rounded-lg text-sm px-5 py-2.5 me-2 mb-10 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-900"
                >
                  Update User
                </button>
              </div>
            </form>
            <br></br>
            <hr />
          </div>
          <FooterMain></FooterMain>
        </div>
      ) : (
        <div className="p-5 text-2xl">
          You need to be a User Manager or the owner of this account to update
          account
        </div>
      )}
    </div>
  );
};

export default TheUpdateForm;
