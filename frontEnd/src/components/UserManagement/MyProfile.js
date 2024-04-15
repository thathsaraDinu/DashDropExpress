import React from "react";
import MainMenu from "../../MainMenu";

const MyProfile = () => {
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
        <div style={{width:"400px", height:"500px"}} className="border-2 p-10 m-10  border-gray-600 rounded-lg"></div>
      </div>
    </div>
  );
};

export default MyProfile;
