import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Header = () => {
  const {user,logOut}=useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{p:1}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: "left" }}>
              Tick Tock
            </Typography>
            <NavLink to="/home" style={{textDecoration:"none", color:"white", marginRight:"20px"}}>
            <Button color="inherit" >Home</Button>
            </NavLink>
            <NavLink to="/explore" style={{textDecoration:"none", color:"white", marginRight:"20px"}}>
            <Button color="inherit" >Explore</Button>
            </NavLink>
           
            {
              user?.email ?<Box>
                 <Box>
                 <NavLink to="/dashboard" style={{textDecoration:"none", color:"white", marginRight:"20px"}}>
                  <Button color="inherit" >Dashboard</Button>
                 </NavLink>
                 <NavLink to=""  style={{textDecoration:"none", color:"white", marginRight:"20px"}}>
                    <Button onClick={logOut} color="inherit">Logout</Button>
                  </NavLink>
                 </Box>                 
              </Box> :
            <NavLink to="/login"  style={{textDecoration:"none", color:"white"}}>
            <Button color="inherit">Login</Button>
            </NavLink>
            }

           {user?.email && <NavLink to=""  style={{ color:"tan" ,padding:"3px"}}>
            <Button color="inherit">user : {user?.displayName}</Button>
            </NavLink>}
            
            
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Header;