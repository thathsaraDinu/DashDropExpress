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
            "Matara-Galle": 1000,
            "Matara-Colombo": 1500,
        };
        const start = parseFloat(startDistance);
        const end = parseFloat(endDistance);
        const weightValue = parseFloat(kg)

        console.log("Start Distance:", start);
        console.log("End Distance:", end);
        console.log("Weight Value:", weightValue);

        if (isNaN(start) || isNaN(end) || isNaN(weightValue)) {
            setTotalCost(0);
            return;
        }

        const distanceKey = `${startDistance}-${endDistance}`;

        console.log("Distance Key:", distanceKey);

        if (!distancePrices.hasOwnProperty(distanceKey)) {
            setTotalCost(2000);
            return;
        }
        const distancePrice = distancePrices[distanceKey];
        console.log("Distance Price:", distancePrice);
   
        const totalCostValue = weightValue * costPerKg  * distancePrice;
        console.log("Total Cost Value:", totalCostValue);
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
