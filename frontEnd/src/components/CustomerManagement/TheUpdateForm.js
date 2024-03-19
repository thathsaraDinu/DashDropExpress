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
  const [NIC, setNIC] = useState("");
  const [city, setCity] = useState("");
  const [comPreff, setComPreff] = useState("");
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
        setNIC(response.data.NIC);
        setCity(response.data.city);
        setComPreff(response.data.comPreff);
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
        NIC,
        city,
        comPreff,
      })
      .then((result) => {
        navigate("/Users");
        console.log(result);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <MainMenu />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 className="text-3xl" style={{ marginTop: "100px" }}>
          Update User
        </h2>
        <form
          onSubmit={Update}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
            width: "550px",
          }}
          className="p-8  rounded-md  border border-gray-500"
        >
          <div class="flex flex-wrap -mx-3 mb-6 w-full px-3">
            <label
              htmlFor="fullName"
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-2"
            >
              Full Name
            </label>
            <input
              required
              name="fullName"
              type="text"
              class="appearance-none w-full block border-b border-grey outline-none focus:border-black hover:border-blue-800 py-2 px-2"
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
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-2"
              >
                Phone Number
              </label>
              <input
                required
                type="tel"
                name="phoneNumber"
                class="appearance-none w-full block border-b border-grey outline-none focus:border-black hover:border-blue-800 py-2 px-2"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                htmlFor="email"
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-2"
              >
                Email
              </label>
              <input
                required
                name="email"
                type="email"
                class="appearance-none w-full block border-b border-grey outline-none focus:border-black hover:border-blue-800 py-2 px-2"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6 w-full px-3">
            <label
              htmlFor="address"
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-2"
            >
              Address
            </label>
            <input
              required
              name="address"
              type="text"
              class="appearance-none w-full block border-b border-grey outline-none focus:border-black hover:border-blue-800 py-2 px-2"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div class="flex flex-wrap -mx-3 mb-6 w-full px-3">
            <label
              htmlFor="inputAddress2"
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-2"
            >
              Bill Address
            </label>
            <input
              required
              name="address2"
              type="text"
              class="appearance-none w-full block border-b border-grey outline-none focus:border-black hover:border-blue-800 py-2 px-2 "
              id="inputAddress2"
              value={NIC}
              onChange={(e) => setNIC(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap w-full -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                htmlFor="inputCity"
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-2"
              >
                City
              </label>
              <input
                required
                name="city"
                type="text"
                value={city}
                class="appearance-none w-full block border-b border-grey outline-none focus:border-black hover:border-blue-800 py-2 px-2"
                id="inputCity"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                for="comPreff"
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-2"
              >
                Communication Prefference
              </label>
              <div>
                <select
                  id="comPreff"
                  onChange={(e) => setComPreff(e.target.value)}
                  name="comPreff"
                  value={comPreff}
                  defaultValue={""}
                  class="border-b border-grey outline-none focus:border-black py-2 px-2 "
                >
                  <option>Choose</option>
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

          <br></br>
          <div className="col-12">
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
