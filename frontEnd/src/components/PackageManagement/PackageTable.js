import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";



const PackageTable = ({rows,selectedPackage,deletePackage}) => {
    return(
<TableContainer component={Paper}sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginBottom: '20px' }}>
    <Table sx={{ minWidth: 650 }}>

        <TableHead>
            <TableRow sx={{ backgroundColor: '#ff0000' }}>
                <TableCell>ID</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Package Type</TableCell>
                <TableCell> Package Weight</TableCell>
                <TableCell>Actions</TableCell>
                

                
            </TableRow>
        </TableHead>
        <TableBody>
         {
           rows.length > 0 ? rows.map(row => (
                <TableRow key={row._id}sx={{'&:last-child td,&:last-child th':{border:0},backgroundColor:'#bebebe'}}>
                    <TableCell component='th' scope='row'>{row.id}</TableCell>
                    <TableCell component='th' scope='row'>{row.customerName}</TableCell>
                    <TableCell component='th' scope='row'>{row.packageType}</TableCell>
                    <TableCell component='th' scope='row'>{row.packageWeight}</TableCell>
                   
                   
                     <TableCell>
                    
                        <Button
                           sx={{margin:'0px 10px',
                           
                            marginBottom: "20px",
                             backgroundColor: "#006400",
                              color: "#000000",
                             marginLeft: "15px",
                             marginTop: "20px",
                             "&:hover": {
                              opacity: 0.7,
                              backgroundColor: "#006400",
                             },}}
                             onClick={() =>selectedPackage ({ id: row.id,
                                customerName: row.customerName,
                                packageType: row.packageType,
                                packageWeight: row.packageWeight})}
                       >
                          Update
                        </Button>
                        <Button
                             sx={{margin:'0px 10px',
                             
                            marginBottom: "20px",
                             backgroundColor: "#ADD8E6",
                             color: "#000000",
                              marginLeft: "15px",
                              marginTop: "20px",
                              "&:hover": {
                               opacity: 0.7,
                                backgroundColor: "#ADD8E6",
                         },}}
                            onClick={() =>deletePackage ({ id:row.id})}
                                
                       >
                          Delete
                        </Button>
                    </TableCell>
                    </TableRow>
            )) 
            : (
                <TableRow key="no-data"sx={{'&:last-child td,&:last-child th':{border:0}}}>
                <TableCell component='th' scope='row'>No Data</TableCell>
                </TableRow>
            )  
        
        }
         
        </TableBody>
    </Table>

</TableContainer>

    );
};
export default PackageTable;