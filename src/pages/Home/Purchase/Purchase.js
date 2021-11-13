import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { useForm } from "react-hook-form";
import useAuth from './../../../hooks/useAuth';
import './Purchase.css';
import { Box } from '@mui/system';
const Purchase = () => {
    const {pid}= useParams();
    const [singleProduct,setSingleProduct]=useState({});
    const {user}=useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const productName=singleProduct.pname;
        const productPrice=singleProduct.price;
        const status="pending"
        const userEmail=user.email;
        const userName=user.displayName;
        const productImg=singleProduct.img;
        data.name=productName;
        data.price=productPrice;
        data.status=status;
        data.userEmail=userEmail;
        data.userName=userName;
        data.img=productImg;
        
        fetch('https://gentle-temple-03216.herokuapp.com/purchase',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
           if(result.acknowledged){
               alert('purchase successfully')
               reset()
           }
        })
    };
    
    // console.log(pid);
    useEffect(()=>{
        fetch(`https://gentle-temple-03216.herokuapp.com/singleProduct/${pid}`)
        .then(res => res.json())
        .then(result =>{
            setSingleProduct(result);
            console.log(result);
        })
       
    },[])

  
    return (
        <div>
           <Container>
           <Grid container spacing={2} className="grid">
            <Grid item xs={12} md={6}>
             <Box>
             <h2>ORDER Now</h2>
                <form className="from-style" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user?.displayName} disabled />
                    <input defaultValue={user?.email} disabled />
                    <input {...register("address")} placeholder="Address" />
                    <input type="number" {...register("phone")} placeholder="Phone Number"  />
                    <input {...register("city")} placeholder="City"  />
                    <input type="submit" style={{backgroundColor:"gray",color:"white"}} value="purchase" />
                </form>
             </Box>
            </Grid>
            <Grid item xs={12} md={6}>
            <Card sx={{ width:"100%" }}>
                <CardMedia
                    component="img"
                    // 
                    width="100%"
                    image={singleProduct.img}
                    alt="green iguana"
                />
                <CardContent sx={{p:4}}>
                    <Typography gutterBottom variant="h5" component="div">
                     {singleProduct.pname}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {singleProduct.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                     ${singleProduct.price}
                    </Typography>
                </CardContent>
               
                </Card>
            </Grid>
           
           
            </Grid>
           </Container>
        </div>
    );
};

export default Purchase;