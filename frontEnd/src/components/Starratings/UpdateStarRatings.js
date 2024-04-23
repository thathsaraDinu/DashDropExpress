import { useEffect, useState } from "react";
import "./App.css";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { Grid,  Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function UpdateStarRatings() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [drivernumber, setDrivernumber] = useState("");
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [description, setDescription] = useState("");
  const stars = Array(5).fill(0);
  const navigate = useNavigate();
  console.log(id);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/getfeedbackbyid/" + id)
      .then((response) => {
        console.log(response);
        setName(response.data.name);
        setDrivernumber(response.data.drivernumber);
        setCurrentValue(response.data.currentValue);
        setDescription(response.data.description);
      })

      .catch((error) => console.error("Axios Error : ", error));
  }, [id]);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/api/updatefeedbacks/" + id, {
        name,
        drivernumber,
        currentValue,
        description,
      })
      .then((result) => {
        navigate("/DriversFeedback");
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
      
      style={{
        backgroundColor: "rgba(43, 149, 232,0.8)",
        border: "3px solid #000000",
        marginBottom: "50px",
        marginLeft: "300px",
        display: "block",
        width: "600px",
        height: "650px",
        padding:"10px"
        

      }}
    >
      <Grid item>
        <Typography
          component={"h1"}
          sx={{
            color: "#000000",
            textAlign:"center",
            marginTop: "20px",
            fontSize: "50px",
            display: "block",
            fontWeight: "bold",
            marginBottom: "30px",
            fontFamily:"jost"

          }}
        >
          Feedback Form
        </Typography>
      </Grid>

      <Grid sx={{ display: "flex", flexDirection:"row", marginX:"40px", alignItems:"center", justifyContent:"center" }}>
        <Typography
          component={"label"}
          htmlFor="name"
          sx={{
             color: "#000000",
            marginRight: "20px",
            marginTop: "20px",
            fontSize: "20px",
            width:"200px",
            display: "block",
            textAlign:"left",
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
          value={name} 
          name="name"
          className="appearance-none  w-full block border-2 border-grey outline-none focus:border-black hover:border-gray-400 px-2 py-2"
          style={{ marginBottom: "10px" }}
        />
      </Grid>

      <Grid sx={{ display: "flex", marginX:"40px",flexDirection:"row", alignItems:"center", justifyContent:"center", marginBottom:"20px" }}>
        <Typography
          component={"label"}
          htmlFor="name"
          sx={{
            color: "#000000",
            marginRight: "20px",
            marginTop: "20px",
            fontSize: "20px",
            width:"200px",
            display: "block",
            textAlign:"right",
            fontWeight: "900",
            marginBottom: "30px",
          }}
        >
          Driver number
        </Typography>
        <input
          required
          type="text" // Changed to type number for numeric input
          id="drivernumber"
          onChange={(e) => setDrivernumber(e.target.value)}
          value={drivernumber}
          name="drivernumber"
          className="appearance-none w-full block border-2 border-grey outline-none focus:border-black hover:border-gray-400 px-2 py-2"
          style={{ marginBottom: "10px" }}
        />
      </Grid>
      <div style={styles.container}>
        <h2> React Ratings </h2>
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
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
                value={currentValue}
              />
            );
          })}
        </div>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          placeholder="What's your experience?"
          style={styles.textarea}
          value={description}
        />

        <button
          onClick={Update}
          style={{
            border: "1px solid #a9a9a9",
            borderRadius: 5,
            width: 100,
            padding: 10,
            backgroundColor: "#3A09E7",
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          className="button"
        >
          Update
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

export default UpdateStarRatings;
