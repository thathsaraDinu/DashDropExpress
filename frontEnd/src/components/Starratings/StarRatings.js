import React, { useState } from "react";
import "./App.css";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { Grid, Typography } from "@mui/material";


const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function StarRatings() {
  const [name, setName] = useState("");
  const [drivernumber, setDrivernumber] = useState("");
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [description, setDescription] = useState("");
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleChangeDriverNumber = (e) => {
    const newValue = e.target.value;
    if (newValue < 0) {
      alert("Please enter a positive number for the driver number.");
      return;
    }
    setDrivernumber(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/createfeedbacks", {
        name,
        drivernumber,
        currentValue,
        description,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{
      
      paddingTop: "100px",

    }}>
    <form
      container
      spacing={2}
      style={{
        backgroundColor: "rgba(43, 149, 232,4)",
        border: "3px solid #000000",
        marginBottom: "50px",
        marginLeft: "300px",
        display: "block",
        width: "600px",
        height: "650px",
        

      }}
    >
      <Grid item xs={12}>
        <Typography
          component={"h1"}
          sx={{
            color: "#000000",
            marginRight: "20px",
            marginLeft: "100px",
            marginTop: "10px",
            fontSize: "50px",
            width: "500px",
            display: "block",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          Feedback Form
        </Typography>
      </Grid>

      <Grid item xs={12} sm={12} sx={{ display: "flex", marginRight: "40px" }}>
        <Typography
          component={"label"}
          htmlFor="name"
          sx={{
            color: "#000000",
            marginRight: "10px",
            marginLeft: "50px",
            marginTop: "20px",
            fontSize: "18px",
            width: "200px",
            display: "block",
            fontWeight: "900",
            marginBottom: "30px",
          }}
        >
          Name
        </Typography>
        <input
          required
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          name="name"
          className="appearance-none  w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-2 px-2 py-2"
          style={{ marginBottom: "30px" }}
        />
      </Grid>

      <Grid item xs={12} sx={{ display: "flex", marginRight: "40px" }}>
        <Typography
          component={"label"}
          htmlFor="name"
          sx={{
            color: "#000000",
            marginRight: "20px",
            marginLeft: "40px",
            marginTop: "20px",
            fontSize: "18px",
            width: "200px",
            display: "block",
            fontWeight: "900",
          }}
        >
          Driver number
        </Typography>
        <input
          required
          type="text" // Changed to type number for numeric input
          id="drivernumber"
          onChange={handleChangeDriverNumber}
          value={drivernumber}
          name="drivernumber"
          className="appearance-none w-full block border-b-2 border-grey outline-none focus:border-black hover:border-gray-400 py-2 px-2 py-2"
        />
      </Grid>

      {/* Rest of your form */}

      <div style={styles.container}>
        <h2 style={{ marginTop: "50px" }}>Give your ratings </h2>
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                required
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={
                  (hoverValue || currentValue) > index
                    ? colors.orange
                    : colors.grey
                }
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
            );
          })}
        </div>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add a comment here:"
          style={styles.textarea}
        />

        <button
          onClick={handleSubmit}
          style={{
            border: "1px solid #a9a9a9",
            borderRadius: 5,
            width: 300,
            padding: 10,
            backgroundColor: "#3A09E7",
            color: "black",
            fontSize: 16,
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          className="button"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
};

export default StarRatings;
