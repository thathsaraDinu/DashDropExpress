import { Box } from "@mui/material";
import Studentform from "./Studentform";
import StudentTable from "./StudentTable";
import Axios from "axios";
import { useEffect, useState } from "react";
import MainMenu from "../../MainMenu";





const Student = () => {
     const[students,setStudents] = useState([]);
     const[submited,setSubmited] = useState(false);
     const[selectedStudent,setSelectedStudent]=useState('');
     const[isEdit,setIsEdit]=useState(false);
     const [monthlyCost, setMonthlyCost] = useState(0); // Add state variable for monthly cost
     
     const [startDistance, setStartDistance] = useState(0); // State variable for start distance
     const [endDistance, setEndDistance] = useState(0); // State variable for end distance
     const [selectedVehicleType, setSelectedVehicleType] = useState('car'); // Add state variable for selected vehicle type

   

     useEffect(()=>{
        getStudents();
     },[]);

     const getStudents = () => {
         Axios.get('http://localhost:3001/api/students')
            .then(response => {
              setStudents(response.data?.response || []);
            })
            .catch(error => {
              console.error("Axios Error:",error);
     });
           
     }
     const addStudent=  (data) => {
       setSubmited(true);
        const payload = {
          vin: data.vin, // Vehicle Identification Number
          registrationNumber: data.registrationNumber,
          vehicleType: data.vehicleType,
          model: data.model,
          selectedyear: data.selectedyear,
          insuranceDetails: data.insuranceDetails
        }
        Axios.post('http://localhost:3001/api/createstudent',payload)
        .then(() => {
          getStudents();
          setSubmited(false);
          setIsEdit(false);
        })
        .catch(error => {
          console.error("Axios Error:",error);
 });
       

        

     }
     const updateStudent =(data)=> { 
      setSubmited(true);
      const payload = {
        vin: data.vin, // Vehicle Identification Number
        registrationNumber: data.registrationNumber,
        vehicleType: data.vehicleType,
        model: data.model,
        selectedyear: data.selectedyear,
        insuranceDetails: data.insuranceDetails
      }
      Axios.post('http://localhost:3001/api/updatestudent',payload)
      .then(() => {
        getStudents();
        setSubmited(false);
        setIsEdit(false);
      })
      .catch(error => {
        console.error("Axios Error:",error);
});
      }
    const deleteStudent =(data) => {
      
 
      Axios.post('http://localhost:3001/api/deletestudent',data)
      .then(() => {
        getStudents();
        
      })
      .catch(error => {
        console.error("Axios Error:",error);
});

    }
    const handleVehicleTypeChange = (event) => {
      setSelectedVehicleType(event.target.value);
    }
  
    const calculateMonthlyCost = () => {
      const costPerLiter = 400;
      const oilConsumptionRates = {
        car: 5,
        bike: 10,
        threeWheel: 8,
        van: 15
      };
  
      const consumptionRate = oilConsumptionRates[selectedVehicleType];
  
      if (!consumptionRate) {
        console.error("Invalid vehicle type!");
        return;
      }
  
      const oilConsumption = (endDistance - startDistance) / consumptionRate;
      const monthlyCost = oilConsumption * costPerLiter;
      setMonthlyCost(monthlyCost);
    }
  
     

      return(
        <div>
          <MainMenu></MainMenu>
        <div style={{ position: "relative" }}>
        <img
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            zIndex: "-1",
            filter: "brightness(40%)",
            transform: "scaleX(-1)",
          }}
          src="/pexels-tima-miroshnichenko-6169129.jpg"
          alt="Background"
        />
        <Box
           sx={{
            
             margin:'auto',
             paddingTop:'100px',
             
           }}>
            <Studentform
            addStudent={addStudent}
            updateStudent={updateStudent}
            submitted={submited}
            data={selectedStudent}
            isEdit={isEdit}
        />
        <StudentTable 
        rows={students}
         selectedStudent={data => {
          setSelectedStudent(data);
           setIsEdit(true);
         }}
         deleteStudent={data =>window.confirm('Are you sure?')&& deleteStudent(data)}
        />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
            marginTop: "20px",
            backgroundColor: "Navy",
            width: "300px"
          
          }}
        >
          <p style={{ color: 'white'}}>OIL CALCULATOR</p>
          <input type="number" placeholder="Start Distance" onChange={(e) => setStartDistance(e.target.value)}  style={{ borderRadius: '5px', padding: '5px',margin: '5px'}} />
          <input type="number" placeholder="End Distance" onChange={(e) => setEndDistance(e.target.value)}  style={{ borderRadius: '5px', padding: '5px',margin: '5px' }} />
          <select value={selectedVehicleType} onChange={handleVehicleTypeChange} style={{ borderRadius: '5px', padding: '5px',margin: '5px' }} >
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="van">Van</option>
            <option value="threeWheel">Three Wheel</option>
          </select>
          <button onClick={calculateMonthlyCost} style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px',margin: '5px' }}>Calculate Monthly oil Cost</button>

          <p style={{ color: 'white' }}>Monthly oilCost: Rs.{monthlyCost}</p>
        </div>
        </div>
      </Box>
    </div>
    </div>
  );
}

export default Student;