import { Box } from "@mui/material";
import Axios from "axios";
import { useEffect, useState } from "react";
import TicketTable from "./ticketTable";
import TicketForm from "./ticketform";
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
        console.error("Error adding user:", error);
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
    <div className="">
      <MainMenu></MainMenu>
      <img src="./pexels-pavel-danilyuk-6407556.jpg" style={{position:"absolute", zIndex:"-100",  objectFit: "cover", height:"1300px"}}></img>
      <Box
        sx={{
          width: "calc(100% - 100px)",
          margin: "auto",
        }}
      >
        <TicketForm
          addUser={addUser}
          updateUser={updateUser}
          submitted={submitted}
          data={selectedUser}
          isEdit={isEdit}
        />
        <TicketTable
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
      <FooterMain></FooterMain>
    </div>
  );
};

export default Ticket;
