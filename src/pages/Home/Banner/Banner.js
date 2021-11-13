import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img from '../../../images/watch.jpg';
import './Banner.css';
import Button from '@mui/material/Button';

const Banner = () => {
    return (
       <Box className="banner-container">
           <Grid container spacing={2} sx={{px:4}} className="banner-grid">
                <Grid item xs={12} md={6}>
                    <Typography variant="h3"  sx={{ }} className="text1">
                        LONGLASTING
                    </Typography>
                    <Typography variant="h4"  sx={{ }} className="text2">
                        Exclusive Stylish hand
                    </Typography>
                    <Typography variant="h4"  sx={{  }} className="text2">
                        watch
                    </Typography>
                    <Button  className="banner-btn"> Buy Now</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                <img 
                    style={{width:"80%", padding:"10px"}}
                    src={img}  alt="watch image" />
                </Grid>
        
      </Grid>
       </Box>
    );
};

export default Banner;