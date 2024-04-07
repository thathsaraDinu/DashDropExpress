import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import MainMenu from "../MainMenu";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:3001/api/loginuser", {
          email,
          password,
        })
        .then((res) => {
          if (res.data.message === "exist") {
            const token = res.data.token;
            localStorage.setItem("token", token);
            navigate("/", { state: { name: res.data.user.fullName } });
            console.log(res.response);
            
          } else if (res.data.message === "User not found") {
            alert("User have not sign up");
          } else if (res.data.message === "Incorrect password") {
            alert("Incorrect Password");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
          setEmail("");
          setPassword("");
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <MainMenu></MainMenu>
      <div className="login flex flex-col items-center logincenter">
        <img
          style={{
            position: "absolute",
            left: "0",
            top: "0",
            width: "100%",
            zIndex: "0",
          }}
          src="/pexels-maxime-francis-2246476.jpg"
          className="brightness-50 object-cover h-full"
          alt=""
        ></img>

        <div class="z-10 w-full max-w-xs">
          <form
            action="POST"
            onSubmit={submit}
            class="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4"
          >
            <h1 className="text-center text-xl font-bold pb-10">Login</h1>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Email
              </label>
              <input
                class="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
                value={email}
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="******************"
                value={password}
              />
            </div>
            <div class="flex items-center justify-center">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className="z-10 text-center text-primary">
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
