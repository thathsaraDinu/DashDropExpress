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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";

const UsersTable = ({ rows, selectedUser, deleteUser }) => {
  const navigate = useNavigate();

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    doc.autoTable({
      html: "#table-to-pdf",
      excludeColumns: [7],
    });
    doc.save("Table.pdf");
  };

  const [searchQuery, setSearchQuery] = useState("");

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
              placeholder="Search Full Name"
              onChange={(e) => setSearchQuery(e.target.value)}
              required
            />
          </div>
        </div>
      </div>
      <TableContainer
        sx={{ backgroundColor: "rgba(192,192,192,0.8)" }}
        component={Paper}
      >
        <Table
          sx={{
            border: "3px solid #000000",
          }}
          id="table-to-pdf"
        >
          <TableHead>
            <TableRow
              sx={{
                border: "3px solid #000000",
              }}
            >
              <TableCell
                sx={{
                  border: "3px solid #000000",
                  fontSize: "18px",
                  fontWeight: "900",
                }}
              >
                Order Number
              </TableCell>
              <TableCell
                sx={{
                  border: "3px solid #000000",
                  fontSize: "18px",
                  fontWeight: "900",
                }}
              >
                Driver Number
              </TableCell>
              <TableCell
                sx={{
                  border: "3px solid #000000",
                  fontSize: "18px",
                  fontWeight: "900",
                }}
              >
                Driver Name
              </TableCell>
              <TableCell
                sx={{
                  border: "3px solid #000000",
                  fontSize: "18px",
                  fontWeight: "900",
                }}
              >
                Customer Name
              </TableCell>
              <TableCell
                sx={{
                  border: "3px solid #000000",
                  fontSize: "18px",
                  fontWeight: "900",
                  textAlign: "center",
                }}
              >
                Delivery Address
              </TableCell>
              <TableCell
                sx={{
                  border: "3px solid #000000",
                  fontSize: "18px",
                  fontWeight: "900",
                }}
              >
                Special Instructions
              </TableCell>
              <TableCell
                sx={{
                  border: "3px solid #000000",
                  fontSize: "18px",
                  fontWeight: "900",
                }}
              >
                Delivery Date
              </TableCell>
              <TableCell
                sx={{
                  border: "3px solid #000000",
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
            {rows.length > 0 ? (
              rows
                .filter((row) =>
                  row.d_name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((row) => (
                  <TableRow
                    key={row.id}
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
                        textAlign: "center",
                        fontWeight: "900",
                      }}
                    >
                      {row.id}
                    </TableCell>
                    <TableCell
                      component={"th"}
                      scope="row"
                      sx={{
                        fontSize: "15px",
                        textAlign: "center",
                        fontWeight: "900",
                      }}
                    >
                      {row.did}
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
                      {row.d_name}
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
                      {row.c_name}
                    </TableCell>
                    <TableCell
                      component={"th"}
                      scope="row"
                      sx={{ fontSize: "15px", fontWeight: "900" }}
                    >
                      {row.address}
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
                      {row.instruction}
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
                      {row.date ? row.date.split("T")[0] : ""}
                    </TableCell>
                    <TableCell>
                      <button
                        className="btn1"
                        sx={{ margin: "0px 10px" }}
                        onClick={() =>
                          selectedUser({
                            id: row.id,
                            did: row.did,
                            d_name: row.d_name,
                            c_name: row.c_name,
                            address: row.address,
                            instruction: row.instruction,
                            date: row.date,
                          })
                        }
                      >
                        Update
                      </button>
                      <button
                        className="btn2"
                        sx={{
                          margin: "10px 20px",
                        }}
                        onClick={() => deleteUser({ id: row.id })}
                      >
                        Delete
                      </button>
                    </TableCell>
                  </TableRow>
                ))
            ) : (
              <TableRow
                sx={{ "&:last-child td,&:last-child th": { border: 0 } }}
              >
                <TableCell component={"th"} scope="row">
                  No Data
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="text-center mt-4">
        <Button variant="contained" color="primary" onClick={handleDownloadPdf}>
          Download PDF
        </Button>
      </div>
      <button className="user1" onClick={() => navigate("/driverdelivery")}>
        View Driver's Page
      </button>
    </div>
  );
};
export default UsersTable;
