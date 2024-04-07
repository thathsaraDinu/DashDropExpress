import React from "react";

function Thetestform() {
  return (
    <div className="flex flex-row items-center border-b outline-black">
      <form
        style={{ overflowX: "auto", width: "400px" }}
        className="flex flex-col"
      >
        <div className="text-base p-5 mt-5">login</div>{" "}
        <label className="text-sm mt-5">Full Name</label>
        <input
          type="text"
          className="p-2 mb-5 border-b-2"
          style={{ width: "500px" }} // Adjust width to trigger overflow
        ></input>
        <label className="text-sm">Email</label>
        <input type="text" className="p-2 mb-5 border-b-2"></input>
        <label className="text-sm">Address</label>
        <input type="text" className="p-2 mb-5 border-b-2"></input>
      </form>
    </div>
  );
}

export default Thetestform;
