import { Box } from "@mui/material";
import Axios from "axios";
import { useEffect, useState } from "react";
import MainMenu from "../../MainMenu";
import FooterMain from "../../FooterMain";
import TicketForm from "./ticketform";
import TicketsTable from "./ticketTable";

const Ticket = () => {
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedUser, setSelectedUser] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    Axios.get("https://dashdropexpress.onrender.com/api/tickets")
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

    Axios.post("https://dashdropexpress.onrender.com/api/createticket", payload)
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

    Axios.post("https://dashdropexpress.onrender.com/api/updateticket", payload)
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
    Axios.post("https://dashdropexpress.onrender.com/api/deleteticket", data)
      .then(() => {
        getUsers();
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div
      style={{ backgroundImage: "url('/pexels-mart-production-7706373.jpg')" }}
      className="backgroundimage"
    >
      <MainMenu></MainMenu>
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
        <TicketsTable
          rows={users}
          selectedUser={(data) => {
            setSelectedUser(data);
            setIsEdit(true);
          }}
          deleteUser={(data) =>
            window.confirm("Are you Sure?") && deleteUser(data)
          }
        />
      </Box>{" "}
      <FooterMain></FooterMain>
    </div>
  );
};

export default Ticket;
