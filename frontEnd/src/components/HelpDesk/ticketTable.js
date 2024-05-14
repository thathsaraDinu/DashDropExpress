import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
} from "@mui/material";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useNavigate } from "react-router-dom";

const TicketTable = ({ rows, selectedUser, deleteUser }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [
        ["Customer ID", "Customer Name", "Customer Inquiry", "Inquiry Date"],
      ],
      body: rows.map((row) => [
        row.id,
        row.cname,
        row.inquery,
        row.date ? row.date.split("T")[0] : "",
        "",
      ]),
    });
    doc.save("Feedback_Table.pdf");
  };

  const filteredRows = rows.filter((row) =>
    row.id?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-20">
      <div
        style={{
          width: "25%",
          background: "#ffffff",
          backgroundColor: "rgba(192,192,192,0.7)",
        }}
      >
        <TextField
          id="search"
          label="Search by Customer Id"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
        />
      </div>
      <TableContainer component={Paper}>
        <Table
          sx={{
            border: "3px solid #000000",
            background: "#ffffff",
            backgroundColor: "rgba(192,192,192,0.8)",
          }}
        >
          <TableHead>
            <TableRow sx={{ border: "3px solid #000000" }}>
              <TableCell
                sx={{
                  fontSize: "18px",
                  fontWeight: "900",
                  textAlign: "center",
                }}
              >
                Customer ID
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "18px",
                  fontWeight: "900",
                  textAlign: "center",
                }}
              >
                Customer Name
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "18px",
                  fontWeight: "900",
                  textAlign: "center",
                }}
              >
                Customer Inquiry
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "18px",
                  fontWeight: "900",
                  textAlign: "center",
                }}
              >
                Inquiry Date
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "18px",
                  fontWeight: "900",
                  textAlign: "center",
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.length > 0 ? (
              filteredRows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell align="center">{row.cname}</TableCell>
                  <TableCell align="center">{row.inquery}</TableCell>
                  <TableCell align="center">
                    {row.date ? row.date.split("T")[0] : ""}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      className="btn4"
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        selectedUser({
                          id: row.id,
                          cname: row.cname,
                          inquery: row.inquery,
                          date: row.date,
                        })
                      }
                    >
                      Update
                    </Button>
                    <Button
                      className="btn6"
                      variant="contained"
                      color="primary"
                      onClick={() => deleteUser({ id: row.id })}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No Data
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="mt-10 w-full flex justify-center">
        <Button variant="contained" color="primary" onClick={handleDownloadPdf}>
          Download PDF
        </Button>
      </div>
    </div>
  );
};

export default TicketTable;
