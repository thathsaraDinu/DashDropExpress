import { Button, Grid, Input, Typography , MenuItem, Select} from "@mui/material";
import { useEffect, useState } from "react";

const OrderForm = ({addOrder, updateOrder ,submitted, data ,isEdit})=>{
    const [id,setId] = useState(0);
    const handleChange = (e) => {
        const inputValue = e.target.value;    
        if (inputValue === id) {
          return;
        }
        if (parseInt(inputValue) < 0) {
          return;
        }
        setId(inputValue);
      };
    const [date,setDate] = useState('');
    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const [contact,setContact] = useState('');
    const [isValid, setIsValid] = useState(true);
    const validateContact = () => {
        const isValidContact = /^\d{10}$/.test(contact); 
        setIsValid(isValidContact);
    };
    const [email,setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const validateEmail = () => {
        setIsValidEmail(/^\S+@\S+\.\S+$/.test(email));
    };
    const [Name,setname] = useState('');
    const [Address,setaddress] = useState('');
    const [Contact,setcontact] = useState('');
    const [isCValid, setIsCValid] = useState(true);
    const validatecontact = () => {
        const isCValidContact = /^\d{10}$/.test(Contact); 
        setIsCValid(isCValidContact);
    };
    const [item,setItem] = useState('');
    const [quantity,setQuantity] = useState(0);
    const [weight,setWeight] = useState(0);

    const isFormValid = () => {
        return name && address && contact && email && Name && Address && Contact && item && quantity>=0 && weight>=0 && weight<=50;
    }

    useEffect(()=>{
        if(!submitted){
            setId(0);
            setDate('');
            setName('');
            setAddress('');
            setContact('');
            setEmail('');
            setname('');
            setaddress('');
            setcontact('');
            setItem('');
            setQuantity(0);
            setWeight(0);

        }
    },[submitted]);

    useEffect(() =>{
        if (data?.id && data.id !== 0 ){
            setId(data.id);
            setDate(data.date);
            setName(data.name);
            setAddress(data.address);
            setContact(data.contact);
            setEmail(data.email);
            setname(data.Name);
            setaddress(data.Address);
            setcontact(data.Contact);
            setItem(data.item);
            setQuantity(data.quantity);
            setWeight(data.weight);

        }
    }, [data]);
    return(
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor:"rgba(192,192,192,0.9)",
                marginBottom:'10px',
                display:'block',
                margin: '70px',
                padding: '10px', 
                maxWidth: '800px',              
                maxHeight: '1000px', 
                overflowY: 'auto',
        

            }}
        >
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Typography component={'h1'} sx={{color:'#1773BF',fontSize:'30px'}} >Order Details</Typography>
            </Grid>

            <Grid item xs ={12} sm={6} sx={{display:'flex'}}>
                <Typography
                component={'label'}
                htmlFor="id"
                sx={{
                    color:'#000000',
                    marginRight:'20px',
                    fontSize:'16px',
                    width:'200px',
                    display:'block',
                }}
                >
                    Order ID
                </Typography>
                <Input
                    type="number"
                    id='id'
                    name="id"
                    sx={{width:'400px'}}
                    value={id}
                    onChange={handleChange}
                />

            </Grid>
            <Grid item xs ={12} sm={6} sx={{display:'flex'}}>
                <Typography
                component={'label'}
                htmlFor="date"
                sx={{
                    color:'#000000',
                    marginRight:'20px',
                    fontSize:'16px',
                    width:'200px',
                    display:'block',
                }}
                >
                    Order Date
                </Typography>
                <Input
                    type='date'
                    id='date'
                    name="date"
                    sx={{width:'400px'}}
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />

            </Grid>
              
            <Grid item xs ={12} sm={6} sx={{display:'flex'}}>
                <Typography
                component={'label'}
                htmlFor="name"
                sx={{
                    color:'#000000',
                    marginRight:'20px',
                    fontSize:'16px',
                    width:'200px',
                    display:'block',
                }}
                >
               
                   Sender Name
                </Typography>
                <Input
                    type="text"
                    id='name'
                    name="name"
                    sx={{width:'400px'}}
                    value={name}
                    onChange={e => setName(e.target.value)}
                               
                />
            </Grid>
            <Grid item xs ={12} sm={6} sx={{display:'flex'}}>
                <Typography
                component={'label'}
                htmlFor="address"
                sx={{
                    color:'#000000',
                    marginRight:'20px',
                    fontSize:'16px',
                    width:'200px',
                    display:'block',
                }}
                >
               
                   Sender Address
                </Typography>
                <Input
                    type="text"
                    id='address'
                    name="address"
                    sx={{width:'400px'}}
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                               
                />
            </Grid>
            <Grid item xs ={12} sm={6} sx={{display:'flex'}}>
                <Typography
                component={'label'}
                htmlFor="contact"
                sx={{
                    color:'#000000',
                    marginRight:'20px',
                    fontSize:'16px',
                    width:'200px',
                    display:'block',
                }}
                >
               
                   Sender Contact No
                </Typography>
                <Input
                    type="text"
                    id='contact'
                    name="contact"
                    sx={{width:'400px'}}
                    value={contact}
                    onChange={e => setContact(e.target.value)}
                    onBlur={validateContact}                      
                />
                {!isValid && (
                <Typography variant="body2" color="red">
                    Please enter a valid 10-digit contact number.
                </Typography>
            )}
            </Grid>
            <Grid item xs ={12} sm={6} sx={{display:'flex'}}>
                <Typography
                component={'label'}
                htmlFor="email"
                sx={{
                    color:'#000000',
                    marginRight:'20px',
                    fontSize:'16px',
                    width:'200px',
                    display:'block',
                }}
                >
               
                   Sender Email
                </Typography>
                <Input
                    type="text"
                    id='email'
                    name="email"
                    sx={{width:'400px'}}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onBlur={validateEmail}          
                />
                 {!isValidEmail && (
                <Typography sx={{ color: 'red', fontSize: '12px' }}>
                    Please enter a valid email address.
                </Typography>
            )}
            </Grid>   
            <Grid item xs ={12} sm={6} sx={{display:'flex'}}>
                <Typography
                component={'label'}
                htmlFor="Name"
                sx={{
                    color:'#000000',
                    marginRight:'20px',
                    fontSize:'16px',
                    width:'200px',
                    display:'block',
                }}
                >
               
                   Recipient Name
                </Typography>
                <Input
                    type="text"
                    id='Name'
                    name="Name"
                    sx={{width:'400px'}}
                    value={Name}
                    onChange={e => setname(e.target.value)}
                               
                />
            </Grid>  
            <Grid item xs ={12} sm={6} sx={{display:'flex'}}>
                <Typography
                component={'label'}
                htmlFor="Address"
                sx={{
                    color:'#000000',
                    marginRight:'20px',
                    fontSize:'16px',
                    width:'200px',
                    display:'block',
                }}
                >
               
                   Recipient Address
                </Typography>
                <Input
                    type="text"
                    id='Address'
                    name="Address"
                    sx={{width:'400px'}}
                    value={Address}
                    onChange={e => setaddress(e.target.value)}
                               
                />
            </Grid> 
            <Grid item xs ={12} sm={6} sx={{display:'flex'}}>
                <Typography
                component={'label'}
                htmlFor="Contact"
                sx={{
                    color:'#000000',
                    marginRight:'20px',
                    fontSize:'16px',
                    width:'200px',
                    display:'block',
                }}
                >
               
                   Recipient Contact No
                </Typography>
                <Input
                    type="text"
                    id='Contact'
                    name="Contact"
                    sx={{width:'400px'}}
                    value={Contact}
                    onChange={e => setcontact(e.target.value)}
                    onBlur={validatecontact}                      
                />
                 {!isCValid && (
                    <Typography variant="body3" color="red">
                        Please enter a valid 10-digit contact number.
                    </Typography>
                          
             )}
            </Grid>
    
            <Grid item xs ={12} sm={6} sx={{display:'flex'}}>
                <Typography
                component={'label'}
                htmlFor="item"
                sx={{
                    color:'#000000',
                    marginRight:'20px',
                    fontSize:'16px',
                    width:'200px',
                    display:'block',
                }}
                >
                                
                   Item Type
                </Typography>
                <Select
                    labelId ="demo-simple-select-label"
                    id="demo-simple-select"
                    type="text"
                    sx={{width:'400px'}}
                    value={item}
                    label="Item Type"
                    onChange={e => setItem(e.target.value)}
                               
                >
                     <MenuItem value="Document"> Document</MenuItem>
                     <MenuItem value="Parcel">Parcel</MenuItem>
                     <MenuItem value="Electronic Goods">Electronic Goods</MenuItem>
                     <MenuItem value="Glass Item">Glass Item</MenuItem>
                     <MenuItem value="Plastic Item">Plastic Item</MenuItem>
                     <MenuItem value="Furnitures">Furnitures</MenuItem>
                     <MenuItem value="Medical products">Medical products</MenuItem>
                     <MenuItem value="Gift Items" >Gift Items</MenuItem>

                </Select>
            </Grid>
            <Grid item xs ={12} sm={6} sx={{display:'flex'}}>
                <Typography
                component={'label'}
                htmlFor="quantity"
                sx={{
                    color:'#000000',
                    marginRight:'20px',
                    fontSize:'16px',
                    width:'200px',
                    display:'block',
                }}
                >
               
                   Quantity
                </Typography>
                <Input
                    type="number"
                    id='quantity'
                    name="quantity"
                    sx={{width:'400px'}}
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
                               
                />
            </Grid>
            <Grid item xs ={12} sm={6} sx={{display:'flex'}}>
                <Typography
                component={'label'}
                htmlFor="weight"
                sx={{
                    color:'#000000',
                    marginRight:'20px',
                    fontSize:'16px',
                    width:'200px',
                    display:'block',
                }}
                >
               
                  Weight (in Kgs)
                </Typography>
                <Input
               
                    type="number"
                    id='weight'
                    name="weight"
                    sx={{width:'400px'}}
                    value={weight}
                    onChange={e => setWeight(e.target.value)}

                    inputProps={{ min: 0, max: 50 }} 
                               
                    />
                    {(weight < 0 || weight > 50) && (
                        <Typography variant="body3" color="red">
                               Weight must be between 0 and 50 kgs.
                           </Typography>
    )}
                               
            </Grid>
        
            <Button
            sx={{
                margin:'auto',
                marginBottom:'20px',
                backgroundColor:'#00c6e6',
                color:'#142FF0',
                marginLeft:'15px',
                marginTop:'20px',
                '&:hover':{
                    opacity:'0.7',
                    backgroundColor:'#00c6e6'
                }
            }}
            onClick = {() => isEdit ? updateOrder({id ,date, name,address,contact,email,Name,Address,Contact,item,quantity,weight}): addOrder ({id ,date, name,address,contact,email,Name,Address,Contact,item,quantity,weight})}
            disabled={!isFormValid()}
            >
                {
                   isEdit ? 'Update' : 'Add'
                }
            </Button>
        </Grid>     
    );
}

export default OrderForm;