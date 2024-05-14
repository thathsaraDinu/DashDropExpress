import React, { useEffect, useState } from "react";
import MainMenu from "../../MainMenu";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import FooterMain from "../../FooterMain";
import {  useNavigate } from "react-router-dom";

const MyProfile = () => {
  //const [tokenemail, setTokenEmail] = useState("");
  const [id, setTheID] = useState("");
  const [usertype, setUserType] = useState("");
  const [file, setFile] = useState("");
  const [userid, setUserID] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  //const [password, setPassword] = useState("");
  /////////////import this to append the login section
  //const [usertypetoken, setUserType] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

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
          setTheID(response.data._id);
          setUserType(response.data.usertype);
          setUserID(response.data.userid);
          setFullName(response.data.fullName);
          setPhoneNumber(response.data.phoneNumber);
          setEmail(response.data.email);
          setAddress(response.data.address);
          setFile(response.data.profilephoto)
        })

        .catch((error) => console.error("Axios Error : ", error));
    }
  }, [token]);

  ////////////////////////////////////////////////////

  function handleUpload(event) {
    console.log(event);
    var reader = new FileReader();
    if (event.target.files[0]) reader.readAsDataURL(event.target.files[0]);

    const fileSizeInBytes = event.target.files[0].size;
    // Convert bytes to kilobytes (1 KB = 1024 bytes)
    const fileSizeInKB = fileSizeInBytes / 1024;

    if (fileSizeInKB>100) {
      alert("Please upload a smaller image")
      return
    }
    reader.onload = () => {
      console.log(reader.result);

      setFile(reader.result);
    };
    reader.onerror = (error) => {
      console.log("error: ", error);
    };
  }

async function upload() {
  await fetch("http://localhost:3001/api/uploadprofilephoto", {
    method: "POST",
    mode: "cors", // Set the mode to 'cors'
    headers: {
      "Content-Type": "application/json", // Set the Content-Type header
    },
    body: JSON.stringify({
      id: id,
      base64: file,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      console.log("ddd"+data);
      alert("Image uploaded successfully") // Handle the response data
    })
    .catch((error) => {
      console.error("Error:", error); // Handle any errors
    });

    
}


  function handleDeleteConfirmation(id) {
    const isConfirmed = window.confirm("Are you sure you want to delete?");

    if (isConfirmed) {
      handleDelete(id);
      // Additional logic for deletion confirmation
    } else {
    }
  }

  //////delete function
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/api/deleteuser/" + id)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      style={{ backgroundImage: "url('/pexels-francesco-ungaro-2835436.jpg')" }}
      className="backgroundimage relative"
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
              <p className=" max-w-2xl text-sm text-gray-500">{userid}</p>
            </div>
            <div className="absolute inset-x-0 top-5 w-90 mx-auto flex flex-row justify-center items-center">
              <label
                style={{
                  
                  width: "200px",
                  height: "200px",
                  backgroundImage: `url(${file})`,
                  backgroundSize: "cover",
                  position: "relative",
                }}
                className="ml-20 imagechanger border-2 border-gray-500 rounded-full"
                htmlFor="fileInput"
              >
                <span className="text-white hover-text">
                  Click here to Change the photo
                </span>
              </label>
              <input
                id="fileInput"
                style={{
                  display: "none",
                }}
                type="file"
                accept="image/*"
                onChange={(event) => {
                  handleUpload(event);
                }}
              />
              <button className="h-15 ml-5 bg-blue-200 border-2 px-2" onClick={upload}>Upload Image</button>
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
                <button
                  className="text-center flex items-center justify-center my-5 relative rounded px-5 py-3 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
                  onClick={() =>
                    navigate(
                      `/TheUpdateForm/${id}?usertype=${usertype}&page=pass`
                    )
                  }
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative">Change Password</span>
                </button>
                <button
                  className="text-center flex items-center justify-center my-5 relative rounded px-5 py-3 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
                  onClick={() =>
                    navigate(
                      `/TheUpdateForm/${id}?usertype=${usertype}&page=profile`
                    )
                  }
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative">Update Personal Details</span>
                </button>
                <button
                  onClick={() => {
                    handleDeleteConfirmation(id);
                  }}
                  className="text-center flex items-center justify-center relative rounded my-5 px-5 py-3 overflow-hidden group bg-red-500 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300"
                >
                  <span className=" absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative">Delete My Account</span>
                </button>
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
