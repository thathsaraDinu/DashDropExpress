import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import MainMenu from "../../MainMenu";

const TheUpdateForm = () => {
  const { id } = useParams();
  const [fullName, setFullName] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfpassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/getuserbyid/" + id)
      .then((response) => {
        console.log(response);
        setFullName(response.data.fullName);
        setPhoneNumber(response.data.phoneNumber);
        setEmail(response.data.email);
        setAddress(response.data.address);
        setPassword(response.data.password);
        setConfpassword(response.data.confpassword);
      })

      .catch((error) => console.error("Axios Error : ", error));
  }, [id]);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/api/updateuser/" + id, {
        fullName,
        phoneNumber,
        email,
        address,
        password,
        confpassword,
      })
      .then((result) => {
        navigate("/Users");
        console.log(result);
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
      <img
        style={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "100%",
          zIndex: "0",
        }}
        src="/pexels-pavel-danilyuk-6407556.jpg"
        class="brightness-50 object-cover h-full"
        alt=""
      ></img>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
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
              class="rounded-full appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-3 px-4"
              placeholder="John Doe"
              id="fullName"
              value={fullName}
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
                name="phoneNumber"
                class="rounded-full appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-3 px-4"
                id="phoneNumber"
                value={phoneNumber}
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
                name="email"
                type="email"
                class="rounded-full appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-3 px-4"
                id="email"
                value={email}
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
              class="rounded-full appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-3 px-4"
              id="address"
              value={address}
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
              class="rounded-full appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-3 px-4"
              id="password"
              value={""}
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
              value={""}
              class="rounded-full appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-3 px-4"
              id="confpassword"
              onChange={(e) => setConfpassword(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3"></div>

          <br></br>
          <div className="col-12">
            <button
              type="submit"
              class="appearance-none w-full block border-b border-grey outline-none focus:border-black hover:border-blue-800 py-2 px-2"
            >
              Update User
            </button>
          </div>
        </form>
        <br></br>
        <hr />
      </div>
    </div>
  );
};

export default TheUpdateForm;
