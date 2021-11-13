import { Grid, Typography } from '@mui/material';
import React from 'react';
import './AboutUs.css';
const AboutUs = () => {
    return (
        <div className="about">
            <Grid container spacing={2} style={{alignItems:"center"}}>
                <Grid item xs={12} md={6}>
                <Typography variant="caption" display="block" gutterBottom>
                  ABOUT US
                </Typography>
                <Typography variant="h2" gutterBottom component="div">
                A Unique watch that fits Your Style
                </Typography>
                <Typography variant="body2" gutterBottom>
                The new Lawson collection is already here! This quartz Lawson Franklin 38 model, designed with simplicity and elegance, is truly a cherry on the cake. Comes in different sizes and band colors, has a stainless steel back for a personalized engraving.
                </Typography>

                </Grid>
                <Grid  item xs={12} md={6}>
                    <img 
                     style={{width:"100%"}}
                     src="https://cdn.shopify.com/s/files/1/0564/2705/3216/files/img-1.jpg?v=1633497682" alt="" />
                </Grid>
            
            </Grid>
        </div>
    );
};

export default AboutUs;