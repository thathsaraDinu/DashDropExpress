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

const DriverTable = ({ rows }) => {
  const handleAcceptOrder = (orderId) => {
    alert("Driver has completely accepted the order for Order ID: " + orderId);
  };

  const handleDelivered = (orderId) => {
    alert("Driver has completely Delivered the order for Order ID: " + orderId);
  };

  return (
    <div>
     <h1 className="driver">Assign order Details Page for Drivers</h1>

      <TableContainer component={Paper}>
        <Table
          sx={{
            backgroundColor: "rgba(0,0,255,0.3)",
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
                Driver Status
              </TableCell>
              <TableCell
                sx={{
                  border: "3px solid #000000",
                  fontSize: "18px",
                  fontWeight: "900",
                  textAlign: "center",
                }}
              >
                Delivery Status
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
                      className="btn3"
                      sx={{ margin: "0px 10px" }}
                      onClick={() => handleAcceptOrder(row.id)}
                    >
                      Accept Order
                    </button>
                    <button
                      className="btn4"
                      sx={{ margin: "10px 20px" }}
                      onClick={() =>
                        alert("Driver Reject the order for order Id: " + row.id)
                      }
                    >
                      Reject Order
                    </button>
                  </TableCell>

                  <TableCell>
                    <button
                      className="btn5"
                      sx={{ margin: "0px 10px" }}
                      onClick={() => handleDelivered(row.id)}
                    >
                      Delivered Order
                    </button>
                    <button
                      className="btn6"
                      sx={{ margin: "10px 20px" }}
                      onClick={() =>
                        alert("Delayed order for order Id: " + row.id)
                      }
                    >
                      Delayed Order
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
export default DriverTable;
