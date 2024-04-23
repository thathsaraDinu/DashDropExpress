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
        </Box>
        <FooterMain></FooterMain>
        </div>
    );
}

export default Orders;
