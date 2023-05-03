import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import FlightIcon from '@mui/icons-material/Flight';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import ReorderIcon from '@mui/icons-material/Reorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import MDTypography from 'components/MDTypography';
import MDBox from 'components/MDBox';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: "#800080", height:"12%" }} >
      <Container sx={{padding:1}}>
        <Toolbar disableGutters>
        <MDBox component="img" src="./luggage.png" alt="Brand" width="3rem" p={1}/>
                        
          <MDTypography
          fontWeight="bold" color="white"
            variant="h7"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: '.1rem',
              textDecoration: 'none',
            }}
          >
            HOLIDAY CENTRAL
          </MDTypography>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           <Button style={{color:"white"}}>Flight&nbsp;<FlightIcon color="white"/></Button>
           <Button style={{color:"white"}}>Hotels&nbsp;<NightShelterIcon color="white"/></Button>
           <Button style={{color:"white"}} href="/travel-packages">Packages&nbsp;<ReorderIcon color="white"/></Button>
          </Box>

          <MDBox pr={5} >
           <Button href='/cart' ><ShoppingCartIcon color="white" /></Button>
          </MDBox>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/ins.jpg" />
                <MDTypography p={1} variant="overline" sx={{fontSize:15}} color="white">TRAVEL AGENT</MDTypography>
              </IconButton>
              
            </Tooltip>
            
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;