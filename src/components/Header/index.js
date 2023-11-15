import * as React from 'react';
import "./style.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Link} from "@mui/material"

const Header = () => {
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" 
                sx={{
                  backgroundColor: "#323844", height:"80px"
                }}>
          <Toolbar  disableGutters
                    sx={{
                      width: "70vw", 
                      margin: "auto", 
                    }}>
                  <Link href="./" 
                        underline="none" 
                        variant='h5' 
                        sx={{color: "#ffffff"}} >
                      XXXMuck
                  </Link>
          </Toolbar>
        </AppBar>
      </Box>   
    </header>
  );
}

export default Header