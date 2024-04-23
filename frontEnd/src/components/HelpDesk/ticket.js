import { Box } from "@mui/material";
import Userform from "./ticketform";
import UsersTable from "./ticketTable";
import Axios from "axios";
import { useEffect, useState } from "react";
import MainMenu from "../../MainMenu";
import FooterMain from "../../FooterMain";

const Ticket = () => {
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedUser, setSelectedUser] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    Axios.get("http://localhost:3001/api/tickets")
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
      cname: data.cname,
      inquery: data.inquery,
      date: data.date,
    };

    Axios.post("http://localhost:3001/api/createticket", payload)
      .then(() => {
        getUsers();
        setSubmitted(false);
        setIsEdit(false);
      })
      .catch((error) => {
        console.error("Error adding ticket:", error);
      });
  };

  const updateUser = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      cname: data.cname,
      inquery: data.inquery,
      date: data.date,
    };

    Axios.post("http://localhost:3001/api/updateticket", payload)
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
    Axios.post("http://localhost:3001/api/deleteticket", data)
      .then(() => {
        getUsers();
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div>
      <MainMenu></MainMenu>
    <div className="body1">
      <img
        className="image1"
      ></img>
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

export default Ticket;
