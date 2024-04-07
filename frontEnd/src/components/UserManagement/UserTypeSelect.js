import * as React from "react";

import { Link } from "react-router-dom";

import MainMenu from "../../MainMenu";
import FooterMain from "../../FooterMain";

const UserTypeSelect = () => {
  return (
    <div>
      <MainMenu />
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          position: "relative",
          paddingLeft: "30px",
          paddingRight: "30px",
          paddingBottom: "30px",
          transition: "margin-left 0.5s",
          paddingTop: "100px",
          backgroundSize: "cover",
          backgroundImage: "url('/pexels-arthouse-studio-4338020.jpg')",
        }}
        className="backgroundimage"
      >
        <br></br>
        <div className="z-10 w-full mb-3 " style={{}}>
          <h1
            className="font-bold text-3xl text-primary"
            style={{ textAlign: "center", marginTop: "" }}
          >
            Select The User Type
          </h1>
        </div>

        <br></br>
        <div className="flex justify-center flex-wrap">
          <Link
            variant="contained"
            to={"/TheForm?usertype=Customer"}
            className="usertypes flex-1 z-10 text-black text-center bg-selectuser p-4 m-5 pb-100"
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
            className="usertypes flex-1 z-10 text-black  text-center bg-selectuser2 p-4 m-5 pb-100"
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
            className="usertypes flex-1 z-10 text-black text-center bg-blue-300 p-4 m-5 pb-100"
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
      <div className="">
        <FooterMain></FooterMain>
      </div>
    </div>
  );
};

export default UserTypeSelect;
