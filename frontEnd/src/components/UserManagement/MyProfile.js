import React from "react";
import MainMenu from "../../MainMenu";

const MyProfile = () => {
  return (
    <div>
      <MainMenu></MainMenu>
      <div className="flex flex-col">
        <div className="flex justify-center items-center">My Profile</div>
      </div>
    </div>
  );
};

export default MyProfile;
