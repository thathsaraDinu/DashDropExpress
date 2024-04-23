import React from "react";
import axios from "axios";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";

const FeedbackTable = ({ rows }) => {
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/api/deletefeedbacks/" + id)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  function handleDeleteConfirmation(id) {
    const isConfirmed = window.confirm("Are you sure you want to delete?");

    if (isConfirmed) {
      handleDelete(id);
      // Additional logic for deletion confirmation
    } else {
      // User chose not to delete, handle accordingly
    }
  }

  return (
    <TableContainer component={Paper} sx={{marginBottom:"50px"}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Drivernumber</TableCell>
            <TableCell>Ratings</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row) => (
              <TableRow
                key={row._id}
                sx={{
                  "&:last-child td,&:last-child th": { border: 0 },
                  border: "2px solid #000000",
                }}
              >
                <TableCell
                  component={"th"}
                  scope="row"
                  sx={{
                    fontSize: "15px",
                    textAlign: "left",
                    fontWeight: "900",
                  }}
                >
                  {row.name}
                </TableCell>
                <TableCell
                  component={"th"}
                  scope="row"
                  sx={{
                    fontSize: "15px",
                    textAlign: "left",
                    fontWeight: "900",
                  }}
                >
                  {row.drivernumber}
                </TableCell>
                <TableCell
                  component={"th"}
                  scope="row"
                  sx={{
                    fontSize: "15px",
                    textAlign: "left",
                    fontWeight: "900",
                  }}
                >
                  {row.currentValue}
                </TableCell>

                <TableCell
                  component={"th"}
                  scope="row"
                  sx={{
                    fontSize: "15px",
                    textAlign: "left",
                    fontWeight: "900",
                  }}
                >
                  {row.description}
                </TableCell>
                <TableCell>
                  <Link
                    to={`/Driversfeedbackupdate/${row._id}`}
                    style={{
                      margin: "5px",
                      padding: "10px",
                      backgroundColor: "#EAE30B",
                      color: "black",
                      textDecoration: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => {
                      handleDeleteConfirmation(row._id);
                    }}
                    style={{
                      margin: "5px",
                      padding: "10px",
                      backgroundColor: "#f44336",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow sx={{ "&:last-child td,&:last-child th": { border: 0 } }}>
              <TableCell component={"th"} scope="row"></TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FeedbackTable;
