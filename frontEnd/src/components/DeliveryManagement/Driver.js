import { Box } from "@mui/material";
import Axios from "axios";
import { useEffect, useState } from "react";
import "./users.css";
import DriverTable from "./DriverTable";
import MainMenu from "../../MainMenu";
import FooterMain from "../../FooterMain";

const DriverDelivery = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    Axios.get("https://dashdropexpress.onrender.com/api/delivery")
      .then((response) => {
        setUsers(response.data.response || []);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  return (
    <div>
      <MainMenu></MainMenu>
      <div className="pb-20">
        <img className="image2" src="/pic8.jpg" alt="background"></img>
        <Box
          sx={{
            width: "calc(100% - 100px)",
            margin: "auto",
          }}
        >
          <DriverTable rows={users} />
        </Box>
      </div>
      <FooterMain></FooterMain>
    </div>
  );
};

export default DriverDelivery;
