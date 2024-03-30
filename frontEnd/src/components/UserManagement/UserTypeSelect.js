import * as React from "react";

import { Link } from "react-router-dom";

import MainMenu from "../../MainMenu";

const UserTypeSelect = () => {
  return (
    <div>
      <MainMenu />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",

          paddingLeft: "30px",
          paddingRight: "30px",
          transition: "margin-left 0.5s",
        }}
      >
        <img
          style={{
            position: "absolute",
            left: "0",
            top: "0",
            width: "100%",
            zIndex: "0",
          }}
          src="/pexels-pavel-danilyuk-6407556.jpg"
          className="brightness-50 object-cover h-full"
          alt=""
        ></img>
        <br></br>
        <div className="z-10 w-full mb-3" style={{}}>
          <h1
            className="font-bold text-3xl text-primary"
            style={{ textAlign: "center", marginTop: "80px" }}
          >
            Select The User Type
          </h1>
        </div>

        <br></br>
        <div className="flex justify-center">
          <Link
            variant="contained"
            to={"/TheForm?usertype=Customer"}
            className="usertypes z-10 text-black text-center bg-selectuser p-4 m-5 pb-100"
          >
            <div className="font-bold text-3xl ">Customer</div>
            <br></br>
            <div className="text-xl text-blue text-left pt-4">
              Experience our quality services by joining as a customer
              <div className="pt-3">
                We focus on efficient and security on every delivery
              </div>
              <div className="pt-3">Sign Up today to use all our services</div>
            </div>
          </Link>
          <Link
            variant="contained"
            to={"/TheForm?usertype=Driver"}
            className="usertypes z-10 text-black  text-center bg-selectuser2 p-4 m-5 pb-100"
          >
            <div className="text-3xl font-bold">Driver</div>
            <br></br>
            <div className="text-lg text-blue text-left pt-4">
              Join our services by being a part of it{" "}
              <div className="pt-3">
                Minimum requirement is to be a Professional delivery driver with
                two years of experience{" "}
              </div>
              <div className="pt-3">
                Our officials will contact you to interview you
              </div>
            </div>
          </Link>
          <Link
            variant="contained"
            to={"/TheForm?usertype=Admin"}
            className="usertypes z-10 text-black text-center bg-blue-300 p-4 m-5 pb-100"
          >
            <div className="font-bold text-3xl ">Admin</div>
            <br></br>
            <div className="text-xl text-blue text-left pt-4">
              Experience our quality services by joining as a customer
              <div className="pt-3">
                We focus on efficient and security on every delivery
              </div>
              <div className="pt-3">Sign Up today to use all our services</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelect;
