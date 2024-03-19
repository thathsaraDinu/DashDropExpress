
import { Container, Grid, Input, Link, Typography, colors } from "@mui/material";
import { useEffect, useState } from "react";

const Userform = ({ addUser, updateUser, submitted, data, isEdit }) => {
  const [id, setId] = useState();
  const [did, setDid] = useState();
  const [d_name, setDname] = useState();
  const [c_name, setCname] = useState();
  const [address, setAddress] = useState("");
  const [instruction, setInstruction] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (!submitted) {
      setId(0);
      setDid(0);
      setDname("");
      setCname("");
      setAddress("");
      setInstruction("");
      setDate("");
    }
  }, [submitted]);

  useEffect(() => {
    if (data?.id && data.id !== 0) {
      setId(data.id);
      setDid(data.did);
      setDname(data.d_name);
      setCname(data.c_name);
      setAddress(data.address);
      setInstruction(data.instruction);
      setDate(data.date);
    }
  }, [data]);

  return (
    <form
      onSubmit={() =>
        isEdit
          ? updateUser({
              id,
              did,
              d_name,
              c_name,
              address,
              instruction,
              date,
            })
          : addUser({ id, did, d_name, c_name, address, instruction, date })
      }
    >
      <Grid
        Container
        spacing={2}
        sx={{
          backgroundColor: "rgba(192,192,192,0.3)",
          border: "3px solid #000000",
          marginBottom: "50px",
          marginLeft: "280px",
          display: "block",
          width: "900px",
          height: "600px",
          marginTop: "10px",
        }}
      >
        <Grid item xs={12}>
          <Typography
            component={"h1"}
            sx={{
              color: "#000000",
              marginRight: "20px",
              marginLeft: "200px",
              marginTop: "20px",
              fontSize: "50px",
              width: "500px",
              display: "block",
              fontWeight: "bold",
            }}
          >
            Order Delivery Form
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
            Order Number
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
            Driver Number
          </Typography>
          <Input
            required
            type="text"
            id="did"
            name="did"
            sx={{
              width: "400px",
              marginTop: "10px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
            value={did}
            onChange={(e) => setDid(e.target.value)}
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
            Driver Name
          </Typography>
          <Input
            required
            type="text"
            id="d_name"
            name="d_name"
            sx={{
              width: "400px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
            value={d_name}
            onChange={(e) => setDname(e.target.value)}
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
            id="c_name"
            name="c_name"
            sx={{
              width: "400px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
            value={c_name}
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
            Delivery Address
          </Typography>
          <Input
            required
            type="text"
            id="address"
            name="address"
            sx={{
              width: "400px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
              width: "250px",
              display: "block",
              fontWeight: "900",
            }}
          >
            Special Instructions
          </Typography>
          <Input
            required
            type="text"
            id="instruction"
            name="instruction"
            sx={{
              width: "400px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
            value={instruction}
            onChange={(e) => setInstruction(e.target.value)}
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
            Delivery Date
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
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Grid>

        <button type="submit" className="user">
          {isEdit ? "Update" : "Add"}
        </button>
      </Grid>
    </form>

  );
};

export default Userform;
