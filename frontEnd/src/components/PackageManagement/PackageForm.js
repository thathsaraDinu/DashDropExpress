import {
  Button,
  Grid,
  Input,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { useEffect, useState } from "react";

const PackageForm = ({
  addPackage,
  updatePackage,
  submitted,

  data,
  isEdit,
}) => {
  const [id, setId] = useState(0);
  const [customerName, setCustomerName] = useState("");
  const [packageType, setPackageType] = useState("");
  const [packageWeight, setPackageWeight] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  /*function PackageType() {
    const [selectedItem, setSelectedItem] = useState('');
  }*/

  useEffect(() => {
    if (!submitted) {
      setId(0);
      setCustomerName("");
      setPackageType("");
      setPackageWeight("");
    }
  }, [submitted]);

  useEffect(() => {
    if (data?.id && data.id !== 0) {
      setId(data.id);
      setCustomerName(data.customerName);
      setPackageType(data.packageType);
      setPackageWeight(data.packageWeight);
      console.log("Package: "+packageType);
    }
  }, [data]);

  return (
    <div
      
      
      style={{
        
        width:"600px",  // Fix the width property
        marginLeft:'50px',
        marginTop:'100px',
        border: '#1px solid #333',
        padding:"20px",
        borderRadius: "20px", 
        backgroundColor:"white",
      marginBottom:"50px",
      display:"flex",
      flexDirection:"column",
      gap:"10px",
      
        
      }}
      
    >
      <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", justifyContent:"center", alignItems:"center" }}>
        <Typography  sx={{ color: "#000000" }}>
          <span style={{fontFamily:"Jost"}} className="text-2xl mb-10">Package Form</span>
          
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: "flex", flexDirection: "row", justifyContent:"space-between", alignItems:"center" }}>
        <Typography
          component={"label"}
          htmlFor="id"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          ID
        </Typography>
        <Input
        required
          type="text"
          id="id"
          name="id"
          sx={{ width: "400px" }}
          value={id}
          
          onBlur={()=>{
            if(id.length>4){
              alert('Id must be less than 4');
              return;
            }
            
          }}
          onChange={(e) => setId(e.target.value)}
        />
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: "flex", flexDirection: "row" , justifyContent:"space-between", alignItems:"center"}}>
        <Typography
          component={"label"}
          htmlFor="customerName"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          Customer Name
        </Typography>
        <Input
          type="text"
          id="customerName"
          name="customerName"
          sx={{ width: "400px" }}
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6} sx={{ display: "flex", flexDirection: "row", justifyContent:"space-between", alignItems:"center" }}>
        <Typography
          component={"label"}
          htmlFor="packageType"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          Package Type
        </Typography>
        <Select
          id="item"
          value={selectedItem}
          onChange={(e) => setSelectedItem(e.target.value)}
          sx={{ width: "400px" }}
        >
          <MenuItem value="Plastic">Plastic</MenuItem>
          <MenuItem value="Glass">Glass</MenuItem>
          <MenuItem value="Electrical items">Electrical items</MenuItem>
          <MenuItem value="Foods">Foods</MenuItem>
        </Select>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        sx={{ display: "flex", flexDirection: "row",justifyContent:"space-between", alignItems:"center" }}
      >
        <Typography
          component="label"
          htmlFor="packageWeight"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "150px",
            display: "block",
          }}
        >
          Package Weight
        </Typography>
        <Input
          type="text"
          id="packageWeight"
          name="packageWeight"
          sx={{ width: "400px" }}
          value={packageWeight}
          onChange={(e) => setPackageWeight(e.target.value)}
          onBlur={()=>{
            if(packageWeight.length>5){
              alert('Length must be less than 5');
              return;
            }
          }}

        />
      </Grid>
<Grid sx={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", width:"100%"}}>
      <Button
        sx={{
          margin: "auto",
          marginBottom: "20px",
          backgroundColor: "#00c6e6",
          color: "#000000",
          marginLeft: "15px",
          marginTop: "20px",
          "&:hover": {
            opacity: 0.7,
            backgroundColor: "#00c6e6",
          },
          
        }}
        onClick={() =>
          isEdit
            ? updatePackage(
                { id, customerName, packageType, packageWeight },
                selectedItem
              )
            : addPackage(
                { id, customerName, packageType, packageWeight },
                selectedItem
              )
        }
      >
        {isEdit ? "update" : "submit"}
      </Button>
      </Grid>
    </div>
  );
};

export default PackageForm;
