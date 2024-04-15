import { useEffect, useState } from "react";
import './App.css';
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { Grid, Input, Typography } from "@mui/material";
import {  useNavigate, useParams } from "react-router-dom";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};



function UpdateStarRatings() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [drivernumber, setDrivernumber] = useState("");
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [description, setDescription] = useState("")
  const stars = Array(5).fill(0)
  const navigate = useNavigate();
  console.log(id)

  const handleClick = value => {

    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }
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
        description
      })
      .then((result) => {
        navigate("/DriversFeedback")
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "rgba(43, 86, 232,0.3)",
          border: "3px solid #000000",
          marginBottom: "50px",
          marginLeft: "300px",
          display: "block",
          width: "600px",
          height: "650px",
          marginTop: "10px",
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
            }}
          >
            Feedback Form
          </Typography>
        </Grid>
        
        <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
          <Typography
            component={"label"}
            htmlFor="name"
            sx={{
              color: "#000000",
              marginRight: "10px",
              marginLeft: "50px",
              marginTop: "20px",
              fontSize: "20px",
              width: "200px",
              display: "block",
              fontWeight: "900",
            }}
          >
            Name
          </Typography>
          <Input
            required
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            name="name"
            sx={{
              width: "400px",
              marginTop: "20px",
              fontWeight: "normal",
              fontSize: "18px",

            }}
            value={name}
           
          />
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
          <Typography
            component={"label"}
            htmlFor="name"
            sx={{
              color: "#000000",
              marginRight: "20px",
              marginLeft: "40px",
              marginTop: "20px",
              fontSize: "20px",
              width: "200px",
              display: "block",
              fontWeight: "900",
            }}
          >
            Driver number
          </Typography>
          <Input
            required
            type="text"
            id="name"
            onChange={(e) => setDrivernumber(e.target.value)}
            name="name"
            sx={{
              width: "400px",
              marginTop: "40px",
              fontWeight: "normal",
              fontSize: "18px",
            }}
            value={drivernumber}
           
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
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
              value={currentValue}
            />
          )
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
        width: 300,
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
        
       </Grid>
    
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
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
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
  

};




export default UpdateStarRatings;
 