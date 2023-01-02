import React, {useState, useEffect} from "react";
import { AppBar, Toolbar, Tabs, Tab, Box, useTheme, useMediaQuery } from "@mui/material";
import DrawerComp from "./DrawerComp";
import {Link} from 'react-router-dom';
import {HashLink as Hash} from 'react-router-hash-link';


function Navbar() {
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;

    if(currentScrollPosition > prevScrollPosition) {
      setVisible(false);
    }else {
      setVisible(true);
    }

    setPrevScrollPosition(currentScrollPosition)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  })

  return (
    <Box className={`navbar ${visible ? 'top-0': 'invisible'}`} sx={{ flexGrow:1, marginTop:"-1rem" }}>
      <AppBar sx={{background:"#EEF2E6", boxShadow:"none"}}>
        <Toolbar>
          <Hash smooth to='/#about'>
            <img src="/images/logo-01-250.png" alt="logo"/>
          </Hash> 
          {matches ? (
            <DrawerComp />
          ) : (
            <>
              <Tabs
                sx={{margin: "auto"}}
                alignItems="center"
                justify="center">
                <Hash smooth to='/#about' style={{ textDecoration: 'none', color:'black' }}><Tab label="About" className="tab"/></Hash>
                <Link to='/portfolio'  style={{ textDecoration: 'none', color:'black' }}><Tab label="Portfolio" className="tab"/></Link>
                <Link to='/blog'  style={{ textDecoration: 'none', color:'black' }}><Tab label="Blog" className="tab"/></Link>
                <Hash smooth to='/#contacto' style={{ textDecoration: 'none', color:'black' }}><Tab label="contacto" className="tab"/></Hash>
              </Tabs>
            </>
          )}            
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar