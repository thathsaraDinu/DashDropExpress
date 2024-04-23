import {
  Container,
  Grid,
  Input,
  Link,
  Typography,
  colors,
} from "@mui/material";
import { useEffect, useState } from "react";

const TicketForm = ({ addUser, updateUser, submitted, data, isEdit }) => {
  const [id, setId] = useState();
  const [cname, setCname] = useState("");
  const [inquery, setInquery] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (!submitted) {
      setId();
      setCname("");
      setInquery("");
      setDate("");
    }
  }, [submitted]);

  useEffect(() => {
    if (data?.id && data.id !== 0) {
      setId(data.id);
      setCname(data.cname);
      setInquery(data.inquery);
      setDate(data.date);
    }
  }, [data]);

  return (
    <form
      onSubmit={() =>
        isEdit
          ? updateUser({
              id,
              cname,
              inquery,
              date,
            })
          : addUser({ id,cname,inquery,date })
      }
    >
      <Grid
        Container
        spacing={2}
        sx={{
          backgroundColor: "rgba(192,192,192,0.6)",
          border: "3px solid #000000",
          marginBottom: "50px",
          marginLeft: "280px",
          display: "block",
          width: "900px",
          height: "500px",
          marginTop: "10px",
        }}
      >
        <Grid item xs={12}>
          <Typography
            component={"h1"}
            sx={{
              color: "#000000",
              marginRight: "20px",
              marginLeft: "250px",
              marginTop: "20px",
              fontSize: "50px",
              width: "500px",
              display: "block",
              fontWeight: "bold",
            }}
          >
            Submit Ticket
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
          <Typography
            component={"label"}
            htmlFor="id"
            sx={{
              color: "#000000",
              marginRight: "20px",
              marginLeft: "100px",
              marginTop: "50px",
              fontSize: "20px",
              width: "200px",
              display: "block",
              fontWeight: "900",
            }}
          >
            Ticket Number
          </Typography>
          <Input
            required
            type="text"
            id="id"
            name="id"
            sx={{
              width: "400px",
              marginTop: "50px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
          <Typography
            component={"label"}
            htmlFor="id"
            sx={{
              color: "#000000",
              marginRight: "20px",
              marginLeft: "100px",
              marginTop: "10px",
              fontSize: "20px",
              width: "200px",
              display: "block",
              fontWeight: "900",
            }}
          >
            Customer Name
          </Typography>
          <Input
            required
            type="text"
            id="cname"
            name="cname"
            sx={{
              width: "400px",
              marginTop: "10px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
            value={cname}
            onChange={(e) => setCname(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
          <Typography
            component={"label"}
            htmlFor="id"
            sx={{
              color: "#000000",
              marginRight: "20px",
              marginLeft: "100px",
              marginTop: "10px",
              fontSize: "20px",
              width: "200px",
              display: "block",
              fontWeight: "900",
            }}
          >
            Customer Inquery
          </Typography>
          <Input
            required
            type="text"
            id="inquery"
            name="inquery"
            sx={{
              width: "400px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
            value={inquery}
            onChange={(e) => setInquery(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
          <Typography
            component={"label"}
            htmlFor="date"
            sx={{
              color: "#000000",
              marginRight: "20px",
              marginLeft: "100px",
              marginTop: "10px",
              fontSize: "20px",
              width: "200px",
              display: "block",
              fontWeight: "900",
            }}
          >
           Inquery Date
          </Typography>
          <Input
            required
            type="date"
            id="date"
            name="date"
            sx={{
              width: "400px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
            value={date.split("T")[0]}
            onChange={(e) => setDate(e.target.value)}
          />
        </Grid>

        <button type="submit" className="user">
          {isEdit ? "Update" : "Submit"}
        </button>
      </Grid>
    </form>
  );
};

export default TicketForm;
