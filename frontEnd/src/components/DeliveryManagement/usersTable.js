import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  colors,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UsersTable = ({ rows, selectedUser, deleteUser }) => {
  const navigate = useNavigate();
  return (
    <div>
      <TableContainer
        sx={{ backgroundColor: "rgba(192,192,192,0.3)" }}
        component={Paper}
      >
        <Table
          sx={{
            border: "3px solid #000000",
          }}
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
              rows.map((row) => (
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

      <button className="user1" onClick={() => navigate("/driverdelivery")}>
        View Driver's Page
      </button>
    </div>
  );
};
export default UsersTable;

