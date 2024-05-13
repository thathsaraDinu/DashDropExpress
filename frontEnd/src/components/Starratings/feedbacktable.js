import React, { useState } from "react";
import axios from "axios";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";

const FeedbackTable = ({ rows }) => {
<<<<<<< Updated upstream
  const [search, setSearch] = useState(""); // Added state for search

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [
        [
          "Customer ID",
          "Driver Number",
          "Ratings",
          "Description",
        ],
      ],
      body: rows.map((row) => [
        row.name,
        row.drivernumber,
        row.currentValue,
        row.description,
      ]),
    });
    doc.save("Feedback_Table.pdf");
  };
=======
  const [search, setSearch] = useState("");
>>>>>>> Stashed changes

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/api/deletefeedbacks/${id}`)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteConfirmation = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete?");
    if (isConfirmed) {
      handleDelete(id);
    } else {
      // User chose not to delete, handle accordingly
    }
  };

  return (
    <div className="p-10">
      <div className="mt-10 flex justify-end">
        <div className="w-80 float-right mb-5">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
<<<<<<< Updated upstream
              placeholder="Search Full Name"
=======
              placeholder="Search Customer ID"
              value={search}
>>>>>>> Stashed changes
              onChange={(e) => setSearch(e.target.value)}
              required
            />
          </div>
        </div>
      </div>
<<<<<<< Updated upstream
      <>
        <TableContainer component={Paper} sx={{ marginBottom: "50px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Customer ID</TableCell>
                <TableCell>Driver Number</TableCell>
                <TableCell>Ratings</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .filter((row) =>
                  row.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
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
                      <Button
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
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="text-center mt-4">
          <Button variant="contained" color="primary" onClick={handleDownloadPdf}>
            Download PDF
          </Button>
        </div>
      </>
=======
      <TableContainer component={Paper} sx={{ marginBottom: "50px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer ID</TableCell>
              <TableCell>Driver Number</TableCell>
              <TableCell>Ratings</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length > 0 ? (
              rows
                .filter((row) =>
                  row.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{
                      "&:last-child td,&:last-child th": { border: 0 },
                      border: "2px solid #000000",
                    }}
                  >
                    <TableCell
                      component="th"
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
                      component="th"
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
                      component="th"
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
                      component="th"
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
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
>>>>>>> Stashed changes
    </div>
  );
};

export default FeedbackTable;
