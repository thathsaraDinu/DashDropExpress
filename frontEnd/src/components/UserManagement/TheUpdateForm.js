import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import MainMenu from "../../MainMenu";

import FooterMain from "../../FooterMain";

const TheUpdateForm = () => {
  const { id } = useParams();
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");

  const navigate = useNavigate();

  /////////////import this to append the login section
  
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      

      
    }
  }, [token]);
  ////////////////////////////////////////////////////

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/getuserbyid/" + id)
      .then((response) => {
        console.log(response);
        setFullName(response.data.fullName);
        setPhoneNumber(response.data.phoneNumber);
        setEmail(response.data.email);
        setAddress(response.data.address);
      })

      .catch((error) => console.error("Axios Error : ", error));
  }, [id]);

  const Update = (e) => {
    e.preventDefault();

    if (password !== confpassword) {
      alert("Password and confirm password do not match");
      setConfPassword("");
      return; // Stop execution if passwords don't match
    }

    axios
      .put("http://localhost:3001/api/updateuser/" + id, {
        fullName,
        phoneNumber,
        email,
        address,
        password,
      })
      .then((result) => {
        alert(result.data.message);

        navigate("/Users");
        console.log(result);
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.message)
          alert(err.response.data.message);
        setEmail("");
      });
  };
  return (
    ///pexels-francesco-ungaro-2325446.jpg
    <div>
      {token ? (
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
              <h2 className="text-3xl pb-10 ">Update User</h2>
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
                  className="rounded-full appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-3 px-4"
                  placeholder="John Doe"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
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
                    name="phoneNumber"
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
                  className="rounded-full appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-3 px-4"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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
                  className="rounded-full appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-3 px-4"
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
        <div>You need to login to the website to access this page</div>
      )}
    </div>
  );
};

export default TheUpdateForm;
