import { Box } from "@mui/material";
import OrderForm from "./OrderForm";
import OrdersTable from "./OrdersTable"; 
import Axios from "axios";
import { useEffect, useState } from "react";
import "./order.css";
import MainMenu from "../../MainMenu";
import FooterMain from "../../FooterMain";

const Orders = () => {
    const [orders,setOrders] = useState([]);
    const [submitted , setSubmitted] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState({});
    const [isEdit , setIsEdit] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [searchTerm] = useState('')
    const [totalCost, setTotalCost] = useState(0); 
    const [startDistance, setStartDistance] = useState(''); 
    const [endDistance, setEndDistance] = useState(''); 
    const [item,setItem] = useState('');
    const [kg,setKg] = useState('');

    useEffect(() => {
        getOrders();
    }, []);

    const getOrders = () =>{
        Axios.get('http://localhost:3001/api/orders')
              .then(response => {
                setOrders(response.data?.response || []);             
             })
             .catch(error => {
                console.error("Axios error : ",error);

             });
    }

    const filteredOrders = orders.filter(order =>
        Object.values(order).some(value =>
            typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const addOrder = (data) => {
        setSubmitted(true);

        const payload = {
            id:data.id,
            date:data.date,
            name: data.name,
            address: data.address,
            contact: data.contact,
            email: data.email,
            Name: data.Name,
            Address: data.Address,
            Contact: data.Contact,
            item: data.item,
            quantity: data.quantity,
            weight: data.weight,

        }
        Axios.post('http://localhost:3001/api/createorder',payload)
        .then(() => {
            getOrders(); 
            setSubmitted(false); 
            isEdit(false);       
         })
         .catch(error => {
            if (error.response) {
                setErrorMessage(error.response.data.error);
            } else {
                console.error("Axios error : ", error);
            }
            setSubmitted(false);

         });
    }

    const updateOrder = (data) =>{
        setSubmitted(true);

        const payload = {
            id:data.id,
            date:data.date,
            name: data.name,
            address: data.address,
            contact: data.contact,
            email: data.email,
            Name: data.Name,
            Address: data.Address,
            Contact: data.Contact,
            item: data.item,
            quantity: data.quantity,
            weight: data.weight,
        }
        Axios.post('http://localhost:3001/api/updateorder',payload)
        .then(() => {
            getOrders(); 
            setSubmitted(false);           
         })
         .catch(error => {
            if (error.response) {
                setErrorMessage(error.response.data.error);
            } else {
                console.error("Axios error : ", error);
            }
            setSubmitted(false);
         });

    }

    const deleteOrder = (data) => {
        Axios.post('http://localhost:3001/api/deleteorder',data)
        .then(() => {
            getOrders();         
         })
         .catch(error => {
            console.error("Axios error : ",error);

         });
    }
    const calculateTotalCost = () => {
        const costPerKg = 10; 
        const distancePrices = {
            "Matara-Galle": 2000,
            "Matara-Colombo": 2500,
            "Matara-Kandy": 3000,
            "Matara-Rathnapura": 3500,
            "Matara-Nuwara Eliya": 4000,
            "Matara-Jaffna": 5000,
            "Matara-Anuradhapura": 5500,
            "Matara-within 30km": 1000,
            "Matara-over 30km": 1500,
            "Galle-Matara": 2000,
            "Galle-Colombo": 2500,
            "Galle-Gampaha": 300,
            "Galle-Kandy": 3500,
            "Galle-Rathnapura": 4000,
            "Galle-Nuwara Eliya": 4500,
            "Galle-Jaffna": 5000,
            "Galle-Anuradhapura": 5500,
            "Galle-within 30km": 1000,
            "Galle-over 30km": 1500,
            "Colombo-Matara": 300,
            "Colombo-Galle": 3000,
            "Colombo-Colombo": 350,
            "Colombo-Kandy": 350,
            "Colombo-Matale": 350,
            "Colombo-Rathnapura": 350,
            "Colombo-Nuwara Eliya": 350,
            "Colombo-Hambantota": 350,
            "Colombo-Jaffna": 350,
            "Colombo-Anuradhapura": 350,
            "Colombo-within 30km": 350,
            "Colombo-over 30km": 350,
            "kandy-Galle": 300,
            "kandy-Colombo": 350,
            "kandy-Matara": 350,
            "kandy-Rathnapura": 350,
            "kandy-Nuwara Eliya": 350,
            "kandy-Hambantota": 350,
            "kandy-Jaffna": 350,
            "kandy-Anuradhapura": 350,
            "kandy-Polonnaruwa": 350,
            "kandy-within 30km": 350,
            "kandy-over 30km": 350,
            "Rathnapura-Galle": 300,
            "Rathnapura-Colombo": 350,
            "Rathnapura-Kandy": 350,
            "Rathnapura-Matara": 350,
            "Rathnapura-Nuwara Eliya": 350,
            "Rathnapura-Hambantota": 350,
            "Rathnapura-Jaffna": 350,
            "Rathnapura-Anuradhapura": 350,
            "Rathnapura-within 30km": 350,
            "Rathnapura-over 30km": 350,
        };
    
        const start = startDistance;
        const end = endDistance;
        const selectedItem = item;
        const weightValue = parseFloat(kg);
    
        if (!start || !end || !selectedItem || isNaN(weightValue)) {
            setTotalCost(0);
            return;
        }
    
        const distanceKey = `${start}-${end}`;
    
        if (!distancePrices.hasOwnProperty(distanceKey)) {
            setTotalCost(0); 
            return;
        }
    
        const distancePrice = distancePrices[distanceKey];
    
        const totalCostValue = weightValue * costPerKg + distancePrice;
    
        setTotalCost(totalCostValue);
    }

    return (
        <div className="body backgroundimage relative" >
            <MainMenu></MainMenu>
        <Box
            sx={{
                width:'calc(100% - 100px)',
                margin:'auto',
                marginTop:'100px',
            }}       
        >
         {errorMessage && (
                <div style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</div>
            )}
             
             <OrderForm
                 addOrder = {addOrder}
                 updateOrder = {updateOrder}
                 submitted ={submitted}
                 data = {selectedOrder}
                 isEdit = {isEdit}
             />
             <OrdersTable 
                   rows={filteredOrders} 
                   selectedOrder={data => {
                    setSelectedOrder(data);
                    setIsEdit(true);
                   }}
                   deleteOrder = {data => window.confirm('Are you sure?') && deleteOrder(data)}
             
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
            backgroundColor: "#9BBE7C",
            width: "300px",
            marginBottom:"50px",
          
          }}
        >
          <p style={{ color: 'blue'}}> ORDER CALCULATOR</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
    <span style={{ marginRight: '5px' }}>From:</span>
    <select
        id="startDistance"
        onChange={(e) => setStartDistance(e.target.value)}
        style={{ borderRadius: '5px', padding: '5px', margin: '5px' }}
        defaultValue=""
    >
        <option disabled value=""></option>
        <option value="Matara">Matara</option>
        <option value="Galle">Galle</option>
        <option value="Colombo">Colombo</option>
        <option value="Anuradhapura">Anuradhapura</option>
        <option value="Kandy">Kandy</option>
        <option value="Nuwara Eliya">Nuwara Eliya</option>
        <option value="Gampaha">Gampaha</option>
        <option value="Matale">Matale</option>
        <option value="Rathnapura">Rathnapura</option>
        <option value="Jaffna">Jaffna</option>
        <option value="within 30km">within 30km</option>
        <option value="over 30km">over 30km</option>
    </select>
</div>

<div style={{ display: 'flex', alignItems: 'center' }}>
    <span style={{ marginRight: '5px' }}>To:</span>
    <select
        id="endDistance"
        onChange={(e) => setEndDistance(e.target.value)}
        style={{ borderRadius: '5px', padding: '5px', marginLeft: '20px' }}
        defaultValue=""
    >
        <option disabled value=""></option>
        <option value="Matara">Matara</option>
        <option value="Galle">Galle</option>
        <option value="Colombo">Colombo</option>
        <option value="Anuradhapura">Anuradhapura</option>
        <option value="Kandy">Kandy</option>
        <option value="Nuwara Eliya">Nuwara Eliya</option>
        <option value="Gampaha">Gampaha</option>
        <option value="Matale">Matale</option>
        <option value="Rathnapura">Rathnapura</option>
        <option value="Jaffna">Jaffna</option>
        <option value="within 30km">within 30km</option>
        <option value="over 30km">over 30km</option>
    </select>
</div>

<div style={{ display: 'flex', alignItems: 'center' }}>
    <span style={{ marginRight: '5px' }}>Item:</span>
    <select
        id="item"
        onChange={(e) => setItem(e.target.value)}
        style={{ borderRadius: '5px', padding: '5px', margin: '5px' }}
        defaultValue=""
    >
        <option disabled value=""></option>
        <option value="Parcel">Parcel</option>
        <option value="Electronic Goods">Electronic Goods</option>
        <option value="Glass Item">Glass Item</option>
        <option value="Plastic Item">Plastic Item</option>
        <option value="Furnitures">Furnitures</option>
        <option value="Medical products">Medical products</option>
        <option value="Gift Items">Gift Items</option>
    </select>
</div>

<div style={{ display: 'flex', alignItems: 'center' }}>
    <label style={{ marginRight: '5px' }}>kg:</label>
    <input 
        type="number" 
        onChange={(e) => setKg(e.target.value)}  
        style={{ 
            borderRadius: '5px', 
            padding: '5px', 
            fontSize: '12px', 
            width: '120px', 
            marginLeft: '14px',
            marginBottom: '5px'
        }} 
        min="0" 
    />
</div>      
          <button onClick={calculateTotalCost} style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px',margin: '5px' }}>Calculate Total Cost</button>

          <p style={{ color: 'white' }}>Total Cost: Rs.{totalCost}</p>
          </div>
          </div>

        </Box>
        <FooterMain></FooterMain>
        </div>
    );
}

export default Orders;
