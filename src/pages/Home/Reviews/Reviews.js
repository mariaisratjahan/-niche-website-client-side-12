import { Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('https://gentle-temple-03216.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data =>{
            setReviews(data)
        })
    },[])
    return (
        <div className="p-5">
          <h2 className="pb-5"> Reviews</h2>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{  sm: 12, md: 12 }} sx={{ p:4 }}>
                {reviews.map((r, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                      <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                             
                            </Typography>
                            ~{r.name}
                            <Typography variant="body2">
                            {r.review}
                            </Typography>
                        </CardContent>
                       
                        </Card>
                    </Grid>
                ))}
</Grid>
        </div>
    );
};

export default Reviews;