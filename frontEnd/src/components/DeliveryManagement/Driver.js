
import { Box } from "@mui/material";
import Userform from "./userform";
import UsersTable from "./usersTable";
import Axios from "axios";
import { useEffect, useState } from "react";
import "./users.css";
import DriverTable from "./DriverTable";

const Driver = () => {
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedUser, setSelectedUser] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    Axios.get("http://localhost:3001/api/users")
      .then((response) => {
        setUsers(response.data.response || []);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  const addUser = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      did: data.did,
      d_name: data.d_name,
      c_name: data.c_name,
      address: data.address,
      instruction: data.instruction,
      date: data.date,
    };

    Axios.post("http://localhost:3001/api/createuser", payload)
      .then(() => {
        getUsers();
        setSubmitted(false);
        setIsEdit(false);
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  const updateUser = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      did: data.did,
      d_name: data.d_name,
      c_name: data.c_name,
      address: data.address,
      instruction: data.instruction,
      date: data.date,
    };

    Axios.post("http://localhost:3001/api/updateuser", payload)
      .then(() => {
        getUsers();
        setSubmitted(false);
        setIsEdit(false);
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  const deleteUser = (data) => {
    Axios.post("http://localhost:3001/api/deleteuser", data)
      .then(() => {
        getUsers();
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div className="body1">
      <img
        className="image2"
        src="/pexels-cottonbro-studio-4604599.jpg"
        alt="background"
      ></img>
      <Box
        sx={{
          width: "calc(100% - 100px)",
          margin: "auto",
        }}
      >
       
        <DriverTable
          rows={users}
          
        />
      </Box>
    </div>
  );
};

export default Driver;
