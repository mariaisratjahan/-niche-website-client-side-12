import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";

const ManageAllOrders = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const [allOrders,setAllOrders]=useState([]);
     useEffect(()=>{
         fetch('http://localhost:5000/purchaseAll')
         .then(res=> res.json())
         .then(result =>{
            setAllOrders(result);
         })
     },[])
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">Product Name</TableCell>
              <TableCell align="right">Product Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allOrders.map((row,index) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.userName}
                </TableCell>
                <TableCell align="right">{row.userEmail}</TableCell>
                <TableCell align="right">{row.city}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">                 
                <Button variant="">Delete</Button>
                <Button variant="contained">{row.status}</Button>
                  
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default ManageAllOrders;