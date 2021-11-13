import { Button, Container, Grid, TextField, Typography, Alert, AlertTitle, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const [loginData,setLoginData]=useState({})
    const {user, loginUser,isLoading, authError}=useAuth();
    const location=useLocation();
    const history=useHistory();

    const handleOnBlur=(e)=>{
        const field=e.target.name;
        const value=e.target.value;
        console.log(field,value);
        // new way to set data in useState hook
        const newLoginData={...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);

    }
    const handleLoginBtn=(e)=>{
        e.preventDefault();
        // alert('ok')
        loginUser(loginData.email, loginData.pass,location,history)
    }
    return (
        <Container>
            <Grid container spacing={2} >
                <Grid sx={{ mt:5}} item xs={12} md={6}>
                   <Typography  variant="body1">Login</Typography>
                    {!isLoading && <form onSubmit={handleLoginBtn}>
                    <TextField
                            sx={{ width: '75%',m:1 }}
                            id="standard-basic"
                            label="your email"
                            variant="standard"
                            // manage email and pass at the same time
                            type="email"
                            name="email"
                            onBlur={handleOnBlur} />
                    <TextField
                            sx={{ width: '75%',m:1 }}
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            // manage email and pass at the same time
                            name="pass"
                            onBlur={handleOnBlur} />

                    <Button sx={{ width: '75%', m:2 }} type="submit" variant="contained">Login</Button>
                    <NavLink
                     style={{textDecoration:"none"}}
                     to="/register">
                      <Button variant="text">Not Register Yet? Please Register Here...</Button>
                    </NavLink>
                    </form>  } 
                    {isLoading && <CircularProgress />}  
                    {user?.email && <Alert severity="success">User Logged In Successfully! — check it out!</Alert>}
                    {authError && <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {authError}
                        </Alert>
                    }          

                </Grid>
                <Grid item xs={12} md={6}>
                   <img style={{width:"100%"}} src="" alt="" />
                </Grid>
            </Grid>
       </Container>
    );
};

export default Login;