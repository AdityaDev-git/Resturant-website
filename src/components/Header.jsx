import React, { useState } from 'react'
import "./../styles/HeaderStyles.css";
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../firebaseconfig";
import LogoutIcon from '@mui/icons-material/Logout';

const Header= () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    
    //handle menu click
    const handleDrawerToggle =()=>{
        setMobileOpen(!mobileOpen);
    }
    // user logout
     const logout = async () => {
    await signOut(auth);
  };

    //menu drawer
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign:"center"}} >
            <Typography color={'goldenrod'} variant='h6' component={'div'} sx={{flexGrow:1,my:2}}>
                <FastfoodIcon/>
                MIZU RESTO
            </Typography >
            <Divider/>
                <ul className='mobile-navigation'>
                    <li>
                        <NavLink to='/home'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'>Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                    <li>
                        <button onClick={logout} style={{"background-color":"black","cursor":"pointer"}}><LogoutIcon sx={{color:"white",bgcolor:"black" }}/></button>
                    </li>
                </ul>
        </Box>

    )
        
  return (
    <>
    <Box>
        <AppBar component={'nav'} sx={{bgcolor:"black"}}>
            <Toolbar>
                <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{mr:2, display:{sm:"none"}}} onClick={handleDrawerToggle}>
                    <MenuIcon/>
                </IconButton>
            <Typography color={'goldenrod'} variant='h6' component={'div'} sx={{flexGrow:1}}>
                <FastfoodIcon/>
                MIZU RESTO
            </Typography>
            <Box sx={{display:{xs:"none", sm:"block"}}}>
                <ul className='navigation-menu'>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'>Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                    <li>
                        <button onClick={logout} style={{"background-color":"black","cursor":"pointer"}}><LogoutIcon sx={{color:"white",bgcolor:"black" }}/></button>
                    </li>
                </ul>
            </Box>
            </Toolbar>
        </AppBar>
        <Box component="nav">
            <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{xs:'block', sm:'none'},
             "& .MuiDrawer-paper":{boxSizing:"border-box", width:"250px"}}}>
                {drawer}
            </Drawer>
        </Box>
        <Box>
            <Toolbar/>
        </Box>
    </Box>
    </>
)
}

export default Header