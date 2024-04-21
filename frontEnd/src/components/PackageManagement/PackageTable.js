import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useState } from "react";



const PackageTable = ({rows,selectedPackage,deletePackage}) => {
    const [search, setSearch] = useState("");
    return(
<TableContainer component={Paper}sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginBottom: '20px' }}>
<div className="flex justify-end bg-gray-600">
                  <div className="w-80 float-right ">
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
                        placeholder="Search Customer Name"
                        onChange={(e) => setSearch(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
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
           rows.length > 0 ? rows.filter((row) => {
            return search.toLowerCase() === ""
              ? row
              : row.customerName.toLowerCase().includes(search);
          })
          .map(row => (
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