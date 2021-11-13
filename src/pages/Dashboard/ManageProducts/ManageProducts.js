import React, { useEffect, useState } from 'react';
import useAuth from './../../../hooks/useAuth';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ManageProducts = () => {
    const {user}=useAuth();
    const [products,setProducts]=useState([]);
   console.log(user.email);
    useEffect(()=>{
        fetch(`http://localhost:5000/products`)
        .then(res =>res.json())
        .then(result =>{
            setProducts(result);
        })
    },[])

    const handleDeleteBtn=(id)=>{
        const proceed=window.confirm('Are You Sure?');

        console.log(id);
        if(proceed){
            fetch(`http://localhost:5000/products/${id}`,{
            method:"DELETE",
            headers:{
                "content-type":"application/json"
            }
        })
        .then(res => res.json())
        .then(result =>{
            if(result.deletedCount>0){
                const remaining=products.filter(p=> p._id !== id)
                setProducts(remaining);
             }
        })
        }
    }
    return (
        <div>
        <h2>My Orders</h2>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {products.map((order, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
               <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={order?.img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {order?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {
                            order?.price

                        }
                    </Typography>
                </CardContent>
                <CardActions>
                    
                    <Button onClick={()=>handleDeleteBtn(order?._id)} size="small">Delete</Button>
                </CardActions>
                </Card>
            </Grid>
            ))}
        </Grid>
</Box>
    </div>
    );
};

export default ManageProducts;