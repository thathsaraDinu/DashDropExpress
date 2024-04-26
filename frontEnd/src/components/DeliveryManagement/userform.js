import { Grid, Input, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Userform = ({ addUser, updateUser, submitted, data, isEdit }) => {
  const [id, setId] = useState("");
  const [did, setDid] = useState("");
  const [d_name, setDname] = useState("");
  const [c_name, setCname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [instruction, setInstruction] = useState("");
  const [date, setDate] = useState("");
  const [orderNumberError, setOrderNumberError] = useState("");
  const [isOrderNumberValid, setIsOrderNumberValid] = useState(false);
  const [driverNumberError, setDriverNumberError] = useState("");
  const [isDriverNumberValid, setIsDriverNumberValid] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);

  useEffect(() => {
    if (!submitted) {
      clearForm();
    }
  }, [submitted]);

  useEffect(() => {
    if (data?.id && data.id !== 0) {
      setId(data.id);
      setDid(data.did);
      setDname(data.d_name);
      setCname(data.c_name);
      setPhoneNumber(data.phoneNumber);
      setAddress(data.address);
      setInstruction(data.instruction);
      setDate(data.date);
      setIsOrderNumberValid(true);
      setIsDriverNumberValid(true);
      setIsPhoneNumberValid(true);
    }
  }, [data]);

  const clearForm = () => {
    setId();
    setDid();
    setDname("");
    setCname("");
    setPhoneNumber();
    setAddress("");
    setInstruction("");
    setDate("");
    setOrderNumberError("");
    setIsOrderNumberValid(false);
    setDriverNumberError("");
    setIsDriverNumberValid(false);
    setPhoneNumberError("");
    setIsPhoneNumberValid(false);
  };

  const handleOrderNumberChange = (value) => {
    if (/^O\d{3}$/.test(value)) {
      setId(value);
      setIsOrderNumberValid(true);
      setOrderNumberError("");
    } else {
      setOrderNumberError(
        "Order number must start with O and contain 3 numbers."
      );
      setIsOrderNumberValid(false);
    }
  };

   const handleDriverNumberChange = (value) => {
     if (/^D\d{3}$/.test(value)) {
       setDid(value);
       setIsDriverNumberValid(true);
       setDriverNumberError("");
     } else {
       setDriverNumberError(
         "Driver number must start with D and contain 3 numbers."
       );
       setIsDriverNumberValid(false);
     }
   };

  const handlePhoneNumberChange = (value) => {
    if (/^\d{10}$/.test(value)) {
      setPhoneNumber(value);
      setIsPhoneNumberValid(true);
      setPhoneNumberError("");
    } else {
      setPhoneNumberError("Phone number must contain 10 digits.");
      setIsPhoneNumberValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isOrderNumberValid && isPhoneNumberValid && isDriverNumberValid) {
      isEdit
        ? updateUser({
            id,
            did,
            d_name,
            c_name,
            phoneNumber,
            address,
            instruction,
            date,
          })
        : addUser({
            id,
            did,
            d_name,
            c_name,
            phoneNumber,
            address,
            instruction,
            date,
          });

      clearForm();
    }

       setId("");
       setDid("");
       setPhoneNumber("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid
          sx={{
            backgroundColor: "rgba(192,192,192,0.6)",
            border: "3px solid #000000",
            marginBottom: "50px",
            marginLeft: "280px",
            display: "block",
            marginTop: "100px",
            width: "900px",
            height: "650px",
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
                width: "450px",
                marginTop: "30px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              value={id}
              error={orderNumberError !== ""}
              onChange={(e) => handleOrderNumberChange(e.target.value)}
              disabled={isOrderNumberValid}
            />
            {orderNumberError && (
              <Typography sx={{ color: "red", marginTop: "5px" }}>
                {orderNumberError}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
            <Typography
              component={"label"}
              htmlFor="id"
              sx={{
                color: "#000000",
                marginRight: "20px",
                marginLeft: "100px",
                marginTop: "17px",
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
                width: "450px",
                marginTop: "10px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              value={did}
              error={driverNumberError !== ""}
              onChange={(e) => handleDriverNumberChange(e.target.value)}
              disabled={isDriverNumberValid}
            />
            {driverNumberError && (
              <Typography sx={{ color: "red", marginTop: "5px" }}>
                {driverNumberError}
              </Typography>
            )}
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
                width: "450px",
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
                width: "450px",
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
                width: "250px",
                display: "block",
                fontWeight: "900",
              }}
            >
              Customer Number
            </Typography>
            <Input
              required
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              sx={{
                width: "400px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              value={phoneNumber}
              error={phoneNumberError !== ""}
              onChange={(e) => handlePhoneNumberChange(e.target.value)}
              disabled={isPhoneNumberValid}
            />
            {phoneNumberError && (
              <Typography sx={{ color: "red", marginTop: "5px" }}>
                {phoneNumberError}
              </Typography>
            )}
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
                width: "450px",
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
                width: "450px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              value={date.split("T")[0]}
              onChange={(e) => setDate(e.target.value)}
            />
          </Grid>

          <button type="submit" className="user z-1000">
            {isEdit ? "Update" : "Add"}
          </button>
        </Grid>
      </form>
    </div>
  );
};

export default Userform;
