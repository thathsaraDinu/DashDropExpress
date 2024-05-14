import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useState } from "react";


const StudentTable = ({rows,selectedStudent,deleteStudent}) => {
    const [search, setSearch] = useState("");
    return(
        <div className="p-10"><div className="mt-10 flex justify-end">
        <div className="w-80 float-right mb-5">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
              placeholder="Search Registration Number"
              onChange={(e) => setSearch(e.target.value)}
              required
            />
          </div>
        </div>
      </div>
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
           rows.length > 0 ? rows.filter((row) => {
            return search.toLowerCase() === ""
              ? row
              : row.registrationNumber.toLowerCase().includes(search);
          })
          .map(row => (
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
</div>
    );
};
export default StudentTable;