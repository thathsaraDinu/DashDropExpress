import { useState } from "react";
import { Button,  Paper,   Table, TableBody, TableCell, TableContainer, TableHead, TableRow,TextField } from "@mui/material";


const OrdersTable = ({rows , selectedOrder , deleteOrder}) =>{
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredRows = rows.filter((row) =>
        Object.values(row).some(
            (value) => typeof value === "string" && value.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    return(
        <div className="mb-20">
            <TextField
                variant="outlined"
                label="Search"
                value={searchTerm}
                onChange={handleSearchChange}
                sx={{ marginBottom: "10px" }}
            />
    <TableContainer component={Paper} >
        <Table>
            <TableHead>
                <TableRow sx={{ backgroundColor: '#A1E8AB' }}>
                    <TableCell> Order ID</TableCell>
                    <TableCell> Order Date</TableCell>
                    <TableCell>Sender Name</TableCell>
                    <TableCell>Sender Address</TableCell>
                    <TableCell>Sender Contact No</TableCell>
                    <TableCell>Sender Email</TableCell>
                    <TableCell>Recipient Name</TableCell>
                    <TableCell>Recipient Address</TableCell>
                    <TableCell>Recipient Contact No</TableCell>
                    <TableCell>Item Type</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell> Weight (in Kg)</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                filteredRows.length > 0 ? filteredRows.map(row =>(
                    <TableRow key={row.id} sx={{'&:last-child td,&:last-child th':{border:0},
                    backgroundColor:'#BEE8D6',
                    }} >
                          <TableCell component='th' scope="row">{row.id}</TableCell>
                          <TableCell component='th' scope="row">{row.date}</TableCell>
                          <TableCell component='th' scope="row">{row.name}</TableCell>
                          <TableCell component='th' scope="row">{row.address}</TableCell>
                          <TableCell component='th' scope="row">{row.contact}</TableCell>
                          <TableCell component='th' scope="row">{row.email}</TableCell>
                          <TableCell component='th' scope="row">{row.Name}</TableCell>
                          <TableCell component='th' scope="row">{row.Address}</TableCell>
                          <TableCell component='th' scope="row">{row.Contact}</TableCell>
                          <TableCell component='th' scope="row">{row.item}</TableCell>
                          <TableCell component='th' scope="row">{row.quantity}</TableCell>
                          <TableCell component='th' scope="row">{row.weight}</TableCell>

                          <TableCell>
                            <Button
                                sx={{margin:'0px 10px', backgroundColor: '#9CAFEE',color: '#0F0E0E' }}
                                onClick={() => selectedOrder({id:row.id ,date:row.date, name:row.name,address:row.address,contact:row.contact,email:row.email,Name:row.Name,Address:row.Address,Contact:row.Contact,item:row.item,quantity:row.quantity,weight:row.weight})}                            
                            >
                                Update
                            </Button>
                            <Button
                                sx={{margin:'0px 10px',backgroundColor:'#EE9461',color: '#0F0E0E'}} 
                                onClick={() => deleteOrder({id: row.id})}
                             >
                                Delete
                            </Button>                           
                          </TableCell>
                    </TableRow>                 
                )) : (
                    <TableRow  sx={{'&:last-child td,&:last-child th':{border:0}}}>
                        <TableCell component='th' scope="row">No Data</TableCell>
                    </TableRow>
                )
             }      
            </TableBody>
        </Table>
    </TableContainer>
    </div>
    );

}
export default OrdersTable;