import { Button, Grid, Input, Select, MenuItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Studentform = ({addStudent,updateStudent,submitted,isEdit,data}) => {
  const [vin, setVin] = useState('0');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [model, setModel] = useState('');
  const [selectedyear,setSelectedYear]=useState('');
  const [insuranceDetails,setInsuranceDetails]=useState('');
  
  const years= [];
  for (let year = 2000; year <= 2020; year++) {
    years.push(year);
  }
  const handleSubmit = () => {
    if (vin.length > 5) {
      alert('VIN should not exceed 5 characters.');
      return;
    }
    if (!vin) {
      alert('Please enter the vin Number.');
      return;
    }
    if (!registrationNumber) {
      alert('Please enter the Registration Number.');
      return;
    }
    if (!vehicleType) {
      alert('Please enter the vehicle Type.');
      return;
    }
    if (!model) {
      alert('Please enter the model.');
      return;
    }
    if (!selectedyear) {
      alert('Please enter selected year.');
      return;
    }
      if (!insuranceDetails) {
        alert('Please enter insurance details.');
        return;
      }


    if (isEdit) {
      updateStudent({ vin, registrationNumber, vehicleType, model, selectedyear, insuranceDetails });
    } else {
      addStudent({ vin, registrationNumber, vehicleType, model, selectedyear, insuranceDetails });
    }
  };


  useEffect(() => {
    if(!submitted){
      setVin(0);
      setRegistrationNumber('');
      setVehicleType('');
      setModel('');
      setSelectedYear('');
      setInsuranceDetails('');

    }

    },[submitted]);
   
   useEffect(() => {
     if (data?.vin && data.vin !==0){
      setVin(data.vin);
      setRegistrationNumber(data.registrationNumber);
      setVehicleType(data.vehicleType);
      setModel(data.model);
      setSelectedYear(data.selectedyear);
      setInsuranceDetails(data.insuranceDetails);
     }
     },[data]);
     
   
     
  return (
    <Grid
      container
      spacing={2}
      sx={{
        
        backgroundColor: "#ffffff",
        marginBottom: "30px",
        width:"500px",  // Fix the width property
        marginLeft:'50px',
        marginTop:'50px',
        border: '#1px solid #333',
        padding:"30px",
        borderRadius: "20px", 
        
      }}
      
    >
      <Grid sx={{ width:"100%", display: 'flex',
        flexDirection: 'column', gap:"20px" }}>
        <Typography component={'h1'} sx={{ color: '#000000', fontSize: '24px', textAlign: 'center'  }}> Add Vehicle Details</Typography>
      

      <Grid  sx={{ display: 'flex', flexDirection: 'row' }}>
        <Typography
          component={'label'}
          htmlFor="vin"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "250px",
            display: "block",
          }}
        >
          VIN
        </Typography>
        <Input
          type="Number"
          id="vin"
          name="vin"
          sx={{ width: "400px" }}
          value={vin}
          onChange={(e) => setVin(e.target.value)}
        />
      </Grid>

      <Grid  sx={{ display: "flex", flexDirection: 'row' }}>
        <Typography
          component={'label'}
          htmlFor="registrationNumber"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "250px",
            display: "block",
          }}
        >
          Registration Number
        </Typography>
        <Input
          type="text"
          id="registrationNumber"
          name="registrationNumber"
          sx={{ width: "400px" }}
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
        />
      </Grid>

  
      <Grid   sx={{ display: 'flex', flexDirection: 'row' }}>
        <Typography
          component={'label'}
          htmlFor="vehicleType"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "250px",
            display: "block",
          }}
        >
          Vehicle Type
        </Typography>
        <Select
          id="vehicleType"
          name="vehicleType"
          sx={{ width: "400px" }}
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
        >
          <MenuItem value="car">Car</MenuItem>
          <MenuItem value="bike">Bike</MenuItem>
          <MenuItem value="threeWheelers">Three Wheelers</MenuItem>
          <MenuItem value="van">Van</MenuItem>
        </Select>
      </Grid>
      <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
  <Typography
    component={'label'}
    htmlFor="model"
     sx={{
        color: "#000000",
        marginRight: "20px",
        fontSize: "16px",
        width: "250px",
        display: "block",
    }}
      >
        Model
       </Typography>
       <Input
          type="text"
          id="model"
          name="model"
          sx={{ width: "400px" }}
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
      </Grid>

      <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
      <Typography
        component={'label'}
        htmlFor="year"
        sx={{
          color: "#000000",
          marginRight: "20px",
          fontSize: "16px",
          width: "250px",
          display: "block",
        }}
      >
        Year
      </Typography>
      <Select
        id="year"
        name="year"
        sx={{ width: "400px" }}
        value={selectedyear}
        onChange={(e) => setSelectedYear(e.target.value)}
        
      >
        {years.map(year => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
        </Select>
      </Grid>

  <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
    <Typography
      component={'label'}
      htmlFor="insuranceDetails"
      sx={{
        color: "#000000",
        marginRight: "20px",
        fontSize: "16px",
        width: "250px",
        display: "block",
      }}
    >
      Insurance Details
    </Typography>
    <Input
      type="text"
      id="insuranceDetails"
      name="insuranceDetails"
      sx={{ width: "400px" }}
      value={insuranceDetails}
      onChange={(e) => setInsuranceDetails(e.target.value)}
    />
  
</Grid>



      <Button
        sx={{
          margin: "auto",
          marginBottom: "20px",
          backgroundColor: "#008000",
          color: "#FFFFFF",
          marginTop: "20px",
          "&:hover": {
            opacity: 0.7,
            backgroundColor: "#008000",
          },
          
        }}
        onClick={handleSubmit}
      >
        {
          isEdit ? 'update' :'submit'
        }
      </Button>
      
</Grid>
    </Grid>
  );
};

export default Studentform;
