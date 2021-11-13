import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    NavLink
  } from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MyOrders from '../MyOrders/MyOrders';
import AddRivew from '../AddRivew/AddRivew';
import Pay from '../Pay/Pay';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import AddProducts from '../AddProducts/AddProducts';
const drawerWidth = 240;

function Dashboard(props) {
    let { path, url } = useRouteMatch();
    const {user,admin, logOut}=useAuth();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <p><Link  to={`${url}`}>
            <Button color="inherit">Dashboard</Button>
      </Link></p>
       {user?.email && <Box>
         {
          !admin ? <Box>
        <p><Link style={{textDecoration:"none"}} to={`${url}/myOrders`}>
        <Button>My Orders</Button>
        </Link></p>
        <p><Link style={{textDecoration:"none"}} to={`${url}/addRivew`}>
        <Button>Add Review</Button>
        </Link></p>
        <p><Link style={{textDecoration:"none"}} to={`${url}/pay`}>
         <Button>Pay</Button>
        </Link></p>
      </Box> :
      <Box>
      <p><Link style={{textDecoration:"none"}} to={`${url}/manageOrders`}>
          <Button>Manage All Order</Button>
      </Link></p>
      <p><Link style={{textDecoration:"none"}} to={`${url}/manageDeleteOrders`}>
          <Button>Manage Products</Button>
      </Link></p>
      <p><Link style={{textDecoration:"none"}} to={`${url}/makeAdmin`}>
          <Button>Make Admin</Button>
      </Link></p>
      <p><Link style={{textDecoration:"none"}} to={`${url}/addProduct`}>
          <Button>ADD PRODUCT</Button>
      </Link></p>

      </Box>
         }
       </Box> }

      <p>
          {
            user?.email ? <Button onClick={logOut} variant="contained">Logout</Button>
            : <NavLink to="/login">
              <Button> Login </Button>
            </NavLink>

          }
      </p>
      
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/addRivew`}>
            <AddRivew></AddRivew>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route path={`${path}/manageOrders`}>
            <ManageAllOrders></ManageAllOrders>
          </Route>
          <Route path={`${path}/manageDeleteOrders`}>
            <ManageProducts></ManageProducts>
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/addProduct`}>
             <AddProducts></AddProducts>
          </Route>
      </Switch>
        
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
