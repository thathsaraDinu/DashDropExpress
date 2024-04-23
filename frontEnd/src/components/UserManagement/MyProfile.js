import React, { useEffect, useState } from "react";
import MainMenu from "../../MainMenu";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

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
    <div>
      <MainMenu></MainMenu>
      <div className="flex flex-col justify-start items-center pt-20">
        <div
          className="flex  text-3xl"
          style={{ fontFamily: "Jost", fontWeight: "500" }}
        >
          My Profile
        </div>

        <div className="bg-white max-w-2xl shadow overflow-hidden mt-10 sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              User ID
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{userid}</p>
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
                <dt className="text-sm font-medium text-gray-500">About</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus at felis massa. Nunc suscipit quam vitae elit
                  vestibulum, eu tincidunt mauris euismod. Nam pellentesque
                  vehicula odio id dapibus. Ut ultricies, odio ac finibus
                  luctus, tortor nulla fermentum metus, non hendrerit nisi felis
                  sit amet risus. Duis pharetra in sem eu.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
