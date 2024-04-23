import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const TicketsTable = ({ rows, selectedUser, deleteUser }) => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <TableContainer
        sx={{ backgroundColor: "rgba(192,192,192,0.6)" }}
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
                  textAlign: "center",
                }}
              >
                ORDER NUMBER
              </TableCell>
              <TableCell
                sx={{
                  border: "3px solid #000000",
                  fontSize: "18px",
                  fontWeight: "900",
                  textAlign: "center",
                }}
              >
                CUSTOMER NAME
              </TableCell>
              <TableCell
                sx={{
                  border: "3px solid #000000",
                  fontSize: "18px",
                  fontWeight: "900",
                  textAlign: "center",
                }}
              >
                CUSTOMER INQUERY
              </TableCell>
              <TableCell
                sx={{
                  border: "3px solid #000000",
                  fontSize: "18px",
                  fontWeight: "900",
                  textAlign: "center",
                }}
              >
                INQUERY DATE
              </TableCell>
              <TableCell
                sx={{
                  border: "3px solid #000000",
                  fontSize: "18px",
                  fontWeight: "900",
                  textAlign: "center",
                }}
              >
                ACTIONS
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
                    {row.cname}
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
                    {row.inquery}
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
                    {row.date ? row.date.split("T")[0] : ""}
                  </TableCell>
                  <TableCell>
                    <button
                      className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                      sx={{ margin: "0px 10px" }}
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
                    </button>
                    <button
                      className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
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
    </div>
  );
};
export default TicketsTable;




