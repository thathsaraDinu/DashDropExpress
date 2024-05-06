import React, { useEffect, useState } from "react";
import MainMenu from "../../MainMenu";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import FooterMain from "../../FooterMain";

const MyProfile = () => {
  //const [tokenemail, setTokenEmail] = useState("");

  const [userid, setUserID] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  //const [password, setPassword] = useState("");
  /////////////import this to append the login section
  //const [usertypetoken, setUserType] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token); // Corrected function call

      axios
        .get("http://localhost:3001/api/getuserbyemail", {
          params: {
            email: decodedToken.useremail, // Assuming email is defined somewhere in your component
          },
        })
        .then((response) => {
          console.log(response);
          setUserID(response.data.userid);
          setFullName(response.data.fullName);
          setPhoneNumber(response.data.phoneNumber);
          setEmail(response.data.email);
          setAddress(response.data.address);
        })

        .catch((error) => console.error("Axios Error : ", error));
    }
  }, [token]);

  ////////////////////////////////////////////////////

  return (
    <div
      style={{ backgroundImage: "url('/pexels-francesco-ungaro-2835436.jpg')" }}
      className="backgroundimage"
    >
      <MainMenu></MainMenu>
      <div className="flex flex-col justify-start items-center pt-20 mb-20">
        <div
          className="flex  text-4xl text-white"
          style={{ fontFamily: "Jost", fontWeight: "500" }}
        >
          My Profile
        </div>

        <div className="bg-white max-w-2xl shadow overflow-hidden mt-10 sm:rounded-lg">
          <div
            className=" flex relative  px-4 py-5 sm:px-6"
            style={{ height: "250px" }}
          >
            <div className="flex flex-col">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                User ID
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">{userid}</p>
            </div>
            <div className="absolute inset-x-0 top-5 w-90 mx-auto flex flex-row justify-center">
              <div
                style={{ width: "200px", height: "200px" }}
                className="border-2 border-gray-500 rounded-full"
              ></div>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {fullName}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Phone Number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {phoneNumber}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {email}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {address}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <a
                  href="#_"
                  class="text-center flex items-center justify-center my-5 relative rounded px-5 py-3 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
                >
                  <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span class="relative">Change Password</span>
                </a>
                <a
                  href="#_"
                  class="text-center flex items-center justify-center my-5 relative rounded px-5 py-3 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
                >
                  <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span class="relative">Update Personal Details</span>
                </a>
                <a
                  href="#_"
                  class="text-center flex items-center justify-center relative rounded my-5 px-5 py-3 overflow-hidden group bg-red-500 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300"
                >
                  <span class=" absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span class="relative">Delete My Account</span>
                </a>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <FooterMain></FooterMain>
    </div>
  );
};

export default MyProfile;
