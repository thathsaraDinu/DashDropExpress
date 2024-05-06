import { Box } from "@mui/material";
import Userform from "./userform";
import UsersTable from "./usersTable";
import Axios from "axios";
import { useEffect, useState } from "react";
import "./users.css";
import MainMenu from "../../MainMenu";
import FooterMain from "../../FooterMain";

const UserDelivery = () => {
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedUser, setSelectedUser] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    Axios.get("http://localhost:3001/api/delivery")
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
      phoneNumber: data.phoneNumber,
      address: data.address,
      instruction: data.instruction,
      date: data.date,
    };

    Axios.post("http://localhost:3001/api/createdelivery", payload)
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
      phoneNumber: data.phoneNumber,
      address: data.address,
      instruction: data.instruction,
      date: data.date,
    };

    Axios.post("http://localhost:3001/api/updatedelivery", payload)
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
    Axios.post("http://localhost:3001/api/deletedelivery", data)
      .then(() => {
        getUsers();
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div >
      <MainMenu></MainMenu>

      <div className="pt-1 mb-10 ">
        <img className="image1 " src="/pic8.jpg" alt="background"></img>
        <Box
          sx={{
            width: "calc(100% - 100px)",
            margin: "auto",
          }}
        >
          <Userform
            addUser={addUser}
            updateUser={updateUser}
            submitted={submitted}
            data={selectedUser}
            isEdit={isEdit}
          />
          <UsersTable
            rows={users}
            selectedUser={(data) => {
              setSelectedUser(data);
              setIsEdit(true);
            }}
            deleteUser={(data) =>
              window.confirm("Are you Sure?") && deleteUser(data)
            }
          />
        </Box>
      </div>
      <FooterMain></FooterMain>
    </div>
  );
};

export default UserDelivery;
