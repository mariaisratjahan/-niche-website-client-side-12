import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const Explore = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data=>{
            setProducts(data);
            console.log(data);
        })
    },[])
    const handlePurchase=(id)=>{
           
    }
    return (
        <Container sx={{my:4}}>
        <h2 className="my-4 m-6">OUR Collections</h2>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {products.map((product, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={product.img}
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.pname}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       {product.description}
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                        ${product.price}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/purchase/${product._id}`}>
                        <Button onClick={handlePurchase}  variant="contained">
                        purchase
                        </Button>
                    </Link>
                </CardActions>
                </Card>
            </Grid>
            ))}
        </Grid>
      </Box>
        </Container>
    );
};

export default Explore;