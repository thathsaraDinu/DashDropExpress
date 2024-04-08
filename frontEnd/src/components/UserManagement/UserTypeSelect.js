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
            style={{
              textAlign: "center",
              marginTop: "",
              fontFamily: "Jost, sans-serif",
              fontWeight: "500",
            }}
          >
            Select The User Type
          </h1>
        </div>

        <br></br>
        <div
          className="flex justify-center flex-wrap"
          style={{
            fontFamily: "Tajawal, sans-serif",
            fontWeight: "500",
          }}
        >
          <Link
            variant="contained"
            to={"/TheForm?usertype=Customer"}
            className="usertypes flex-1 z-10 text-black text-center bg-selectuser p-4 m-5 pb-100"
          >
            <div className="font-bold text-3xl ">Customer</div>
            <br></br>
            <div className="text-xl text-blue text-left pt-4">
              Customers are at the heart of the platform, and the platform is
              committed to providing them with top-quality services. By signing
              up as a customer, an individual gains access to a wide range of
              offerings tailored to their needs, including easy order placement,
              reliable support, and efficient service delivery.
            </div>
          </Link>
          <Link
            variant="contained"
            to={"/TheForm?usertype=Driver"}
            className="usertypes flex-1 z-10 text-black text-center bg-selectuser p-4 m-5 pb-100"
          >
            <div className="text-3xl font-bold">Driver</div>
            <br></br>
            <div className="text-xl text-blue text-left pt-4">
              Drivers provide essential services by delivering goods with
              flexibility in work hours and earning competitive incomes. As a
              driver, an individual will enjoy the freedom to choose their own
              schedule, access supportive tools and resources, and be part of a
              vibrant driver community.
            </div>
          </Link>
          <Link
            variant="contained"
            to={"/TheForm?usertype=Admin"}
            className="usertypes flex-1 z-10 text-black text-center bg-selectuser p-4 m-5 pb-100"
          >
            <div className="font-bold text-3xl ">Admin</div>
            <br></br>
            <div className="text-xl text-blue text-left pt-4">
              Admins have full access to platform features, including managing
              users, overseeing operations, and setting policies. By signing up
              as an admin, an individual plays a crucial role in maintaining the
              platform's integrity and security, ensuring smooth operations, and
              driving growth.
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
