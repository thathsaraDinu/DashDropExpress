import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";


const StudentTable = ({rows,selectedStudent,deleteStudent}) => {
    return(
<TableContainer component={Paper}sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginBottom: '20px' }}>
    <Table sx={{ minWidth: 650 }}>
        <TableHead>
            <TableRow sx={{ backgroundColor: '#000080'  }}>
                <TableCell sx={{ color: '#FFFFFF' }}>Vin</TableCell>
                <TableCell sx={{ color: '#FFFFFF' }}>RegistrationNumber</TableCell>
                <TableCell sx={{ color: '#FFFFFF' }}>VehicleType</TableCell>
                <TableCell sx={{ color: '#FFFFFF' }}>Model</TableCell>
                <TableCell sx={{ color: '#FFFFFF' }}>SelectedYear</TableCell>
                <TableCell sx={{ color: '#FFFFFF' }}>InsuranceDetails</TableCell>
                <TableCell sx={{ color: '#FFFFFF' }}>Actions</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
         {
           rows.length > 0 ? rows.map(row => (
                <TableRow key={row.vin}sx={{'&:last-child td,&:last-child th':{border:0} ,backgroundColor: '#C0C0C0'}}>
                    <TableCell component='th' scope='row'>{row.vin}</TableCell>
                    <TableCell component='th' scope='row'>{row.registrationNumber}</TableCell>
                    <TableCell component='th' scope='row'>{row.vehicleType}</TableCell>
                    <TableCell component='th' scope='row'>{row.model}</TableCell>
                    <TableCell component='th' scope='row'>{row.selectedyear}</TableCell>
                    <TableCell component='th' scope='row'>{row.insuranceDetails}</TableCell>
                    
                    <TableCell>
                    
                        <Button
                            sx={{margin:'0px 10px',
                                  margin: "auto",
                                   marginBottom: "20px",
                                    backgroundColor: "#006400",
                                     color: "#ffffff",
                                    marginLeft: "15px",
                                    marginTop: "20px",
                                    "&:hover": {
                                     opacity: 0.7,
                                     backgroundColor: "#006400",
                                    },}}
                            onClick={() => selectedStudent({
                                vin: row.vin, // Vehicle Identification Number
                                registrationNumber: row.registrationNumber,
                                vehicleType: row.vehicleType,
                                model: row.model,
                                selectedyear: row.selectedyear,
                                insuranceDetails: row.insuranceDetails





                            })}
                       >
                          Update
                        </Button>
                        <Button
                            sx={{margin:'0px 10px',
                                  margin: "auto",
                                 marginBottom: "20px",
                                  backgroundColor: "#ff0000",
                                  color: "#ffffff",
                                   marginLeft: "15px",
                                   marginTop: "20px",
                                   "&:hover": {
                                    opacity: 0.7,
                                     backgroundColor: "#ff0000",
                              },}}
                            onClick={() => deleteStudent ({ vin:row.vin})}
                                

                       >
                          Delete
                        </Button>
                    </TableCell>
                    </TableRow>
            )) 
            : (
                <TableRow key="no-data"sx={{'&:last-child td,&:last-child th':{border:0}}}>
                <TableCell component='th' scope='row' >No Data</TableCell>
                </TableRow>
            )  
        
        }
         
        </TableBody>
    </Table>

</TableContainer>

    );
};
export default StudentTable;